// New leads trigger three things:
// 1. An email to Alexander via Resend — the primary notification for launch.
// 2. A page written into the existing "Messages" Notion database (CRM FORM) —
//    optional, not currently configured.
// 3. A lead created in Close CRM, with custom fields for property type, project
//    type, budget, timeline, renderings, and referral source, plus a note for
//    the free-text project details.
// Each step is independent: if one isn't configured yet, it's skipped (logged),
// not treated as a failure, so a visitor's submission is never blocked on a
// secondary integration being unavailable.

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
// Comma-separated list, e.g. "alexander@innovadesignstudio.ca,maria@innovadesignstudio.ca"
const LEAD_NOTIFY_EMAILS = (process.env.LEAD_NOTIFY_EMAIL || "")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

const CLOSE_API_KEY = process.env.CLOSE_API_KEY;
const CLOSE_LEAD_STATUS_ID = "stat_s8lalqUEWixcmnxyEntlwyVhefetegX7NprQF4CfdS5"; // "Potential"
const CLOSE_FIELDS = {
  propertyType: "cf_ZlcymV713bS1VSy6NhUuaNfhgIEkQHOtUNGx6HEZM3g",
  projectType: "cf_IuXp9XaYsfibdjN5wdK9TBOSni127xZfeYTmESg2aFp",
  budget: "cf_6ewgxmLxATakRmOXXkmiGAlsVwVFbj3WQsEJJarUHAk",
  timeline: "cf_spfNpoyMWagkvXjGKHIEIF9AHl9UrIs3m4m6cenNLAL",
  renderings: "cf_DJgkkhHM0lPunJXdg0IbFo0SbETaIOx5XQ3DLfEsp3d",
  referralSource: "cf_9vJsVlOPypwtGVojm18nmWtCh1Tcj1GIqlmGe4nFHER",
  region: "cf_EV2b6tNcdu8xmkcNRx1ZD91Q5EOJzBuT5bmYQ8um0oy",
};

type LeadData = {
  name?: string;
  email?: string;
  phone?: string;
  region?: string;
  propertyType?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  renderings?: string;
  referralSource?: string;
  details?: string;
};

async function sendEmail(data: LeadData) {
  if (!RESEND_API_KEY || LEAD_NOTIFY_EMAILS.length === 0) {
    console.warn("Resend not configured yet; skipping email notification:", data);
    return { skipped: true };
  }

  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Region", data.region],
    ["Property type", data.propertyType],
    ["Project type", data.projectType],
    ["Project budget", data.budget],
    ["Timeline", data.timeline],
    ["Looking for 3D renderings?", data.renderings],
    ["How did you hear about us?", data.referralSource],
    ["Details", data.details],
  ]
    .filter(([, v]) => v)
    .map(([label, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666"><b>${label}</b></td><td style="padding:4px 0">${v}</td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Innova Design Studio <${RESEND_FROM_EMAIL}>`,
      to: LEAD_NOTIFY_EMAILS,
      reply_to: data.email || undefined,
      subject: `New lead: ${data.name || "Unknown"} (${data.propertyType || "Website form"}${data.projectType ? ` — ${data.projectType}` : ""})`,
      html: `<table>${rows}</table>`,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend API error: ${err}`);
  }
}

async function writeToNotion(data: LeadData) {
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
    console.warn("Notion not configured yet; skipping Notion write:", data);
    return { skipped: true };
  }

  const combinedProjectType = [data.propertyType, data.projectType]
    .filter(Boolean)
    .join(" — ");
  const combinedNote = [
    data.timeline ? `Timeline: ${data.timeline}` : null,
    data.details,
  ]
    .filter(Boolean)
    .join("\n\n");

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        Name: { title: [{ text: { content: data.name || "Unknown" } }] },
        Email: { email: data.email || null },
        Phone: { phone_number: data.phone || null },
        "Project Type": { rich_text: [{ text: { content: combinedProjectType } }] },
        "Location ": { rich_text: [{ text: { content: data.region || "" } }] },
        Note: { rich_text: [{ text: { content: combinedNote } }] },
        "Project Budget": { rich_text: [{ text: { content: data.budget || "" } }] },
        "How did you find us?": {
          rich_text: [{ text: { content: data.referralSource || "" } }],
        },
        "Renders?": {
          multi_select: data.renderings ? [{ name: data.renderings.toUpperCase() }] : [],
        },
        "Lead Source": {
          multi_select: data.referralSource ? [{ name: data.referralSource }] : [{ name: "Website" }],
        },
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Notion API error: ${err}`);
  }
}

async function createCloseLead(data: LeadData) {
  if (!CLOSE_API_KEY) {
    console.warn("Close not configured yet; skipping Close lead creation:", data);
    return { skipped: true };
  }

  const auth = `Basic ${Buffer.from(`${CLOSE_API_KEY}:`).toString("base64")}`;
  const custom: Record<string, string> = {};
  if (data.propertyType) custom[CLOSE_FIELDS.propertyType] = data.propertyType;
  if (data.projectType) custom[CLOSE_FIELDS.projectType] = data.projectType;
  if (data.budget) custom[CLOSE_FIELDS.budget] = data.budget;
  if (data.timeline) custom[CLOSE_FIELDS.timeline] = data.timeline;
  if (data.renderings) custom[CLOSE_FIELDS.renderings] = data.renderings;
  if (data.referralSource) custom[CLOSE_FIELDS.referralSource] = data.referralSource;
  if (data.region) custom[CLOSE_FIELDS.region] = data.region;

  const res = await fetch("https://api.close.com/api/v1/lead/", {
    method: "POST",
    headers: { Authorization: auth, "Content-Type": "application/json" },
    body: JSON.stringify({
      name: data.name || "Unknown",
      status_id: CLOSE_LEAD_STATUS_ID,
      contacts: [
        {
          name: data.name || "Unknown",
          emails: data.email ? [{ email: data.email, type: "office" }] : [],
          phones: data.phone ? [{ phone: data.phone, type: "office" }] : [],
        },
      ],
      custom,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Close API error: ${err}`);
  }

  if (data.details) {
    const lead = await res.json();
    await fetch("https://api.close.com/api/v1/activity/note/", {
      method: "POST",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({ lead_id: lead.id, note: data.details }),
    });
  }
}

export async function POST(request: Request) {
  const data: LeadData = await request.json();

  const [emailResult, notionResult, closeResult] = await Promise.allSettled([
    sendEmail(data),
    writeToNotion(data),
    createCloseLead(data),
  ]);

  if (emailResult.status === "rejected") {
    console.error("Failed to send lead notification email:", emailResult.reason);
  }
  if (notionResult.status === "rejected") {
    console.error("Failed to write lead to Notion:", notionResult.reason);
  }
  if (closeResult.status === "rejected") {
    console.error("Failed to create Close lead:", closeResult.reason);
  }

  // Only hard-fail the submission if email was configured but actually failed —
  // Notion is best-effort for now and shouldn't block a visitor's submission.
  if (emailResult.status === "rejected") {
    return Response.json({ ok: false, error: "Failed to send lead" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

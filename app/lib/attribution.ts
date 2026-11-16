// Where a lead came from (UTM + referrer + page). Stored in a first-party cookie shared by
// innovadesignstudio.ca and calculator.innovadesignstudio.ca, so a visitor who clicks an ad,
// lands on the website, and later uses the calculator is still attributed to that ad.
// These fields go inside the submission's existing `data` JSON. No table changes.
// Keep this file in sync with the copy of this logic inside the calculator's index.html.

import { pageName } from "./analytics";

const COOKIE = "innova_attr";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

type Stored = { s?: string; m?: string; c?: string; g?: string; r?: string };

const clip = (v: string | null | undefined, n = 120) => (v ? v.trim().slice(0, n) : "");

function readCookie(): Stored {
  try {
    const m = document.cookie.match(new RegExp("(?:^|; )" + COOKIE + "=([^;]*)"));
    return m ? (JSON.parse(decodeURIComponent(m[1])) as Stored) : {};
  } catch {
    return {};
  }
}

function writeCookie(v: Stored) {
  const host = window.location.hostname;
  const shared =
    host === "innovadesignstudio.ca" || host.endsWith(".innovadesignstudio.ca")
      ? "; Domain=.innovadesignstudio.ca"
      : "";
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(v))}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure}${shared}`;
}

/** The outside site the visitor came from (never our own pages), without any query string */
function externalReferrer(): string {
  try {
    if (!document.referrer) return "";
    const u = new URL(document.referrer);
    if (u.hostname === window.location.hostname || u.hostname.endsWith("innovadesignstudio.ca")) {
      return "";
    }
    return (u.origin + u.pathname).slice(0, 300);
  } catch {
    return "";
  }
}

/** Campaign info in the current URL, if any. Google Ads auto-tagging (gclid) counts as google / cpc. */
function touchFromUrl(): Stored | null {
  const p = new URLSearchParams(window.location.search);
  const s = clip(p.get("utm_source"));
  const m = clip(p.get("utm_medium"));
  const c = clip(p.get("utm_campaign"));
  const g = clip(p.get("gclid"), 200);
  if (!s && !m && !c && !g) return null;
  return {
    s: s || (g ? "google" : ""),
    m: m || (g ? "cpc" : ""),
    c,
    g,
  };
}

/** Call once when a page loads: remember the latest campaign touch and outside referrer. */
export function captureAttribution(): void {
  try {
    const stored = readCookie();
    const touch = touchFromUrl();
    const ref = externalReferrer();
    if (touch) {
      writeCookie({ ...touch, r: ref || stored.r || "" });
    } else if (!stored.s && !stored.m && !stored.c && !stored.g) {
      writeCookie({ r: ref || stored.r || "" });
    }
  } catch {
    // never break the page
  }
}

/** The fields to add to a submission's `data` at the moment the form is submitted */
export function getAttribution(): Record<string, string> {
  const stored = readCookie();
  const url = touchFromUrl();
  const t = url ?? (stored.s || stored.m || stored.c || stored.g ? stored : null);
  const out: Record<string, string> = {
    utm_source: t?.s || "direct",
    utm_medium: t?.m || "none",
    utm_campaign: t?.c || "none",
    page: pageName(),
    referrer: externalReferrer() || stored.r || "direct",
    submitted_at_page: (window.location.origin + window.location.pathname + window.location.search).slice(0, 500),
  };
  if (t?.g) out.gclid = t.g;
  return out;
}

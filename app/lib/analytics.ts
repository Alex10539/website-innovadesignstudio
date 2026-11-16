// Analytics events. Everything goes through Google Tag Manager's dataLayer: GA4 is configured
// inside GTM (container GTM-P5FMVT69), never directly in code. Events are pushed in gtag format,
// which the container's Google tag forwards to GA4 under the exact event name.
// Do NOT also add matching GA4 event tags in GTM, or each event would be counted twice.
// Never send names, emails, or phone numbers as event parameters.

type Params = Record<string, string | number | undefined>;

type DataLayerWindow = Window & { dataLayer?: unknown[] };

/** "homepage" for "/", otherwise the path ("/contact") */
export function pageName(): string {
  if (typeof window === "undefined") return "";
  const p = window.location.pathname.replace(/\/+$/, "");
  return p === "" ? "homepage" : p;
}

export function track(event: string, params: Params = {}): void {
  if (typeof window === "undefined") return;
  try {
    const w = window as DataLayerWindow;
    w.dataLayer = w.dataLayer || [];
    const clean: Record<string, string | number> = {};
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== "") clean[k] = v;
    }
    // GTM only treats gtag-style commands as such when pushed as an Arguments object.
    (function gtag(..._args: unknown[]) {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    })("event", event, clean);
  } catch {
    // tracking must never break the page
  }
}

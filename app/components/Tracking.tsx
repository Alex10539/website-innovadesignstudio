"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track, pageName } from "../lib/analytics";
import { captureAttribution } from "../lib/attribution";

/**
 * Site-wide tracking, mounted once in the root layout. It sends nothing itself except
 * events pushed to the dataLayer (see lib/analytics.ts):
 *   phone_click    tap on the studio phone number, any page
 *   email_click    tap on the studio email address, any page
 *   knowledge_read a Knowledge article scrolled to 75 percent
 * and it remembers the visitor's campaign (UTM / Google Ads) for form submissions.
 */
export default function Tracking() {
  const pathname = usePathname();

  // Remember where this visitor came from
  useEffect(() => {
    captureAttribution();
  }, []);

  // Phone and email taps
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!el) return;
      const href = (el.getAttribute("href") || "").toLowerCase();
      if (href.startsWith("tel:") && href.replace(/\D/g, "").endsWith("5063004380")) {
        track("phone_click", { page: pageName() });
      } else if (href.startsWith("mailto:") && href.includes("info@innovadesignstudio.ca")) {
        track("email_click", { page: pageName() });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Knowledge articles read to 75 percent (once per article view)
  useEffect(() => {
    const match = pathname.match(/^\/knowledge\/([^/]+)\/?$/);
    if (!match) return;
    const slug = match[1];
    let fired = false;
    const onScroll = () => {
      if (fired || window.scrollY < 50) return;
      const article = document.querySelector("article");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      if ((window.innerHeight - rect.top) / rect.height >= 0.75) {
        fired = true;
        track("knowledge_read", { article_slug: slug });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}

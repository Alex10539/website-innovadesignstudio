import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { articles } from "./lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/custom-homes", priority: 0.9, changeFrequency: "monthly" },
    { path: "/multi-unit", priority: 0.9, changeFrequency: "monthly" },
    { path: "/renovations-additions", priority: 0.9, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
    { path: "/current-builds", priority: 0.7, changeFrequency: "weekly" },
    { path: "/process", priority: 0.7, changeFrequency: "monthly" },
    { path: "/knowledge", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ];

  for (const a of articles) {
    pages.push({ path: `/knowledge/${a.slug}`, priority: 0.6, changeFrequency: "monthly" });
  }

  return pages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}

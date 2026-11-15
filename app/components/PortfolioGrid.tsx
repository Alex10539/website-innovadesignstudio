"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import ProjectTile from "./ProjectTile";
import {
  customHomeProjects,
  multiUnitProjects,
  renovationProjects,
  type ProjectSet,
} from "../lib/portfolio-data";

type Entry = ProjectSet & { type: "Custom Home" | "Multi-Unit" | "Renovation" };

const allProjects: Entry[] = [
  ...customHomeProjects.map((p) => ({ ...p, type: "Custom Home" as const })),
  ...multiUnitProjects.map((p) => ({ ...p, type: "Multi-Unit" as const })),
  ...renovationProjects.map((p) => ({ ...p, type: "Renovation" as const })),
];

// Interleave so the grid doesn't cluster by category
const projects: Entry[] = [];
const buckets = [
  allProjects.filter((p) => p.type === "Custom Home"),
  allProjects.filter((p) => p.type === "Multi-Unit"),
  allProjects.filter((p) => p.type === "Renovation"),
];
while (buckets.some((b) => b.length)) {
  for (const b of buckets) {
    const next = b.shift();
    if (next) projects.push(next);
  }
}

const filters = ["All", "Custom Home", "Multi-Unit", "Renovation"] as const;

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Entry | null>(null);
  const shown =
    activeFilter === "All" ? projects : projects.filter((p) => p.type === activeFilter);

  return (
    <div>
      <div className="mb-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-cream-300 pb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`text-sm font-bold tracking-wide ${
              activeFilter === f ? "text-ink" : "text-ink/35 hover:text-ink/70"
            }`}
          >
            {f}
          </button>
        ))}
        <a
          href="/current-builds"
          className="flex items-center gap-2 text-sm font-bold tracking-wide text-accent hover:opacity-80"
        >
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Currently Building →
        </a>
      </div>
      <div className="columns-1 gap-x-3 sm:columns-2 lg:columns-3">
        {shown.map((p, i) => (
          <div key={p.id} className="mb-3 break-inside-avoid">
            <ProjectTile
              type={p.type}
              image={p.images[0]}
              title={p.title}
              alt={p.alt}
              location={p.location}
              photoCount={p.images.length}
              aspect={i % 3 === 0 ? "3/4" : "4/5"}
              onClick={() => setOpen(p)}
            />
          </div>
        ))}
      </div>
      <Lightbox
        images={open ? open.images : null}
        onClose={() => setOpen(null)}
        label={open?.alt ?? "Project"}
        caption={open?.title}
        meta={open ? [open.type, open.location].filter(Boolean).join(" · ") : undefined}
      />
    </div>
  );
}

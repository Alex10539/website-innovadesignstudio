"use client";

import { useState } from "react";
import ProjectTile from "./ProjectTile";
import Lightbox from "./Lightbox";
import type { ProjectSet } from "../lib/portfolio-data";

export default function ProjectGrid({
  projects,
  type,
  className = "grid gap-3 sm:grid-cols-3",
  aspect = "3/4",
}: {
  projects: ProjectSet[];
  type: string;
  className?: string;
  aspect?: string;
}) {
  const [open, setOpen] = useState<ProjectSet | null>(null);

  return (
    <>
      <div className={className}>
        {projects.map((p) => (
          <ProjectTile
            key={p.id}
            type={type}
            image={p.images[0]}
            title={p.title}
            alt={p.alt}
            location={p.location}
            photoCount={p.images.length}
            aspect={aspect}
            onClick={() => setOpen(p)}
          />
        ))}
      </div>
      <Lightbox
        images={open ? open.images : null}
        onClose={() => setOpen(null)}
        label={open?.alt ?? `${type} project`}
        caption={open?.title}
        meta={open ? [type, open.location].filter(Boolean).join(" · ") : undefined}
      />
    </>
  );
}

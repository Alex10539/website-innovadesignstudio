"use client";

import { useState } from "react";
import ProjectTile from "./ProjectTile";
import Lightbox from "./Lightbox";
import { projectFacts, type ProjectSet } from "../lib/portfolio-data";

export default function ProjectGrid({
  projects,
  type,
  className = "grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3",
  aspect = "4/3",
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
            description={p.description}
            facts={projectFacts(p)}
            alt={p.alt}
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
        description={open?.description}
        meta={open ? [type, projectFacts(open)].filter(Boolean).join(" · ") : undefined}
      />
    </>
  );
}

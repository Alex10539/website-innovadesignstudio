"use client";

import { useState } from "react";
import ProjectTile from "./ProjectTile";
import Lightbox from "./Lightbox";

export type ProjectSet = { id: string; images: string[] };

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
  const [active, setActive] = useState<string[] | null>(null);

  return (
    <>
      <div className={className}>
        {projects.map((p) => (
          <ProjectTile
            key={p.id}
            type={type}
            image={p.images[0]}
            photoCount={p.images.length}
            aspect={aspect}
            onClick={() => setActive(p.images)}
          />
        ))}
      </div>
      <Lightbox images={active} onClose={() => setActive(null)} label={`${type} project`} />
    </>
  );
}

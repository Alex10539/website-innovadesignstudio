"use client";

import { useEffect, useRef, useState } from "react";

export default function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 hover:text-accent"
      >
        {label}
        <span
          className="text-xs transition-transform"
          style={open ? { transform: "rotate(180deg)" } : undefined}
        >
          ▾
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-3 w-44 border border-cream-300 bg-cream-50 py-2 shadow-sm">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-ink hover:bg-cream-100 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

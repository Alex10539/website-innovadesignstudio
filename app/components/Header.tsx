"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NavDropdown from "./NavDropdown";

const directLinks = [
  { label: "Custom Homes", href: "/custom-homes" },
  { label: "Multi-Unit", href: "/multi-unit" },
  { label: "Renovations", href: "/renovations-additions" },
];

const ourWork = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Currently Building", href: "/current-builds" },
];

const resources = [
  { label: "Process", href: "/process" },
  { label: "Knowledge", href: "/knowledge" },
];

const allMobileLinks = [
  ...directLinks,
  ...ourWork,
  ...resources,
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const ctaHref = pathname === "/" ? "#contact-form" : "/contact";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-300/60 bg-cream-50/95 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4 sm:px-10">
        <a href="/" className="font-heading text-lg font-bold text-ink">
          Innova<span className="text-accent">.</span> Design Studio
        </a>

        <nav className="hidden items-center gap-5 text-sm text-ink lg:flex">
          {directLinks.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </a>
          ))}
          <NavDropdown label="Our Work" items={ourWork} />
          <NavDropdown label="Resources" items={resources} />
          <a href="/about" className="hover:text-accent">
            About
          </a>
          <a
            href="tel:5063004380"
            className="flex items-center gap-1.5 text-ink/70 hover:text-ink"
          >
            506-300-4380
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className="hidden rounded-none bg-accent px-5 py-2.5 text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90 sm:inline-block"
          >
            Book a free consult
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className="h-0.5 w-6 bg-ink transition-transform"
              style={menuOpen ? { transform: "translateY(4px) rotate(45deg)" } : undefined}
            />
            <span
              className="h-0.5 w-6 bg-ink transition-opacity"
              style={menuOpen ? { opacity: 0 } : undefined}
            />
            <span
              className="h-0.5 w-6 bg-ink transition-transform"
              style={menuOpen ? { transform: "translateY(-4px) rotate(-45deg)" } : undefined}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-cream-300/60 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm text-ink">
            {allMobileLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:5063004380" className="text-ink/70">
              506-300-4380
            </a>
            <a
              href={ctaHref}
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block w-fit rounded-none bg-accent px-5 py-2.5 text-sm font-bold tracking-wide text-white sm:hidden"
            >
              Book a free consult
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

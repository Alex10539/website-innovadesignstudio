const navItems = [
  { label: "Custom Homes", href: "/custom-homes" },
  { label: "Multi-Unit", href: "/multi-unit" },
  { label: "Renovations", href: "/renovations-additions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Currently Building", href: "/current-builds" },
  { label: "Process", href: "/process" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream-300/60 px-6 py-10">
      <nav className="mb-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-ink/70">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-accent">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex flex-col items-center gap-2 text-center text-xs text-ink/60 sm:flex-row sm:justify-between">
        <span>
          © Innova<span className="text-accent">.</span> Design Studio — Atlantic Canada
        </span>
        <span>info@innovadesignstudio.ca · 506-300-4380</span>
      </div>
    </footer>
  );
}

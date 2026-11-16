const navItems = [
  { label: "Custom Homes", href: "/custom-homes" },
  { label: "Multi-Unit", href: "/multi-unit" },
  { label: "Renovations", href: "/renovations-additions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Currently Building", href: "/current-builds" },
  { label: "Process", href: "/process" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Cost Calculator", href: "https://calculator.innovadesignstudio.ca/" },
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
      <div className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-ink/60">
        <p>
          © Innova<span className="text-accent">.</span> Design Studio — Custom home,
          multi-unit, and renovation design in Moncton, Dieppe, Riverview, Shediac, Saint John,
          and Fredericton, across New Brunswick and Atlantic Canada.
        </p>
        <p className="mt-2">
          <a href="tel:5063004380" className="hover:text-accent">
            506-300-4380
          </a>{" "}
          ·{" "}
          <a href="mailto:info@innovadesignstudio.ca" className="hover:text-accent">
            info@innovadesignstudio.ca
          </a>{" "}
          ·{" "}
          <a href="/contact" className="font-bold hover:text-accent">
            Book a free consult — no obligation.
          </a>
        </p>
      </div>
    </footer>
  );
}

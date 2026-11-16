/** Turns [label](url) in plain text into links. Used by articles and FAQs. */
export function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    return (
      <a
        key={i}
        href={m[2]}
        className="font-bold text-accent underline underline-offset-2 hover:opacity-80"
      >
        {m[1]}
      </a>
    );
  });
}

/** Same text with the link markup removed (for structured data) */
export function stripLinks(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

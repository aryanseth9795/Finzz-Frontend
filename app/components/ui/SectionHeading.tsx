export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "text-center" : undefined}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.12em] ${
          dark ? "text-mint" : "text-brand-from"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-3 max-w-xl text-base leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-slate-400" : "text-muted"}`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

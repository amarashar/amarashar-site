const areas = [
  "Trust & Safety",
  "Responsible AI",
  "Algorithmic Accountability",
  "AI Governance & Policy",
  "Online Harms & Hate Speech",
  "Information Quality",
  "Digital Inclusion",
  "Technology Ethics",
];

const FocusAreas = () => {
  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-8 max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Research & Focus Areas
        </h2>
        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <span
              key={area}
              className="px-3 py-1.5 text-sm rounded-full border border-border bg-card text-foreground"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;

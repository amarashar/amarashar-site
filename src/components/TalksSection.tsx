const talks = [
  {
    title: "Intersections Between Trust, Safety, and Responsible AI",
    event: "Trust & Safety Research Conference",
    year: "2024",
  },
  {
    title: "Algorithmic Impact Assessments at Scale",
    event: "Stanford Internet Observatory Seminar",
    year: "2023",
  },
  {
    title: "Building Organizational Capabilities for Responsible AI",
    event: "ACM Conference on Fairness, Accountability, and Transparency",
    year: "2023",
  },
  {
    title: "Lessons from Algorithmic Auditing in Practice",
    event: "Trust & Safety Professionals Association Annual Conference",
    year: "2022",
  },
  {
    title: "Global Inclusion and the Future of AI Governance",
    event: "World Economic Forum, Davos",
    year: "2018",
  },
  {
    title: "Harmful Speech Online: Frameworks and Responses",
    event: "Berkman Klein Center Luncheon Series",
    year: "2017",
  },
];

const TalksSection = () => {
  return (
    <section id="talks" className="py-20">
      <div className="container mx-auto px-8 max-w-3xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Selected Talks & Panels</h2>
        <ol className="space-y-4 list-none">
          {talks.map((talk, i) => (
            <li key={i} className="border-b border-border pb-4 last:border-0">
              <p className="font-serif font-bold leading-snug">{talk.title}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {talk.event}, {talk.year}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default TalksSection;

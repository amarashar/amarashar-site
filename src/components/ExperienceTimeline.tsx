const experiences = [
  {
    role: "Head of Product Trust Insights",
    org: "Spotify",
    period: "2023 – Present",
    description:
      "Leading a multidisciplinary team of data scientists and policy advisors delivering research-driven insights on safety, algorithmic responsibility, and trust in AI products.",
  },
  {
    role: "Head of Algorithmic Policy",
    org: "Spotify",
    period: "2021 – 2023",
    description:
      "Shaped company-wide algorithmic responsibility strategy, led policy development for AI/ML systems, and built frameworks for algorithmic impact assessments at scale.",
  },
  {
    role: "Senior Research Lead, Algorithmic Responsibility",
    org: "Spotify",
    period: "2019 – 2021",
    description:
      "Established foundational research programs on algorithmic auditing, regulatory compliance, and model governance tooling.",
  },
  {
    role: "Assistant Director of Research & Affiliate",
    org: "Berkman Klein Center for Internet & Society, Harvard University",
    period: "2013 – 2019",
    description:
      "Managed research initiatives on the ethics and governance of AI, online harmful speech, and digital inclusion. Led the Ethics and Governance of AI Initiative with the MIT Media Lab.",
  },
  {
    role: "Advisor",
    org: "Trust & Safety Foundation",
    period: "2022 – Present",
    description:
      "Advising on strategic priorities for the global Trust & Safety community.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-8 max-w-3xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l-2 border-primary/30">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary" />
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <h3 className="font-serif font-bold mt-1">{exp.role}</h3>
              <p className="text-sm text-primary">{exp.org}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

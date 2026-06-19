const publications = [
  {
    title: "Algorithmic Impact Assessments at Scale: Practitioners' Challenges and Need",
    year: "2024",
    venue: "Stanford Journal of Online Trust & Safety",
    url: "https://www.tsjournal.org/index.php/jots/article/view/206",
  },
  {
    title: "Building Human Values into Recommender Systems: An Interdisciplinary Synthesis",
    year: "2024",
    venue: "ACM Transactions on Recommender Systems",
    url: "https://dl.acm.org/doi/10.1145/3632297",
  },
  {
    title: "Intersections Between Trust, Safety, and Responsible AI",
    year: "2025",
    venue: "Past, Present, Future of Trust & Safety Edited Volume (Forthcoming)",
  },
  {
    title: "Lessons Learned from Algorithmic Impact Assessments in Practice",
    year: "2022",
    venue: "Spotify R&D Engineering Blog",
    url: "https://engineering.atspotify.com/2022/09/lessons-learned-from-algorithmic-impact-assessments-in-practice",
  },
  {
    title: "Global Perspectives and Local Realities: The Network of Centers' Essay Series",
    year: "2020",
    venue: "Global Network of Internet & Society Centers Publication Series",
    note: "Editor and Author",
    url: "https://medium.com/the-network-of-centers-collection/connecting-the-dots-themes-and-emerging-issues-across-the-nocs-global-views-of-covid-19-essay-e56190c5c36a",
  },
  {
    title: "Framework For the Ethical Use of Advanced Data Science Methods in the Humanitarian Sector",
    year: "2020",
    venue: "Humanitarian Data Science & Ethics Group",
    url: "https://cyber.harvard.edu/story/2020-05/framework-ethical-use-advanced-data-science-methods-humanitarian-sector",
  },
  {
    title: "Why Inclusion Matters for the Future of Artificial Intelligence",
    year: "2018",
    venue: "Berkman Klein Center Medium Publication Series",
    url: "https://cyber.harvard.edu/story/2018-02/why-inclusion-matters-future-artificial-intelligence",
  },
  {
    title: "Global Governance and Inclusion: Reframing the Debate Around AI",
    year: "2018",
    venue: "Berkman Klein Center Medium Publication Series",
    url: "https://cyber.harvard.edu/story/2018-07/global-governance-and-inclusion",
  },
  {
    title: "Module on Setting the Stage for AI Governance: Interfaces, Infrastructures, and Institutions",
    year: "2018",
    venue: "ITU AI for Development Series",
    url: "https://www.itu.int/en/ITU-D/Conferences/GSR/Documents/GSR2018/documents/AISeries_GovernanceModule_GSR18.pdf",
  },
  {
    title: "Artificial Intelligence and Human Development: Toward a Research Agenda",
    year: "2018",
    venue: "IDRC Digital Library",
    note: "Contributor/Advisor",
    url: "https://idl-bnc-idrc.dspacedirect.org/items/6ba8a490-db87-4992-8813-9bea0c7e8e28",
  },
  {
    title: "Perspectives on Harmful Speech Online",
    year: "2017",
    venue: "Berkman Klein Center for Internet & Society Research Publication",
    url: "https://cyber.harvard.edu/publications/2017/08/harmfulspeech",
  },
  {
    title: "Understanding Harmful Speech Online",
    year: "2016",
    venue: "Berkman Klein Center for Internet & Society Research Publication",
    url: "https://cyber.harvard.edu/publications/2016/UnderstandingHarmfulSpeech",
  },
  {
    title: "Networked Policy Making Avenues: Assessing the Role of Academics in Digital Policy",
    year: "2016",
    venue: "Networked Policy Series, Berkman Klein Center Research Publication",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2842796",
  },
];

const projects = [
  { name: "Ethics and Governance of AI Initiative", partner: "the MIT Media Lab", url: "https://knightfoundation.org/reports/evaluation-of-the-ethics-and-governance-of-artificial-intelligence-initiative/" },
  { name: "Harmful Speech Online Project", partner: "the Dangerous Speech Project", url: "https://cyber.harvard.edu/research/harmfulspeech" },
  { name: "Improving Information for Decision-makers", partner: "the World Economic Forum", url: "https://cyber.harvard.edu/node/99136" },
  { name: "Truthiness in Digital Media", partner: "the Ford Foundation", url: "https://fudcon.net/" },
  { name: "Exploring the Role of Algorithms in Online Harmful Speech", partner: "the Shorenstein Center & Institute for Strategic Dialogue", url: "https://shorensteincenter.org/exploring-role-algorithms-online-harmful-speech/" },
  { name: "Digitally Connected", partner: "UNICEF", url: "https://cyber.harvard.edu/events/digitally-connected-harvard" },
  { name: "Global Network of Internet & Society Centers", url: "https://networkofcenters.net/" },
  { name: "Digital Finance Initiative", url: "https://cyber.harvard.edu/research/digital_currency" },
  { name: "Media Cloud", url: "https://www.mediacloud.org/" },
  { name: "Rethink Music", url: "https://cyber.harvard.edu/research/rethink_music" },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-8 max-w-3xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Publications & Projects</h2>
        <p className="text-muted-foreground mb-10 text-sm">
          Including primary authorship, co-authorship, collaborations, editing, and significant contributions.
        </p>

        <h3 className="text-lg font-bold mb-6 font-serif text-primary/80">Publications</h3>
        <ol className="space-y-5 list-none">
          {publications.map((pub, i) => (
            <li key={i} className="border-b border-border pb-5 last:border-0">
              <p className="font-serif font-bold leading-snug">
                {pub.url ? (
                  <a href={pub.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {pub.year}. {pub.venue}.{pub.note ? ` (${pub.note})` : ""}
              </p>
            </li>
          ))}
        </ol>

        <h3 className="text-lg font-bold mt-14 mb-6 font-serif text-primary/80">Selected Projects</h3>
        <ul className="space-y-3">
          {projects.map((proj, i) => (
            <li key={i} className="text-muted-foreground">
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {proj.name}
              </a>
              {proj.partner && <span className="text-sm"> — with {proj.partner}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PublicationsSection;

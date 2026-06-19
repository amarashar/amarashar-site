const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-8 max-w-3xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Biography</h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Amar Ashar is a recognized leader in Trust & Safety, Responsible AI, and technology governance with over a decade of experience bridging research and practice across industry and academia. He currently heads the Product Trust Insights team at{" "}
            <a href="https://research.atspotify.com/algorithmic-responsibility" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Spotify</a>,
            overseeing a multidisciplinary group of data scientists and policy advisors who have delivered algorithmic impact assessments across dozens of product surfaces and shaped company-wide responsible AI policy.
          </p>
          <p>
            At Spotify, Amar has built and scaled one of the industry's first dedicated algorithmic responsibility functions, developing frameworks for{" "}
            <a href="https://engineering.atspotify.com/2022/09/lessons-learned-from-algorithmic-impact-assessments-in-practice" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">algorithmic impact assessment</a>{" "}
            that have been cited in peer-reviewed research and adopted as reference models by other organizations. His work spans regulatory compliance (EU AI Act, DSA), model governance tooling, and cross-functional policy development.
          </p>
          <p>
            As an assistant director of research and affiliate at the{" "}
            <a href="https://cyber.harvard.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Berkman Klein Center for Internet & Society at Harvard</a>,
            he co-led the{" "}
            <a href="https://cyber.harvard.edu/topics/ethics-and-governance-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ethics and Governance of AI Initiative</a>{" "}
            — a $27M joint program with the MIT Media Lab — and managed a portfolio of research projects spanning online harms, digital inclusion, and networked policymaking. His collaborations have engaged the World Economic Forum, Mozilla Foundation, UNICEF, and leading institutions worldwide.
          </p>
          <p>
            He serves as an advisor to the{" "}
            <a href="https://www.trustandsafetyfoundation.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Trust & Safety Foundation</a>,
            is an active member of the{" "}
            <a href="https://www.tspa.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Trust & Safety Professionals Association</a> and the{" "}
            <a href="https://integrityinstitute.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Integrity Institute</a>,
            and contributes to the{" "}
            <a href="https://cyber.fsi.stanford.edu/news/stanford-internet-observatory-launches-trust-and-safety-teaching-consortium" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stanford Trust & Safety Teaching Consortium</a>.
          </p>
          <p>
            Amar previously held fellowships and appointments at the Institute for Technology & Society, the Software Freedom Law Center, and Harvard University. He studied at Boston College and Harvard University.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

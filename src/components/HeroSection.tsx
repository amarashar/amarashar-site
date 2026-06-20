import amarImage from "../assets/amar.jpg";
const HeroSection = () => {
  return (
    <section id="home" className="pt-16 pb-20">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-start gap-3">
        <div className="lg:w-auto pr-0">
          <div className="rounded-xl overflow-hidden shadow-md max-w-[250px]">
            <img
            src={amarImage}
              alt="Amar Ashar"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="lg:w-2/3 pl-0">
          <h1 className="text-3xl lg:text-4xl font-bold leading-snug mb-6">
            Amar Ashar
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I currently lead the Product Trust Insights team at{" "}
            <a href="https://research.atspotify.com/algorithmic-responsibility" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Spotify</a>, 
            where I oversee a multidisciplinary group of data scientists and policy advisors working on AI safety, algorithmic responsibility, and trust in agentic features.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I previously led a portfolio of AI research projects at the{" "}
            <a href="https://cyber.harvard.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Berkman Klein Center for Internet & Society</a> at Harvard University.
          </p>
          <p className="text-muted-foreground text-sm mt-6">
            <a href="#about" className="text-primary hover:underline">Full bio</a>{" · "}
            <a href="#publications" className="text-primary hover:underline">Publications</a>{" · "}
            <a href="#contact" className="text-primary hover:underline">Contact</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

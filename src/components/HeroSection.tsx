const HeroSection = () => {
  return (
    <section id="home" className="pt-16 pb-20">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-1/3">
          <div className="rounded-xl overflow-hidden shadow-md max-w-xs">
            <img
              src="https://lh3.googleusercontent.com/sitesv/AA5AbUCHjsuBhzFS9j73uQmbcEGbo9vTjm1oen9Td82BGBsfK380CE5y4K-hBOZkRCCELWpPrre0YXTHs7sK0dzxL0NGwN4qoAKZ9cYL9qWSsqdo1IP8Oz_08FoYmT1-sKn9kXjRc9ePPOzTwpcKRSWL1uFerP17cx6pMLs9tNP4Xhk9PG2t9ZTAPUP4VmkCk8_WsA5nObsyt49XZM8RKfmjJZuSIiNM0NvOZj43ZNQ=w800"
              alt="Amar Ashar"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="lg:w-2/3">
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

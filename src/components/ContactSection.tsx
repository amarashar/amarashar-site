const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-8 max-w-3xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Contact</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          For inquiries related to research collaboration, speaking engagements, or advisory work, please reach out by email or connect on LinkedIn.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:amar@amarashar.com"
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/amarashar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-md border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://bsky.app/profile/amarashar.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-md border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            Bluesky
          </a>
          <a
            href="https://scholar.google.com/citations?user=amarashar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-md border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            Google Scholar
          </a>
          <a
            href="https://orcid.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-md border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            ORCID
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

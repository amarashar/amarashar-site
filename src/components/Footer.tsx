const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-8 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Amar Ashar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

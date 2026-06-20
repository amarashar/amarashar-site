const Header = () => {
  return (
    <header className="py-6 border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="text-xl font-bold font-serif"> </div>
        <nav className="hidden md:flex space-x-6 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-primary transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
          
          <a href="#publications" className="hover:text-primary transition-colors duration-300">Publications</a>
          
          <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

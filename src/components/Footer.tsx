const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="chip-glow"></div>
            <span className="font-mono font-semibold">Carter Mauer</span>
          </div>
          
          <div className="text-muted-foreground text-sm text-center">
            © {currentYear} Carter Mauer. Built with security in mind.
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="mono">CS @ LSU</span>
            <span>•</span>
            <span className="mono">Cybersecurity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
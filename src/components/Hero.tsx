import cyberHeroBg from '@/assets/cyber-hero-bg.jpg';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-20 pb-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center min-h-[80vh]">
          {/* Main Hero Content */}
          <div className="panel-cyber p-8 lg:p-12 relative overflow-hidden animate-fade-in">
            {/* Circuit Corner Decoration */}
            <svg 
              className="absolute top-0 right-0 w-48 h-32 opacity-30 pointer-events-none" 
              viewBox="0 0 200 150"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="circuit-gradient" x1="0" x2="1">
                  <stop offset="0" stopColor="hsl(var(--cyber-accent))" stopOpacity="0.55"/>
                  <stop offset="1" stopColor="hsl(var(--cyber-secondary))" stopOpacity="0.55"/>
                </linearGradient>
              </defs>
              <path 
                d="M10 10 h180 v80 h-80 v40 h-100z" 
                fill="none" 
                stroke="url(#circuit-gradient)" 
                strokeWidth="1" 
                opacity="0.7"
              />
              <circle cx="20" cy="20" r="2" fill="hsl(var(--cyber-accent))"/>
              <circle cx="190" cy="90" r="2" fill="hsl(var(--cyber-secondary))"/>
            </svg>

            <div className="relative z-10">
              <h1 className="font-mono text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="opacity-70">Hi, I'm</span>{' '}
                <span className="text-cyber-accent">Carter</span>
                <br />
                <span className="text-2xl lg:text-3xl">CS @ LSU • Cybersecurity</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                I design and build practical tools with a security lens. My interests include reverse engineering, 
                defensive tooling, network operations, and penetration testing. I like minimal UIs, clear docs, 
                and shipping small wins daily.
              </p>

              <div className="flex flex-wrap gap-4 mb-8 font-mono text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  📍 Baton Rouge, LA
                </span>
                <span className="flex items-center gap-2">
                  🔐 CS • Cybersecurity
                </span>
                <span className="flex items-center gap-2">
                  💼 Open to roles: SOC, Sec Eng, SWE
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="btn-cyber"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="btn-cyber-secondary"
                >
                  Work History
                </button>
              </div>
            </div>
          </div>

          {/* Social Links Panel */}
          <div className="panel-cyber p-6 lg:p-8 animate-fade-in delay-150">
            <div className="text-cyber mb-6">Find me</div>
            
            <div id="contact" className="space-y-3">
              <a 
                href="https://github.com/cmauer2" 
                target="_blank" 
                rel="noreferrer noopener"
                className="flex items-center gap-4 p-4 rounded-xl bg-panel border border-border/20 hover:border-cyber-accent/40 hover:bg-cyber-accent/5 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-cyber-accent group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/carter-mauer-5b653a22b/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="flex items-center gap-4 p-4 rounded-xl bg-panel border border-border/20 hover:border-cyber-secondary/40 hover:bg-cyber-secondary/5 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-cyber-secondary group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a 
                href="mailto:carterrmauer@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-panel border border-border/20 hover:border-cyber-accent/40 hover:bg-cyber-accent/5 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-cyber-accent group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>

              <a 
                href="/Carter_Mauer_Resume.pdf" 
                target="_blank" 
                rel="noopener"
                className="flex items-center gap-4 p-4 rounded-xl bg-panel border border-border/20 hover:border-cyber-secondary/40 hover:bg-cyber-secondary/5 transition-all duration-300 group"
              >
                <FileText className="w-5 h-5 text-cyber-secondary group-hover:scale-110 transition-transform" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${cyberHeroBg})` }}
      />
    </section>
  );
};

export default Hero;
const About = () => {
  const stats = [
    { label: "Focus", value: "App Sec • RE • SOC" },
    { label: "Languages", value: "Python • SQL • C" },
    { label: "Stack", value: "FastAPI • MySQL • PyTorch" },
    { label: "Tools", value: "Git • Docker • Ghidra" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 animate-fade-in">
          <div className="text-cyber mb-4">About</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-[0.7fr_1fr] gap-8 items-start">
          {/* About Content */}
          <div className="panel-cyber p-8 animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              I'm a senior CS major at LSU, concentrating in cybersecurity. I like building minimal tools that solve real 
              problems—passwords, cybersecurity—and I care about efficiency, a structured team, and educating others.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When not coding: school, gym, self-teaching, and enjoying life.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in delay-200">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="panel-cyber p-6 text-center hover:border-cyber-accent/40 transition-all duration-300"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="text-cyber text-xs mb-2 font-mono">
                  {stat.label}
                </div>
                <div className="font-mono font-semibold text-lg">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="panel-cyber p-6 text-center group hover:border-cyber-accent/40 transition-all duration-300 animate-fade-in delay-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-cyber-accent/20 flex items-center justify-center group-hover:bg-cyber-accent/30 transition-colors">
              <svg className="w-6 h-6 text-cyber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Security Focus</h3>
            <p className="text-sm text-muted-foreground">Defensive security, SOC operations, and incident response</p>
          </div>

          <div className="panel-cyber p-6 text-center group hover:border-cyber-secondary/40 transition-all duration-300 animate-fade-in delay-400">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-cyber-secondary/20 flex items-center justify-center group-hover:bg-cyber-secondary/30 transition-colors">
              <svg className="w-6 h-6 text-cyber-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Development</h3>
            <p className="text-sm text-muted-foreground">Full-stack development with security-first mindset</p>
          </div>

          <div className="panel-cyber p-6 text-center group hover:border-cyber-accent/40 transition-all duration-300 animate-fade-in delay-500">
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-cyber-accent/20 flex items-center justify-center group-hover:bg-cyber-accent/30 transition-colors">
              <svg className="w-6 h-6 text-cyber-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-muted-foreground">Building tools that solve real cybersecurity challenges</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
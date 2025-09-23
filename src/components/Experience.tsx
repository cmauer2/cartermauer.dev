const Experience = () => {
  const experiences = [
    {
      title: "ITS Service Desk / SOC",
      company: "Louisiana State University",
      period: "Aug 2025 – Present",
      description: "Resolved desktop issues, triaged tickets, and contributed small defensive scripts for common incidents."
    },
    {
      title: "Cook",
      company: "Reginelli's",
      period: "2022-2025",
      description: "Trained and guided new staff on recipes, safety, and efficiency, acting as a trusted shift lead while maintaining high productivity."
    },
    {
      title: "Personal Projects & Open Source",
      company: "Independent",
      period: "Ongoing",
      description: "Daily commits across Python, JS, C, ASM, and main project; emphasis on efficiency, readable READMEs, and small secure defaults."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-panel/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 animate-fade-in">
          <div className="text-cyber mb-4">Work</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Building experience in cybersecurity, software development, and team leadership.
          </p>
        </div>

        <div className="timeline-cyber animate-fade-in">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="timeline-item"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="panel-cyber p-6 ml-4">
                <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                <h5 className="text-cyber-secondary font-medium mb-2">{exp.company}</h5>
                <time className="mono text-sm text-muted-foreground mb-4 block">
                  {exp.period}
                </time>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
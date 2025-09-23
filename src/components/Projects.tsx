import { ExternalLink, Github } from 'lucide-react';
import projectFilesystem from '@/assets/project-filesystem.jpg';
import projectHorrorGame from '@/assets/project-horror-game.jpg';
import projectSecureFiles from '@/assets/project-secure-files.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Simple File System",
      description: "Simple block-based, inode-style filesystem written in C for my Operating Systems course.",
      image: projectFilesystem,
      tags: ["C", "Low-level", "Memory"],
      github: "https://github.com/cmauer2/Simple-File-System-C",
      demo: "#"
    },
    {
      title: "Withdrawal",
      description: "First-person UE horror game where players are trapped in a looping, ever-changing room.",
      image: projectHorrorGame,
      tags: ["C++", "GitHub", "Unreal Engine"],
      github: "https://github.com/cmauer2/Withdrawal",
      demo: "#"
    },
    {
      title: "Secure File Management System",
      description: "Secure client-server file management system that allows users to upload, download, and delete files on a server.",
      image: projectSecureFiles,
      tags: ["Node.js", "CSS", "TypeScript"],
      github: "https://github.com/cmauer2/Secure-File-Management-System",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 animate-fade-in">
          <div className="text-cyber mb-4">Builds</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of cybersecurity tools, games, and systems I've built to solve real problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="card-cyber overflow-hidden group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-cyber-accent/10 to-cyber-secondary/10 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} interface`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold group-hover:text-cyber-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-cyber">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber flex items-center gap-2 flex-1 justify-center"
                  >
                    <Github className="w-4 h-4" />
                    Repo
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber-secondary flex items-center gap-2 flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
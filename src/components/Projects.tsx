import { Card } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Ticket Booking System",
      description: "A responsive ticket booking layout built with React, featuring modern UI components and smooth user interactions.",
      tech: ["React", "CSS", "JavaScript"],
      gradient: "from-primary to-primary-glow",
      delay: "0s"
    },
    {
      title: "Free WordPress Website",
      description: "A complete website solution built using WordPress with custom themes and optimized performance.",
      tech: ["WordPress", "PHP", "CSS"],
      gradient: "from-secondary to-secondary-glow",
      delay: "0.2s"
    },
    {
      title: "Cloth Store E-commerce",
      description: "A full-featured e-commerce website for clothing retail with product management and shopping cart functionality.",
      tech: ["WordPress", "WooCommerce", "PHP"],
      gradient: "from-accent to-primary",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-primary rounded-full opacity-10 animate-float blur-3xl" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in web development
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group p-6 bg-surface-light border-border hover:shadow-intense transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slideUp"
                style={{ animationDelay: project.delay }}
              >
                {/* Project header */}
                <div className="relative mb-6">
                  <div className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl opacity-80 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 animate-glow`}></div>
                  </div>
                </div>

                {/* Project content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-surface-lighter border border-border rounded-md text-xs font-medium text-text-muted group-hover:text-text-secondary transition-colors duration-300"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 text-sm font-semibold"
                    >
                      View Project
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm"
                    >
                      Code
                    </Button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-text-secondary mb-6">
              Want to see more of my work or collaborate on a project?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold transform hover:scale-105"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { Card } from './ui/card';

const About = () => {
  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-glow rounded-full blur-2xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Profile info */}
            <div className="space-y-6 animate-slideInLeft">
              <Card className="p-8 bg-surface-light border-border hover:shadow-card transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-text-primary">Hello, I'm Aayush! 👋</h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  I'm a passionate web developer and aspiring AI/ML engineer currently studying at 
                  <span className="text-primary font-semibold"> UIET Kanpur</span>. 
                  I love creating digital solutions that make a difference and constantly learning new technologies.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  My journey in tech is driven by curiosity and the desire to build meaningful applications 
                  that solve real-world problems. I believe in the philosophy of 
                  <span className="text-accent font-mono"> "code, build, repeat"</span> - 
                  constantly iterating and improving.
                </p>
              </Card>

              {/* Contact info cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-surface-light border-border hover:shadow-card transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">📧</span>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Email</p>
                      <p className="text-primary text-sm font-mono">aayushdwivedi170@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-surface-light border-border hover:shadow-card transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">📱</span>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Phone</p>
                      <p className="text-secondary text-sm font-mono">+91 8467065382</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right side - Skills */}
            <div className="animate-slideInRight">
              <Card className="p-8 bg-surface-light border-border hover:shadow-card transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-text-primary">
                  My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
                </h3>
                
                <div className="space-y-6">
                  {/* Frontend Skills */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Frontend Development</h4>
                    <div className="flex flex-wrap gap-3">
                      {['HTML', 'CSS', 'JavaScript', 'React'].map((skill, index) => (
                        <span 
                          key={skill}
                          className="px-4 py-2 bg-gradient-glow border border-primary/20 rounded-lg text-sm font-medium text-text-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-secondary">Backend Development</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Python', 'Django'].map((skill, index) => (
                        <span 
                          key={skill}
                          className="px-4 py-2 bg-gradient-glow border border-secondary/20 rounded-lg text-sm font-medium text-text-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                          style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learning */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-accent">Currently Learning</h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gradient-glow border border-accent/20 rounded-lg text-sm font-medium text-text-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-glow">
                        AI/ML Engineering
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
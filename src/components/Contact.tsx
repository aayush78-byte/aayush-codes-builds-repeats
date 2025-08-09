import { Card } from './ui/card';
import { Button } from './ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "aayushdwivedi170@gmail.com",
      href: "mailto:aayushdwivedi170@gmail.com",
      color: "primary"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 8467065382",
      href: "tel:+918467065382",
      color: "secondary"
    },
    {
      icon: "🎓",
      title: "College",
      value: "UIET Kanpur",
      href: "#",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-glow rounded-full blur-2xl opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and make something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="p-6 bg-surface-light border-border hover:shadow-card transition-all duration-300 transform hover:scale-105 animate-slideUp group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => method.href !== "#" && window.open(method.href, '_blank')}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-2xl group-hover:scale-110 transition-transform duration-300 animate-glow">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{method.title}</h3>
                    <p className={`text-sm font-mono text-${method.color} group-hover:text-text-primary transition-colors duration-300`}>
                      {method.value}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Main contact card */}
          <Card className="p-8 md:p-12 bg-surface-light border-border hover:shadow-intense transition-all duration-300 text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-3xl animate-float">
                💼
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary">
                Ready to start a project?
              </h3>
              
              <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
                I'm always excited to work on new challenges and collaborate with fellow developers and designers. 
                Whether you have a project in mind or just want to chat about technology, feel free to reach out!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold transform hover:scale-105"
                  onClick={() => window.open('mailto:aayushdwivedi170@gmail.com', '_blank')}
                >
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold transform hover:scale-105"
                  onClick={() => window.open('tel:+918467065382', '_blank')}
                >
                  Call Now
                </Button>
              </div>
            </div>
          </Card>

          {/* Footer note */}
          <div className="text-center mt-12">
            <p className="text-text-muted text-sm">
              <span className="font-mono text-accent">&lt;</span>
              Made with ❤️ by Aayush Dwivedi
              <span className="font-mono text-accent"> /&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
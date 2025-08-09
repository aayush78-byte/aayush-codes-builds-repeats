import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-surface/80"></div>

      {/* Background 3D elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-primary rounded-full opacity-15 animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-accent opacity-30 rounded-lg animate-rotate3d blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Main heading with 3D effect */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-text-primary relative">
            <span className="inline-block transform hover:scale-110 transition-all duration-500 hover:text-primary animate-fade-in">
              Aayush
            </span>
            <br />
            <span className="inline-block transform hover:scale-110 transition-all duration-500 bg-gradient-primary bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Dwivedi
            </span>
          </h1>

          {/* Tagline with typewriter effect */}
          <div className="text-xl md:text-2xl font-mono text-accent mb-8 h-8 flex items-center justify-center">
            <span className="border-r-2 border-accent animate-pulse pr-2">
              &lt; code, build, repeat /&gt;
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Web Developer & Aspiring AI/ML Engineer crafting digital experiences 
            with passion and precision
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-secondary rounded-full animate-float opacity-60" style={{ animationDelay: '3s' }}></div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center hover:border-primary transition-colors duration-300">
            <div className="w-1 h-3 bg-text-muted rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
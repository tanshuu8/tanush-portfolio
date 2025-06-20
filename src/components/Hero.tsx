
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = [
    'Computer Science Student',
    'Startup Hustler',
    'AI-Powered Product Builder',
    'Freelance Designer'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= currentRole.length) {
        setDisplayText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const handleResumeDownload = () => {
    // Create a placeholder PDF download
    const link = document.createElement('a');
    link.href = '/placeholder-resume.pdf';
    link.download = 'Tanush_Chandhra_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-20 h-20 bg-spring-green/20 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-peach-blush/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-vibrant-red/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-outfit font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Tanush</span> 👋
            </h1>

            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
              A{' '}
              <span className="text-vibrant-red font-semibold min-w-fit">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about building innovative digital products, exploring AI technologies, 
              and creating meaningful solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleResumeDownload}
                className="bg-vibrant-red hover:bg-vibrant-red/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                📄 View Resume
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-spring-green text-spring-green hover:bg-spring-green hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                📞 Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

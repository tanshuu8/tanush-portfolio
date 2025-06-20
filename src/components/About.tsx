
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-outfit font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Computer Science student at KITS Warangal with a deep 
                fascination for startups, AI, and building digital products that solve 
                real-world problems.
              </p>
              <p>
                My journey combines technical expertise with creative design thinking. 
                I've freelanced as a designer, worked on innovative projects using AI tools, 
                and I'm always exploring the intersection of technology and business.
              </p>
              <p>
                Whether it's developing no-code solutions, creating responsive web applications, 
                or building brand identities, I bring a startup mindset to everything I do - 
                focusing on efficiency, innovation, and user-centric design.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-spring-green to-peach-blush rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-vibrant-red rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg animate-float">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


const Certifications = () => {
  const certifications = [
    {
      title: "Digital Marketing",
      issuer: "IIM Mumbai",
      icon: "📊",
      color: "from-spring-green to-peach-blush"
    },
    {
      title: "Spelling Bee",
      issuer: "B1 Spoken English",
      icon: "🏆",
      color: "from-peach-blush to-vibrant-red"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-outfit font-bold text-center mb-12 gradient-text">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group perspective-1000 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative w-full h-48 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                {/* Front Face */}
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${cert.color} rounded-2xl shadow-lg flex flex-col items-center justify-center text-white backface-hidden`}>
                  <div className="text-6xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-outfit font-bold text-center">
                    {cert.title}
                  </h3>
                </div>
                
                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full bg-card rounded-2xl shadow-lg flex flex-col items-center justify-center transform rotate-y-180 backface-hidden border border-border">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-lg font-outfit font-bold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-center px-4">
                    Issued by <span className="font-semibold">{cert.issuer}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

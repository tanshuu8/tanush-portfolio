
const Education = () => {
  const educationData = [
    {
      degree: "B.Tech (CSE)",
      institute: "KITS Warangal",
      year: "2023–2027",
      result: "CGPA: 7.0",
      percentage: 70,
      color: "from-spring-green to-peach-blush"
    },
    {
      degree: "Intermediate",
      institute: "Acumen Junior College",
      year: "2021–2023",
      result: "93.6%",
      percentage: 93.6,
      color: "from-peach-blush to-vibrant-red"
    },
    {
      degree: "SSC",
      institute: "Matrix High School",
      year: "2020–2021",
      result: "100%",
      percentage: 100,
      color: "from-vibrant-red to-spring-green"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-outfit font-bold text-center mb-12 gradient-text">
          Education
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-outfit font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground font-medium">{edu.institute}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Performance</span>
                  <span className="text-lg font-bold text-foreground">{edu.result}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${edu.color} transition-all duration-1000`}
                    style={{ width: `${edu.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

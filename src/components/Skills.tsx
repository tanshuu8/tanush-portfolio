
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: "⚡" },
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "PHP", icon: "🐘" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "SQL", icon: "🗄️" },
        { name: "AI Tools", icon: "🤖" },
        { name: "VS Code", icon: "💻" },
        { name: "Git", icon: "📝" },
        { name: "Postman", icon: "📮" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Logical Thinking", icon: "🧠" },
        { name: "Branding", icon: "🎯" },
        { name: "Teamwork", icon: "🤝" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-outfit font-bold text-center mb-12 gradient-text">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-outfit font-bold mb-6 text-center text-foreground">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group flex items-center p-3 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-spring-green/10 border border-border cursor-pointer"
                  >
                    <span className="text-2xl mr-3 group-hover:animate-bounce">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-foreground group-hover:text-vibrant-red transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence Award",
      description: "Recognized for outstanding academic performance",
      icon: "🏅",
      color: "text-yellow-500"
    },
    {
      title: "Club Secretary",
      description: "Incubation & Business Club - Leadership Role",
      icon: "💼",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-outfit font-bold text-center mb-12 gradient-text">
          Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-border group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`text-5xl ${achievement.color} group-hover:animate-bounce`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-outfit font-bold text-foreground mb-2 group-hover:text-vibrant-red transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
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

export default Achievements;

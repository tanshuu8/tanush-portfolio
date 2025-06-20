
const Projects = () => {
  const projects = [
    {
      title: "Internship Tracker",
      tech: "AI Tools (Chef Convex), No-Code Platforms",
      date: "May 2025",
      description: "Developed a fully functional Internship Tracker application utilizing no-code AI platforms like Chef Convex to simplify application tracking. The system allows users to log companies, application deadlines, job roles, and status updates with an intuitive, clean interface.",
      features: [
        "Track multiple applications",
        "Update status (Applied, In Progress, Interview, Offer, Rejected)",
        "Company & role details",
        "Clean user-friendly UI",
        "Built entirely using AI-powered no-code tools"
      ],
      tags: ["#AI", "#NoCode", "#Productivity"]
    },
    {
      title: "To-Do List Web Application",
      tech: "HTML, CSS, JavaScript",
      date: "Nov 2024",
      description: "Designed and developed a responsive To-Do List Web App using vanilla JavaScript, HTML, and CSS. The application allows users to add, edit, delete, and mark tasks as complete, with full local storage support ensuring persistence even after page reloads.",
      features: [
        "Add / delete / complete tasks",
        "Local storage integration",
        "Fully responsive design",
        "User-friendly interface"
      ],
      tags: ["#JavaScript", "#HTML", "#CSS"]
    },
    {
      title: "Personal Portfolio Website",
      tech: "React.js, Tailwind CSS, AI Tools",
      date: "June 2025",
      description: "Created a fully responsive personal portfolio website to showcase academic background, skills, projects, certifications, and contact information. Combined AI tools for design assistance with React and Tailwind to deliver a modern, visually appealing digital resume.",
      features: [
        "Responsive design with dark/light mode",
        "Downloadable resume functionality",
        "Scroll-to-top button",
        "Smooth section-based navigation",
        "Built with React Router & animations"
      ],
      tags: ["#React", "#Tailwind", "#Portfolio"]
    },
    {
      title: "Esthaura Clothing Brand Landing Page",
      tech: "HTML, CSS, JavaScript",
      date: "2024",
      description: "Built a responsive Coming Soon landing page for personal streetwear brand Esthaura. The design reflects a modern urban aesthetic with bold typography, brand identity, and user-friendly lead generation elements.",
      features: [
        "Countdown timer for brand launch",
        "Email subscription form",
        "Bold urban design language",
        "Mobile responsive",
        "Clean minimalist layout"
      ],
      tags: ["#Branding", "#Design", "#Landing"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-outfit font-bold text-center mb-12 gradient-text">
          Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in border border-border group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-outfit font-bold text-foreground mb-2 group-hover:text-vibrant-red transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-spring-green/20 text-spring-green text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-semibold">Tech Stack:</span> {project.tech}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold">Date:</span> {project.date}
                </p>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-vibrant-red mr-2 mt-1">✓</span>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      type: "Email",
      value: "tanushchandhra.vyogi@gmail.com",
      icon: "📧",
      href: "mailto:tanushchandhra.vyogi@gmail.com"
    },
    {
      type: "Phone",
      value: "+91 8008328313",
      icon: "📱",
      href: "tel:+918008328313"
    },
    {
      type: "GitHub",
      value: "github.com/tanshuu8",
      icon: "💻",
      href: "https://github.com/tanshuu8"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-outfit font-bold text-center mb-12 gradient-text">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-outfit font-bold mb-6 text-foreground">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, 
              or just having a chat about technology and innovation. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.type === "GitHub" ? "_blank" : undefined}
                  rel={info.type === "GitHub" ? "noopener noreferrer" : undefined}
                  className="flex items-center p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-spring-green/10 border border-border group"
                >
                  <span className="text-3xl mr-4 group-hover:animate-bounce">
                    {info.icon}
                  </span>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-vibrant-red transition-colors">
                      {info.type}
                    </p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32"
                  placeholder="Your message..."
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-vibrant-red hover:bg-vibrant-red/90 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Send Message 🚀
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

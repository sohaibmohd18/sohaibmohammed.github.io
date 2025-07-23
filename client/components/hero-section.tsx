import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase, Linkedin } from "lucide-react";

const techIcons = [
  { icon: "☁️", label: "AWS", delay: 0 },
  { icon: "🚀", label: "Docker", delay: 0.5 },
  { icon: "⚡", label: "CI/CD", delay: 1 },
  { icon: "🔧", label: "DevOps", delay: 1.5 },
  { icon: "🖥️", label: "Infrastructure", delay: 2 },
  { icon: "📊", label: "Monitoring", delay: 2.5 },
];

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">Sohaib</span>
              </h1>
              <p className="text-xl lg:text-2xl text-warm-gray-600 dark:text-warm-gray-300 mt-4">
                DevOps Engineer & Site Reliability Engineer
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-warm-gray-600 dark:text-warm-gray-400 leading-relaxed">
                With 3.5+ years of experience in building and optimizing cloud infrastructure across AWS, Azure, and GCP. 
                Passionate about automation, scalability, and delivering secure, cost-efficient solutions.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("experience")}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                View My Work
              </Button>
            </motion.div>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="https://www.linkedin.com/in/sohaib-mohd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-warm-gray-500 hover:text-primary transition-colors duration-200 text-2xl"
              >
                <Linkedin />
              </a>
              <a 
                href="mailto:sohaibmohd000@gmail.com"
                className="text-warm-gray-500 hover:text-primary transition-colors duration-200 text-2xl"
              >
                <Mail />
              </a>
            </motion.div>
          </div>

          {/* Animated Tech Stack Visualization */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-96 h-96 mx-auto">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {techIcons.map((tech, index) => (
                    <motion.div
                      key={tech.label}
                      className="bg-gradient-to-br from-primary to-primary/70 dark:from-primary/80 dark:to-primary/50 rounded-2xl flex items-center justify-center text-white text-4xl hover:scale-110 transition-transform duration-300 cursor-pointer"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: tech.delay,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)"
                      }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        y: {
                          duration: 6,
                          ease: "easeInOut",
                          repeat: Infinity,
                          delay: tech.delay,
                        }
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/hero-section.jsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase, Linkedin, Github } from "lucide-react";

const techIcons = [
  { icon: "☁️", label: "AWS", delay: 0 },
  { icon: "🚀", label: "Docker", delay: 0.5 },
  { icon: "⚡", label: "CI/CD", delay: 1 },
  { icon: "🔧", label: "DevOps", delay: 1.5 },
  { icon: "🖥️", label: "Infrastructure", delay: 2 },
  { icon: "📊", label: "Monitoring", delay: 2.5 },
];

export function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Hi, I'm{" "}
                <span className="text-foreground text-7xl font-bold">
                  Sohaib
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4">
                DevOps and Infrastructure Engineer
              </p>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building Scalable and Reliable Cloud Infrastructure Solutions
              for SaaS and Enterprise Applications. Passionate about automation,
              scalability, and delivering secure, cost-efficient solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-foreground text-white hover:brightness-95"
              >
                <Mail className="mr-2 h-4 w-4" /> Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("experience")}
              >
                <Briefcase className="mr-2 h-4 w-4" /> View My Work
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-6 text-muted-foreground text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://www.linkedin.com/in/sohaib-mohd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:brightness-90"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:sohaibmohd000@gmail.com" className="text-foreground hover:brightness-90">
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/sohaibmohd18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:brightness-90"
                aria-label="Open GitHub in new tab"
              >
                <Github className="h-6 w-6" />
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <div className="relative w-96 h-96 mx-auto grid grid-cols-3 gap-4">
              {techIcons.map((tech) => (
                <motion.div
                  key={tech.label}
                  className="bg-warm-gray-100 rounded-2xl flex items-center justify-center text-foreground text-4xl shadow-sm hover:scale-110 transition-transform duration-300 cursor-pointer"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: tech.delay,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
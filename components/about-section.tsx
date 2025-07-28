// components/about-section.tsx
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const expertise = [
  "Cloud Infrastructure (AWS, Azure, GCP)",
  "CI/CD Pipeline Implementation",
  "Kubernetes & Container Orchestration",
  "Infrastructure as Code (Terraform, Ansible)",
  "Monitoring & Observability",
  "Site Reliability Engineering",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Building reliable, scalable infrastructure solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate DevOps Engineer and Site Reliability Engineer with over
              3.5 years of hands-on experience in designing, implementing, and optimizing
              cloud infrastructure. My expertise spans across major cloud platforms including
              AWS, Azure, and Google Cloud.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I specialize in automating deployments, managing containerized applications
              with Kubernetes and Docker, and utilizing Infrastructure as Code (IaC) tools
              such as Terraform and Ansible. My goal is to drive efficient, scalable, and
              secure cloud solutions that contribute to organizational success.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="text-center p-6 rounded-xl bg-muted"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-extrabold text-primary mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">3.5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </motion.div>
              <motion.div
                className="text-center p-6 rounded-xl bg-muted"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-extrabold text-secondary mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">20+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-1 rounded-xl shadow-xl">
              <div className="bg-background rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
                <ul className="space-y-3">
                  {expertise.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="text-green-500 text-secondary mr-3 h-5 w-15" />
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
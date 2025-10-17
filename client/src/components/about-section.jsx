// components/about-section.tsx
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const expertise = [
  "Cloud Infrastructure (AWS, Azure, GCP)",
  "Kubernetes & Container Orchestration",
  "CI/CD Pipelines (Jenkins, GitHub Actions, ArgoCD)",
  "Infrastructure as Code (Terraform, Ansible)",
  "Monitoring (Prometheus, Grafana)",
  "Databases (MySQL, PostgreSQL, MongoDB)",
  "Security (IAM, Network Security, Compliance, Okta)",
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
              DevOps and Infrastructure Engineer with over 4 years of experience in designing,
              implementing, and managing cloud-based solutions. Skilled in leveraging modern
              DevOps practices to enhance deployment efficiency, system reliability, and
              operational excellence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I specialize in automating deployments, managing containerized workloads
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
                <div className="text-3xl font-extrabold text-foreground mb-2">4</div>
                <div className="text-muted-foreground">Years Experience</div>
              </motion.div>
              <motion.div
                className="text-center p-6 rounded-xl bg-muted"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-extrabold text-foreground mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-1 rounded-xl shadow-xl">
              <motion.div className="bg-background rounded-lg p-6" whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.25 }}>
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
                      <CheckCircle className="text-green-500 mr-3 h-5 w-5" />
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// components/skills-section.tsx
import { motion } from "framer-motion";
import { Cloud, Code, Cog, Server, Activity, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "AWS Cloud",
    icon: Cloud,
    color: "text-foreground",
    bgColor: "bg-warm-gray-100",
    skills: ["EC2", "S3", "Lambda", "RDS", "EKS", "VPC", "CloudWatch", "Route 53"],
  },
  {
    title: "Azure Cloud",
    icon: Cloud,
    color: "text-foreground",
    bgColor: "bg-warm-gray-100",
    skills: ["Azure VM", "AKS", "ACR", "Functions", "Blob Storage", "DevOps Services", "Monitor"],
  },
  {
    title: "CI/CD Tools",
    icon: GitBranch,
    color: "text-foreground",
    bgColor: "bg-warm-gray-100",
    skills: ["Jenkins", "GitHub Actions", "ArgoCD", "Circle CI", "AWS CodePipeline"],
  },
  {
    title: "Containerization",
    icon: Server,
    color: "text-foreground",
    bgColor: "bg-warm-gray-100",
    skills: ["Kubernetes", "Docker", "OpenShift", "Helm Charts", "EKS", "AKS"],
  },
  {
    title: "Infrastructure as Code",
    icon: Cog,
    color: "text-foreground",
    bgColor: "bg-warm-gray-100",
    skills: ["Terraform", "Ansible", "CloudFormation", "Chef", "Puppet"],
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    color: "text-foreground",
    bgColor: "bg-warm-gray-100",
    skills: ["Prometheus", "Grafana", "Datadog", "Splunk", "ELK Stack", "Kibana"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                  key={category.title}
                  className="card-apple p-6 transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-4">
                    <div className={`p-3 ${category.bgColor} rounded-full mr-4`}>
                    <IconComponent className={`text-2xl ${category.color} h-6 w-6`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-muted text-foreground rounded-full text-sm transition-colors hover:bg-warm-gray-200"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
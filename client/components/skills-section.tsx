import { motion } from "framer-motion";
import { Cloud, Code, Cog, Server, Activity, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "AWS Cloud",
    icon: Cloud,
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    skills: ["EC2", "S3", "Lambda", "RDS", "EKS", "VPC", "CloudWatch", "Route 53"]
  },
  {
    title: "Azure Cloud", 
    icon: Cloud,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    skills: ["Azure VM", "AKS", "ACR", "Functions", "Blob Storage", "DevOps Services", "Monitor"]
  },
  {
    title: "CI/CD Tools",
    icon: GitBranch,
    color: "text-secondary",
    bgColor: "bg-secondary/20 dark:bg-secondary/30",
    skills: ["Jenkins", "GitHub Actions", "ArgoCD", "Circle CI", "AWS CodePipeline"]
  },
  {
    title: "Containerization",
    icon: Server,
    color: "text-primary",
    bgColor: "bg-primary/20 dark:bg-primary/30",
    skills: ["Kubernetes", "Docker", "OpenShift", "Helm Charts", "EKS", "AKS"]
  },
  {
    title: "Infrastructure as Code",
    icon: Cog,
    color: "text-accent",
    bgColor: "bg-accent/20 dark:bg-accent/30",
    skills: ["Terraform", "Ansible", "CloudFormation", "Chef", "Puppet"]
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    skills: ["Prometheus", "Grafana", "Datadog", "Splunk", "ELK Stack", "Kibana"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-warm-gray-50 dark:bg-warm-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-warm-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-warm-gray-600 dark:text-warm-gray-300">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                className="bg-white dark:bg-warm-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 ${category.bgColor} rounded-lg mr-4`}>
                    <IconComponent className={`text-2xl ${category.color} h-6 w-6`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-warm-gray-100 dark:bg-warm-gray-700 text-foreground rounded-full text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
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

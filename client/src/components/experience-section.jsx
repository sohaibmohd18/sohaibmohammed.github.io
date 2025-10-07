// components/experience-section.tsx
import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Infrastructure Engineer",
    company: "Adobe",
    location: "San Jose, CA",
    period: "May 2025 – Present",
    color: "text-purple-600",
    achievements: [
      "Provisioned AWS resources using AWS Controllers for Kubernetes (ACK) and Helm templates to standardize and automate deployment of AWS resources within Adobe's cloud-native ecosystem",
      "Implemented observability stack using Prometheus, Grafana, and YACE exporters, enabling high-availability metrics ingestion and granular monitoring across namespaces",
      "Automated infrastructure deployment workflows, reducing manual intervention by 60% and improving deployment consistency across multi-cluster Kubernetes environments"
    ]
  },
  {
    title: "Site Reliability Engineer",
    company: "Fabs IT Solutions",
    location: "Hayward, CA",
    period: "Sep 2024 – Mar 2025",
    color: "text-green-600",
    achievements: [
      "Deployed and managed scalable AWS Infrastructure, improving system availability to 99.99%",
      "Implemented CI pipelines using Jenkins, reducing build and deployment time by 60%",
      "Automated backend infrastructure provisioning for 15+ microservices using Terraform modules, reducing manual setup time by 80%"
    ]
  },
  {
    title: "DevOps Engineer",
    company: "Compass Group",
    location: "Hayward, CA",
    period: "Aug 2023 – May 2024",
    color: "text-yellow-600",
    achievements: [
      "Provisioned infrastructure for 20+ applications using Terraform, optimizing resource utilization and reducing manual provisioning time",
      "Implemented Argo CD for automated Kubernetes deployments, reducing deployment time by 50%",
      "Maintained 99.9% uptime through regular health checks and load balancer configuration"
    ]
  },
  {
    title: "DevOps Associate",
    company: "Accenture",
    location: "Hyderabad, India",
    period: "Sep 2020 – Aug 2022",
    color: "text-purple-600",
    achievements: [
      "Migrated on-premises infrastructure to AWS, reducing operational costs by 40%",
      "Managed multi-stage CI/CD pipelines using Jenkins, integrating security scanning and automated testing",
      "Implemented monitoring solutions using Prometheus and Grafana, improving issue detection time by 40%"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">
            My journey in DevOps and Site Reliability Engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-muted rounded-xl p-8 transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className={`text-lg font-semibold ${exp.color}`}>{exp.company}</p>
                  <p className="text-muted-foreground">{exp.location}</p>
                </div>
                <div className="text-muted-foreground mt-2 lg:mt-0 flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <motion.li
                    key={achievementIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + achievementIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <ChevronRight
                      className={`${exp.color} mr-3 mt-1 h-4 w-4 flex-shrink-0`}
                    />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: achievement.replace(
                          /(\d+%)/g,
                          '<span class="font-semibold text-accent">$1</span>'
                        ),
                      }}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

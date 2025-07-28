// components/education-section.tsx
import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2">Education</h2>
          <p className="text-lg text-muted-foreground">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <GraduationCap className="text-primary h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      Master of Science in Business Analytics
                    </h3>
                    <p className="text-lg font-semibold text-primary">
                      California State University East Bay
                    </p>
                    <p className="text-muted-foreground">Hayward, CA</p>
                  </div>
                </div>
              </div>
              <div className="text-muted-foreground flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Aug 2022 – May 2024
              </div>
            </div>
            <motion.div
              className="mt-6 p-4 rounded-lg bg-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground">
                Advanced coursework in data analytics, business intelligence, and statistical modeling. Developed strong analytical skills that complement my technical expertise in DevOps and infrastructure management.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
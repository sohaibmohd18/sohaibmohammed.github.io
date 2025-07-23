import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-warm-gray-50 dark:bg-warm-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-warm-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-xl text-warm-gray-600 dark:text-warm-gray-300">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white dark:bg-warm-gray-800 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-4 lg:mb-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <GraduationCap className="text-primary h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Master of Science in Business Analytics
                    </h3>
                    <p className="text-xl text-primary font-semibold">California State University East Bay</p>
                    <p className="text-warm-gray-600 dark:text-warm-gray-300">Hayward, CA</p>
                  </div>
                </div>
              </div>
              <div className="text-warm-gray-500 dark:text-warm-gray-400 flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Aug 2022 – May 2024
              </div>
            </div>
            <motion.div
              className="mt-6 p-4 bg-warm-gray-50 dark:bg-warm-gray-700 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-warm-gray-600 dark:text-warm-gray-400">
                Advanced coursework in data analytics, business intelligence, and statistical modeling. 
                Developed strong analytical skills that complement my technical expertise in DevOps and infrastructure management.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

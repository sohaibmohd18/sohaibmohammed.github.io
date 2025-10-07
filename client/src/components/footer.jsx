import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Sohaib Ahmed Mohammed</h3>
          <p className="text-warm-gray-300 mb-6">DevOps Engineer & Site Reliability Engineer</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="mailto:sohaibmohd000@gmail.com"
              className="text-warm-gray-400 hover:text-primary transition-colors duration-200 text-2xl"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Mail />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sohaib-mohd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-gray-400 hover:text-primary transition-colors duration-200 text-2xl"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Linkedin />
            </motion.a>
          </div>
          
          <div className="border-t border-warm-gray-700 pt-8">
            <p className="text-warm-gray-400">
              &copy; 2025 Sohaib Ahmed Mohammed. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

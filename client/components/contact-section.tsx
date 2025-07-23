import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const whyWorkWithMe = [
  "Proven track record in cloud infrastructure",
  "Strong automation and DevOps expertise", 
  "Experience with scalable, secure solutions",
  "Collaborative team player"
];

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at sohaibmohd000@gmail.com",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background dark:bg-warm-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-warm-gray-600 dark:text-warm-gray-300">
            Let's discuss opportunities and collaborations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Mail className="text-primary text-xl h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-warm-gray-600 dark:text-warm-gray-400">Email</p>
                    <a 
                      href="mailto:sohaibmohd000@gmail.com" 
                      className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      sohaibmohd000@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 bg-secondary/10 rounded-lg mr-4">
                    <Linkedin className="text-secondary text-xl h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-warm-gray-600 dark:text-warm-gray-400">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/sohaib-mohd" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-secondary hover:text-secondary/80 transition-colors duration-200"
                    >
                      linkedin.com/in/sohaib-mohd
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 bg-accent/10 rounded-lg mr-4">
                    <MapPin className="text-accent text-xl h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-warm-gray-600 dark:text-warm-gray-400">Location</p>
                    <p className="text-lg font-semibold text-foreground">Hayward, CA</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-primary to-secondary p-1 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-background dark:bg-warm-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Why Work With Me?</h4>
                <ul className="space-y-2 text-warm-gray-600 dark:text-warm-gray-400">
                  {whyWorkWithMe.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="text-secondary mr-2 h-4 w-4" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-warm-gray-50 dark:bg-warm-gray-700 rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-warm-gray-700 dark:text-warm-gray-300 mb-2">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your Name"
                    className="transition-colors duration-200"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-warm-gray-700 dark:text-warm-gray-300 mb-2">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-sm font-medium text-warm-gray-700 dark:text-warm-gray-300 mb-2">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="Message Subject"
                  className="transition-colors duration-200"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-warm-gray-700 dark:text-warm-gray-300 mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Your message here..."
                  className="transition-colors duration-200 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                {contactMutation.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// components/contact-section.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";

const whyWorkWithMe = [
  "Proven track record in cloud infrastructure",
  "Strong automation and DevOps expertise",
  "Experience with scalable, secure solutions",
  "Collaborative team player",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss opportunities and collaborations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info + Highlights */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-3 bg-warm-gray-100 rounded-lg mr-4">
                    <Mail className="text-foreground h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground ">Email</p>
                    <a href="mailto:sohaibmohd000@gmail.com" className="text-base font-semibold text-foreground hover:underline">
                      sohaibmohd000@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-warm-gray-100 rounded-lg mr-4">
                    <Linkedin className="text-foreground h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground ">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/sohaib-mohd" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-foreground hover:underline">
                      linkedin.com/in/sohaib-mohd
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-warm-gray-100 rounded-lg mr-4">
                    <MapPin className="text-foreground h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-base font-semibold text-foreground">Hayward, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 rounded-xl">
              <div className="bg-background rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">Why Work With Me?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {whyWorkWithMe.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="text-green-500 mr-3 h-5 w-5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-muted rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Note: NodeMailer integration is in progress. The contact form is not yet connected — please email me directly at <a href="mailto:sohaibmohd000@gmail.com" className="underline">sohaibmohd000@gmail.com</a> for now.
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="Message Subject"
                />
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Your message here..."
                />
              </div>
              <Button type="submit" className="w-full bg-foreground text-white hover:brightness-95">
                <Send className="mr-2 h-4 w-4 " />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
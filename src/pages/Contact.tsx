import { motion } from "motion/react";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Instagram, Dribbble, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@alexmorgan.design",
      href: "mailto:hello@alexmorgan.design",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "#",
      color: "hover:text-pink-400",
    },
    {
      icon: Dribbble,
      name: "Dribbble",
      href: "#",
      color: "hover:text-pink-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-violet-900/30 border border-violet-500/30 rounded-full mb-6"
          >
            <Send size={16} className="text-violet-400" />
            <span className="text-sm text-violet-300">Let's Talk</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl mb-6 text-white">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <h2 className="text-3xl mb-6 text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-violet-500/50 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl">
              <h2 className="text-3xl mb-8 text-white">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg text-gray-200 hover:text-violet-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-lg text-gray-200">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl">
              <h2 className="text-3xl mb-6 text-white">Follow Me</h2>
              <p className="text-gray-400 mb-8">
                Connect with me on social media to see my latest work and creative journey.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 p-8 rounded-3xl text-white"
            >
              <h3 className="text-2xl mb-3">Currently Available</h3>
              <p className="opacity-90">
                I'm currently accepting new projects and collaborations. Let's make
                something extraordinary together!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Map/Location Section (Decorative) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl h-96 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 text-center">
            <MapPin size={48} className="mx-auto mb-4 text-violet-400" />
            <h3 className="text-2xl mb-2 text-white">Based in San Francisco</h3>
            <p className="text-gray-400">Open to remote and on-site projects worldwide</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
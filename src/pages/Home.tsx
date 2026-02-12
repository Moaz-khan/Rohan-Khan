import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles, Zap, Eye, Target, Briefcase, Users } from "lucide-react";

const recentProjects = [
  {
    id: 1,
    title: "Modern Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1767652723573-161f1c223d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc3MDkzMjEwMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Creative Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1758873272540-439a105db676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwcHJvamVjdHxlbnwxfHx8fDE3NzA4MTk4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "UI/UX Interface",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwOTE5MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Alex's design work transformed our brand completely. The attention to detail and creative vision exceeded all expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, Creative Co.",
    content: "Working with Alex was an absolute pleasure. Professional, responsive, and delivered exceptional results on time.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Design Studio",
    content: "The creativity and strategic thinking Alex brings to every project is truly remarkable. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export function Home() {
  return (
    <div>
      {/* Hero Section - Split Layout */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
              >
                <Sparkles size={16} className="text-violet-400" />
                <span className="text-sm text-gray-300">Available for new projects</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-transparent"
                style={{ fontWeight: 700, lineHeight: 1.1 }}
              >
                Crafting Visual
                <br />
                Experiences
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-400 mb-10 max-w-xl"
              >
                A graphic designer passionate about creating compelling visual narratives
                that bridge creativity and strategy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-4 flex-wrap"
              >
                <Link to="/work">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full shadow-xl hover:shadow-violet-500/50 transition-all flex items-center gap-2"
                  >
                    View My Work
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full border border-white/10 hover:bg-white/10 transition-all"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - 2x2 Feature Cards Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Sparkles, title: "Brand Identity", count: "50+" },
                { icon: Zap, title: "Digital Design", count: "80+" },
                { icon: Target, title: "Projects", count: "120+" },
                { icon: Users, title: "Happy Clients", count: "95+" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl mb-1 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                    {feature.count}
                  </div>
                  <div className="text-sm text-gray-400">{feature.title}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Recent Work
            </h2>
            <p className="text-xl text-gray-400">
              Latest projects I've worked on
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {recentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-sm text-violet-400 mb-2">{project.category}</div>
                    <div className="text-xl text-white">{project.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full border border-white/10 hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                Explore All Projects
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What I Do Best Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              What I Do Best
            </h2>
            <p className="text-xl text-gray-400">
              Bringing ideas to life through strategic design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Brand Identity",
                description:
                  "Creating memorable brand experiences that resonate with your audience and stand out in the market.",
              },
              {
                icon: Zap,
                title: "Digital Design",
                description:
                  "Designing modern, user-centric interfaces that engage users and drive conversions.",
              },
              {
                icon: Eye,
                title: "Visual Strategy",
                description:
                  "Developing cohesive visual systems that tell your story across all touchpoints.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-400">
              What people say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-violet-500"
                  />
                  <div>
                    <div className="text-white mb-1">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined CTA + Footer Section */}
      <section className="py-20 px-6 border-t border-white/10 bg-gradient-to-b from-black to-violet-950/20">
        <div className="max-w-7xl mx-auto">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl mb-8 text-gray-400">
              Let's collaborate to bring your vision to life with design that makes an impact.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full shadow-xl hover:shadow-violet-500/50 transition-all"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>

          {/* Footer */}
          <div className="grid md:grid-cols-3 gap-8 mb-8 pt-12 border-t border-white/10">
            <div>
              <h3 className="text-xl mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Alex Morgan
              </h3>
              <p className="text-gray-400">
                Graphic Designer crafting visual stories that inspire and engage.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { path: "/", label: "Home" },
                  { path: "/work", label: "Work" },
                  { path: "/about", label: "About" },
                  { path: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-400 hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-white">Let's Connect</h4>
              <p className="text-gray-400 mb-4">
                Ready to bring your vision to life? Get in touch!
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 transition-all text-white"
              >
                Start a Project
              </Link>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>© 2026 Alex Morgan. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

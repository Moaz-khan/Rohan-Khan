import { motion } from "motion/react";
import { Award, Heart, Lightbulb, Target, Coffee, Palette } from "lucide-react";

const skills = [
  { name: "Adobe Creative Suite", level: 95 },
  { name: "Figma & Design Systems", level: 90 },
  { name: "Brand Strategy", level: 88 },
  { name: "UI/UX Design", level: 92 },
  { name: "Typography", level: 94 },
  { name: "Motion Graphics", level: 85 },
];

const values = [
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description: "Pushing boundaries to create unique and memorable design solutions.",
  },
  {
    icon: Target,
    title: "Strategic Thinking",
    description: "Every design decision is backed by purpose and research.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description: "Designing with empathy and understanding of user needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering high-quality work that exceeds expectations.",
  },
];

export function About() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-900/30 border border-violet-500/30 rounded-full mb-6">
              <Coffee size={16} className="text-violet-400" />
              <span className="text-sm text-violet-300">Nice to Meet You</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Hello, I'm Alex
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              A passionate graphic designer with over 8 years of experience transforming
              ideas into compelling visual stories.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              I believe that great design is more than aesthetics—it's about creating
              meaningful connections between brands and their audiences. My approach
              combines strategic thinking with creative execution to deliver designs
              that not only look beautiful but also drive results.
            </p>
            <p className="text-lg text-gray-400">
              When I'm not designing, you'll find me exploring art galleries, experimenting
              with new design techniques, or enjoying a good cup of coffee while sketching
              out my next big idea.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1740223544743-2aac7fb644c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDg3NzU2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alex Morgan"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-violet-600 rounded-full blur-2xl opacity-30" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-full blur-2xl opacity-30" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 -right-10 w-20 h-20 bg-gradient-to-br from-violet-400 to-indigo-400 rounded-2xl opacity-10"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 border-t border-white/10 pt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              My Design Philosophy
            </h2>
            <p className="text-xl text-gray-400">
              Core values that guide my creative process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 border-t border-white/10 pt-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-900/30 border border-violet-500/30 rounded-full mb-6">
                <Palette size={16} className="text-violet-400" />
                <span className="text-sm text-violet-300">Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-white">
                Skills & Tools
              </h2>
              <p className="text-lg text-gray-400">
                A diverse skill set that enables me to tackle any design challenge
                with confidence and creativity.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-violet-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 border-t border-white/10 pt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Experience
            </h2>
            <p className="text-xl text-gray-400">
              A journey of continuous growth and learning
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: "2022 - Present",
                title: "Senior Graphic Designer",
                company: "Creative Studio Co.",
                description: "Leading design projects for Fortune 500 clients, mentoring junior designers.",
              },
              {
                year: "2019 - 2022",
                title: "Brand Designer",
                company: "Design House Agency",
                description: "Developed comprehensive brand identities for startups and established businesses.",
              },
              {
                year: "2018 - 2019",
                title: "Junior Designer",
                company: "Pixel Perfect Studio",
                description: "Contributed to various design projects, from web design to print materials.",
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-violet-500/30"
              >
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full" />
                <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                  <div className="text-sm text-violet-400 mb-2">{exp.year}</div>
                  <h3 className="text-2xl mb-1 text-white">{exp.title}</h3>
                  <div className="text-gray-400 mb-3">{exp.company}</div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-white">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            I'm always excited to collaborate on new projects and challenges.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full shadow-xl hover:shadow-violet-500/50 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
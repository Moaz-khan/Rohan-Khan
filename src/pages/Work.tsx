import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Modern Brand Identity",
    category: "Branding",
    description: "Complete brand identity system for a tech startup",
    image: "https://images.unsplash.com/photo-1767652723573-161f1c223d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc3MDkzMjEwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 2,
    title: "Creative Campaign",
    category: "Marketing",
    description: "Multi-channel marketing campaign design",
    image: "https://images.unsplash.com/photo-1758873272540-439a105db676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwcHJvamVjdHxlbnwxfHx8fDE3NzA4MTk4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 3,
    title: "Minimalist Portfolio",
    category: "Web Design",
    description: "Clean and modern portfolio website design",
    image: "https://images.unsplash.com/photo-1761156254622-7b66649b1f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwYXJ0d29ya3xlbnwxfHx8fDE3NzA5MzIxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Typography Poster Series",
    category: "Print Design",
    description: "Experimental typography poster collection",
    image: "https://images.unsplash.com/photo-1770581939371-326fc1537f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc3MDkzMjEwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 5,
    title: "UI/UX Interface",
    category: "Web Design",
    description: "Sleek mobile app interface design",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwOTE5MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 6,
    title: "Editorial Layout",
    category: "Print Design",
    description: "Magazine spread and editorial design",
    image: "https://images.unsplash.com/photo-1767652723573-161f1c223d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc3MDkzMjEwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-emerald-500 to-green-500",
  },
];

const categories = ["All", "Branding", "Web Design", "Print Design", "Marketing"];

export function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
            <Search size={16} className="text-violet-400" />
            <span className="text-sm text-violet-300">Explore My Work</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl mb-6 text-white">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A curated selection of my recent work across branding, web design, and visual communication.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/50"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
            >
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Gradient Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
                className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80`}
              />

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                  y: hoveredProject === project.id ? 0 : 20,
                }}
                className="absolute inset-0 p-8 flex flex-col justify-end text-white"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full w-fit mb-4">
                  <span className="text-sm">{project.category}</span>
                </div>
                <h3 className="text-2xl mb-2">{project.title}</h3>
                <p className="text-sm opacity-90 mb-4">{project.description}</p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center gap-2 text-sm"
                >
                  View Project
                  <ExternalLink size={16} />
                </motion.div>
              </motion.div>

              {/* Hover Border Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                }}
                className="absolute inset-0 border-4 border-white rounded-3xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-white">
            Want to Work With Me?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can collaborate on your next project.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full shadow-xl hover:shadow-violet-500/50 transition-all"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

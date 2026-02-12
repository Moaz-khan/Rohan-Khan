import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-9xl md:text-[12rem] bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-8"
          style={{ fontWeight: 700, lineHeight: 1 }}
        >
          404
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-900/30 border border-violet-500/30 rounded-full mb-6">
            <Search size={16} className="text-violet-400" />
            <span className="text-sm text-violet-300">Page Not Found</span>
          </div>
          <h1 className="text-3xl md:text-4xl mb-4 text-white">Oops! Lost in Space</h1>
          <p className="text-xl text-gray-400 mb-12">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full shadow-xl hover:shadow-violet-500/50 transition-all flex items-center gap-2"
            >
              <Home size={20} />
              Back to Home
            </motion.button>
          </Link>
          <Link to="/work">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white rounded-full border border-white/10 hover:bg-white/10 transition-all"
            >
              View Work
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-16 opacity-20"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full blur-2xl" />
        </motion.div>
      </motion.div>
    </div>
  );
}
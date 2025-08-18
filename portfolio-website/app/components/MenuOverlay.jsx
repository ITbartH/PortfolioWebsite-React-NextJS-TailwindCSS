import React from 'react'
import { motion } from 'framer-motion'

const MenuOverlay = ({ links, onClose }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const linkVariants = {
    rest: {
      scale: 1,
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(234, 179, 8, 0.1)",
    },
    tap: {
      scale: 0.98,
      backgroundColor: "rgba(234, 179, 8, 0.2)",
    }
  }

  const handleLinkClick = () => {
    setTimeout(() => {
      onClose()
    }, 100)
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-8 px-6"
    >
      <ul className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
          >
            <motion.div
              variants={linkVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="relative group"
            >
              {/* bg glow */}
              <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              <a
                href={link.path}
                onClick={handleLinkClick}
                className="relative flex items-center justify-center py-5 px-8 rounded-2xl border border-white/10 group-hover:border-yellow-500/30 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                {/* icon */}
                <div className="absolute left-6 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center group-hover:from-yellow-500/40 group-hover:to-yellow-600/40 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600" />
                </div>

                {/* texts */}
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white group-hover:from-yellow-400 group-hover:to-yellow-200 transition-all duration-300 pl-8">
                  {link.title}
                </span>

                {/* arrow */}
                <motion.div
                  initial={{ x: 0, opacity: 0.5 }}
                  whileHover={{ x: 5, opacity: 1 }}
                  className="absolute right-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>

                {/* bot border */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      {/* bot decorations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 pt-6 border-t border-white/10"
      >
        <div className="flex justify-center">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + (i * 0.1), duration: 0.3 }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MenuOverlay
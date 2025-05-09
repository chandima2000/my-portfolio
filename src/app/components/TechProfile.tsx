'use client'

import { motion } from 'framer-motion'
import { techProfiles } from '@/contents/techProfiles'
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export default function TechProfile() {
  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Tech Profiles
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {techProfiles.map((techProfile) => (
          <motion.a
            key={techProfile.slug}
            href={techProfile.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className={`flex flex-col items-center justify-center p-6 bg-white dark:bg-dark/50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${techProfile.color}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <techProfile.icon className="h-10 w-10 mb-3" />
            <span className="text-sm font-medium">{techProfile.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">

          {/* Profile Image with animated wavy border */}
          <motion.div
            className="relative flex justify-center items-center"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            {/* Wavy rotating circle */}
            <motion.div
              className="absolute"
              
            />
            <motion.svg
              className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w2.org/2000/svg"
            >
              <motion.circle
                cx='253'
                cy='253'
                r='180'
                stroke='#008000'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
                initial={{strokeDasharray: '24 10 0 0'}}
                animate={{
                  strokeDasharray:['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                  rotate: [120, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            </motion.svg>

            {/* Profile Image */}
            <Image
              src="./profile/profile.jpg"
              alt="Profile"
              width={300}
              height={300}
              className="absolute z-10 rounded-full w-80 h-80 object-cover"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Chandima Maduwantha
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer | AI/ML Developer | DevOps Enthusiast
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/chandima2000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={40} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chandima-maduwantha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={40} />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block w-full bg-green-500 md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-green-600 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="./cv/Chandima_Maduwantha.pdf"
                download
                className="inline-block w-full bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors md:w-auto text-center"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

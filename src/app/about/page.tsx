'use client'

import { FaCode, FaLaptopCode, FaTools, FaDatabase, FaRegFileCode, FaCloudDownloadAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall
} from '@/utils/animations';

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Software Engineer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions. I&apos;m deeply curious about the advancements in
          <span className="text-primary font-medium"> Artificial Intelligence, DevOps practices</span>, and
          <span className="text-primary font-medium"> cutting-edge research</span>. I'm driven by a desire to innovate,
          automate, and constantly explore new knowledge frontiers.
        </p>

      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex flex-row gap-5">
              <FaCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            </div>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>Redux Toolkit</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex flex-row gap-5">
              <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
            </div>
            <ul className="text-secondary space-y-2">
              <li>Node.js / Express.js</li>
              <li>Spring Boot</li>
              <li>Flask / Django</li>
              <li>.NET / ASP.NET</li>
              <li>REST API / GraphQL</li>
            </ul>
          </motion.div>


          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex flex-row gap-5">
              <FaDatabase className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Databases</h3>
            </div>

            <ul className="text-secondary space-y-2">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>SQL Server</li>
              <li>MongoDB</li>
              <li>FAISS</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex flex-row gap-5">
              <FaRegFileCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
            </div>

            <ul className="text-secondary space-y-2">
              <li>JavaScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>C#</li>
              <li>C</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex flex-row gap-5">
              <FaTools className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
            </div>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub Actions</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Kafka</li>
              <li>Grafana</li>
              <li>Keycloak</li>
              <li>Huggingface</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="flex flex-row gap-5">
              <FaCloudDownloadAlt className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
            </div>
            <ul className="text-secondary space-y-2">
              <li>AWS</li>
              <li>Azure</li>
              <li>Firebase</li>
              <li>Supabase</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Publications Section */}
      <motion.section
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Publications
        </motion.h2>
        <motion.div
          className="max-w-5xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >

            <h3 className="text-xl font-semibold text-primary mb-2">AI-Powered Career Guidance System</h3>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed a machine learning-based system to recommend personalized IT career paths.</li>
              <li>Incorporated sentiment analysis and NLP to enhance user interaction and decision-making.</li>
              <li>Presented at the 2024 Undergraduate Research Symposium, Faculty of Computing & Technology, University of Kelaniya.</li>
              <li>Focused on solving guidance issues for students using real-time prediction models.</li>
            </ul>
            <a
              href="https://www.linkedin.com/posts/chandima-maduwantha_proud-to-present-our-innovation-at-the-activity-7270793282794729472-xP3s?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUzKXUBH3MhIuuTdctGxfXIr65fPZsclao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline mt-3 inline-block"
            >
              View LinkedIn Post
            </a>
          </motion.div>

        </motion.div>
      </motion.section>

       {/* Educations */}
       <motion.h2
          className="section-title"
          {...fadeInUp}
        >
          Educations
        </motion.h2>
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          <h3 className="text-xl font-semibold mb-2">Bachelor of Science (Honours) in Computer Science</h3>
          <p className="text-primary mb-2">University of Kelaniya • 2022 - 2026</p>
          <ul className="text-secondary list-disc list-inside space-y-2">
            <li>Specialization in Artificial Intelligence</li>
            <li>Strong focus on software engineering principles</li>
            <li>Involved in undergraduate research and innovation</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          <h3 className="text-xl font-semibold mb-2">GCE A/L Examination - Physical Science</h3>
          <p className="text-primary mb-2">Thelijjawila Central College • 2020</p>
          <ul className="text-secondary list-disc list-inside space-y-2">
            <li>Combined Maths - A</li>
            <li>Chemistry - A</li>
            <li>Physics - C</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  )
} 
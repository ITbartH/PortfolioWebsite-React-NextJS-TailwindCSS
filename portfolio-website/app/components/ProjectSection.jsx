"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

import global_en from '../translations/en/en.json'
import global_pl from '../translations/pl/pl.json'

const ProjectSection = ({ currentLang }) => {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const t = currentLang === "EN" ? global_en.projects : global_pl.projects

  const projectsData = [
    {
      id: 1,
      title: t.p1title,
      description: t.p1desc,
      image: "/images/projects/1.png",
      tag: ["All", "C#"],
      gitUrl: "https://apd.uph.edu.pl/diplomas/28984/",
      previewUrl: "https://youtu.be/RbA79jdt6dY?si=pPzEhiSVxR-ZSrro"
    },
    {
      id: 2,
      title: t.p2title,
      description: t.p2desc,
      image: "/images/projects/2.png",
      tag: ["All", "Java"],
      gitUrl: "https://github.com/hrycek/ProjectMVCSpringboot-Recipes-App",
      previewUrl: ""
    },
    {
      id: 3,
      title: t.p3title,
      description: t.p3desc,
      image: "/images/projects/3.png",
      tag: ["All", "C#"],
      gitUrl: "https://github.com/hrycek/ProjectMVVM-WPF-.NET",
      previewUrl: ""
    },
    {
      id: 4,
      title: t.p4title,
      description: t.p4desc,
      image: "/images/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/hrycek/ProjectIonicReact-CodeClickerApp",
      previewUrl: "https://codeclicker-ee42d.web.app"
    },
    {
      id: 5,
      title: t.p5title,
      description: t.p5desc,
      image: "/images/projects/no-image.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/hrycek/ProjectNodeJS-ExpressJS-React",
      previewUrl: ""
    },
    {
      id: 6,
      title: t.p6title,
      description: t.p6desc,
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/ITbartH/PortfolioWebsite-React-NextJS-TailwindCSS",
      previewUrl: "https://bartoszhrycaj-portfolio.vercel.app/"
    }
  ]

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag))

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section className="mt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t.header}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={() => setTag("All")} name={t.buttonTag} isSelected={tag === "All"} />
        <ProjectTag onClick={() => setTag("C#")} name="C#" isSelected={tag === "C#"} />
        <ProjectTag onClick={() => setTag("Web")} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={() => setTag("Java")} name="Java" isSelected={tag === "Java"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectSection
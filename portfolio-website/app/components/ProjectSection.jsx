"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

import global_en from '../translations/en/en.json'
import global_pl from '../translations/pl/pl.json'
const ENtranslation = global_en;
const PLtranslation = global_pl;

let projectsData = [
    {
        id: 1,
        title: ENtranslation.projects.p1title,
        description: ENtranslation.projects.p1desc,
        image: "/images/projects/1.png",
        tag: ["All", "Java"],
        gitUrl: "https://github.com/hrycek/ProjectMVCSpringboot-Recipes-App",
        previewUrl: ""
    },
    {
        id: 2,
        title: ENtranslation.projects.p2title,
        description: ENtranslation.projects.p2desc,
        image: "/images/projects/no-image.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hrycek/ProjectNodeJS-ExpressJS-React",
        previewUrl: ""
    },
    {
        id: 3,
        title: ENtranslation.projects.p3title,
        description: ENtranslation.projects.p3desc,
        image: "/images/projects/4.png",
        tag: ["All", "C#"],
        gitUrl: "https://github.com/hrycek/ProjectMVVM-WPF-.NET",
        previewUrl: ""
    },
    {
        id: 4,
        title: ENtranslation.projects.p4title,
        description: ENtranslation.projects.p4desc,
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hrycek/ProjectIonicReact-CodeClickerApp",
        previewUrl: "https://codeclicker-ee42d.web.app"
    },
    {
        id: 5,
        title: ENtranslation.projects.p5title,
        description: ENtranslation.projects.p5desc,
        image: "/images/projects/5.png",
        tag: ["All", "C#"],
        gitUrl: "https://apd.uph.edu.pl/diplomas/28984/",
        previewUrl: ""
    },
]

const ProjectSection = (currentLang, setCurrentLang) => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    let buttonTag = "All";
    if (currentLang.currentLang == "EN") {
        buttonTag = ENtranslation.projects.buttonTag
        projectsData = [
            {
                id: 1,
                title: ENtranslation.projects.p1title,
                description: ENtranslation.projects.p1desc,
                image: "/images/projects/1.png",
                tag: ["All", "Java"],
                gitUrl: "https://github.com/hrycek/ProjectMVCSpringboot-Recipes-App",
                previewUrl: ""
            },
            {
                id: 2,
                title: ENtranslation.projects.p2title,
                description: ENtranslation.projects.p2desc,
                image: "/images/projects/no-image.jpg",
                tag: ["All", "Web"],
                gitUrl: "https://github.com/hrycek/ProjectNodeJS-ExpressJS-React",
                previewUrl: ""
            },
            {
                id: 3,
                title: ENtranslation.projects.p3title,
                description: ENtranslation.projects.p3desc,
                image: "/images/projects/4.png",
                tag: ["All", "C#"],
                gitUrl: "https://github.com/hrycek/ProjectMVVM-WPF-.NET",
                previewUrl: ""
            },
            {
                id: 4,
                title: ENtranslation.projects.p4title,
                description: ENtranslation.projects.p4desc,
                image: "/images/projects/3.png",
                tag: ["All", "Web"],
                gitUrl: "https://github.com/hrycek/ProjectIonicReact-CodeClickerApp",
                previewUrl: "https://codeclicker-ee42d.web.app"
            },
            {
                id: 5,
                title: ENtranslation.projects.p5title,
                description: ENtranslation.projects.p5desc,
                image: "/images/projects/5.png",
                tag: ["All", "C#"],
                gitUrl: "https://apd.uph.edu.pl/diplomas/28984/",
                previewUrl: ""
            },
        ]
    } else {
        buttonTag = PLtranslation.projects.buttonTag

        projectsData = [
            {
                id: 1,
                title: PLtranslation.projects.p1title,
                description: PLtranslation.projects.p1desc,
                image: "/images/projects/1.png",
                tag: ["All", "Java"],
                gitUrl: "https://github.com/hrycek/ProjectMVCSpringboot-Recipes-App",
                previewUrl: ""
            },
            {
                id: 2,
                title: PLtranslation.projects.p2title,
                description: PLtranslation.projects.p2desc,
                image: "/images/projects/no-image.jpg",
                tag: ["All", "Web"],
                gitUrl: "https://github.com/hrycek/ProjectNodeJS-ExpressJS-React",
                previewUrl: ""
            },
            {
                id: 3,
                title: PLtranslation.projects.p3title,
                description: PLtranslation.projects.p3desc,
                image: "/images/projects/4.png",
                tag: ["All", "C#"],
                gitUrl: "https://github.com/hrycek/ProjectMVVM-WPF-.NET",
                previewUrl: ""
            },
            {
                id: 4,
                title: PLtranslation.projects.p4title,
                description: PLtranslation.projects.p4desc,
                image: "/images/projects/3.png",
                tag: ["All", "Web"],
                gitUrl: "https://github.com/hrycek/ProjectIonicReact-CodeClickerApp",
                previewUrl: "https://codeclicker-ee42d.web.app"
            },
            {
                id: 5,
                title: PLtranslation.projects.p5title,
                description: PLtranslation.projects.p5desc,
                image: "/images/projects/5.png",
                tag: ["All", "C#"],
                gitUrl: "https://apd.uph.edu.pl/diplomas/28984/",
                previewUrl: ""
            },
        ]

    }

    return (
        <>
            <section className="mt-20">
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                    {
                        currentLang.currentLang == "EN" ?
                            (
                                <>{ENtranslation.projects.header}
                                </>
                            ) :
                            (
                                <>{PLtranslation.projects.header}
                                </>
                            )
                    }
                </h2>
                <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                    <ProjectTag onClick={handleTagChange} name={buttonTag} isSelected={tag === "All"} />
                    <ProjectTag onClick={handleTagChange} name="C#" isSelected={tag === "C#"} />
                    <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                    <ProjectTag onClick={handleTagChange} name="Java" isSelected={tag === "Java"} />
                </div>
                <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {filteredProjects.map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.3 }}
                        >
                            <ProjectCard
                                key={project.id}
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
        </>
    )
}

export default ProjectSection
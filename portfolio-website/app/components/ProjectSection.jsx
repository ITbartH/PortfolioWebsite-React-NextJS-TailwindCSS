"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion, useInView} from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Spring Boot Java App with MVC design pattern.",
        description: "Recipe application created in MVC (Model-View-Controller) model using Spring Boot.",
        image: "/images/projects/1.png",
        tag: ["All", "Java"],
        gitUrl: "https://github.com/hrycek/ProjectMVCSpringboot-Recipes-App",
        previewUrl: ""
    },
    {
        id: 2,
        title: "React/Node/ExpressJS Based App with Firebase Integration.",
        description: "This is an example of a React based web application written in NodeJS technology consisted with client and server.",
        image: "/images/projects/no-image.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hrycek/ProjectNodeJS-ExpressJS-React nb",
        previewUrl: ""
    },
    {
        id: 3,
        title: "ProjectMVVM-WPF - Employees Management.",
        description: "Simple application written in WPF technology in MVVM model using C# to manage a list of employees.",
        image: "/images/projects/4.png",
        tag: ["All", "C#"],
        gitUrl: "https://github.com/hrycek/ProjectMVVM-WPF-.NET",
        previewUrl: ""
    },
    {
        id: 4,
        title: "React Based Ionic Game App with Firebase Integration.",
        description: "This is an example of web/mobile game application, developed using Ionic and React technologies.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/hrycek/ProjectIonicReact-CodeClickerApp",
        previewUrl: "https://codeclicker-ee42d.web.app"
    },
    {
        id: 5,
        title: "Virtual Reality 3D application made in C# within the Unity environment.",
        description: "This immersive therapy platform provides a virtual space where individuals can safely confront and overcome their social fears.",
        image: "/images/projects/5.png",
        tag: ["All", "C#"],
        gitUrl: "https://apd.uph.edu.pl/diplomas/28984/",
        previewUrl: ""
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
    }
  return (
    <>
        <section id="projects" className="mt-20">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects 
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
                <ProjectTag onClick={handleTagChange} name="C#" isSelected={tag === "C#"}/>
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
                <ProjectTag onClick={handleTagChange} name="Java" isSelected={tag === "Java"}/>
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li 
                        key={index}
                        variants={cardVariants} 
                        initial="initial" 
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration: 0.3, delay: index * 0.3}}
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
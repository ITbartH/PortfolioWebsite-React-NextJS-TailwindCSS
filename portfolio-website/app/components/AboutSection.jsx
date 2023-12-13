"use client";
import React, {useTransition, useState} from 'react';
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc list-inside">
                <li><span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">.NET</span> (C#)</li>
                <li><span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">Android</span> (Java/Kotlin)</li>
                <li><span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">Web</span> (HTML/CSS/JavaScript/React)</li>
                <li><span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">Spring</span> (Java)</li>
                <li><span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">Ionic</span> (React)</li>
                <li><span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">Unity</span> (C#)</li>
                <li><span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">Git</span></li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className=" list-inside">
                <li>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">
                        IV Liceum Ogólnokształcące w Siedlcach – im. Stanisława Żółkiewskiego (2015-2018)
                    </span> 
                    <br></br>
                    (Math & IT)
                </li>
                <br></br>
                <li>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">
                        Uniwersytet Przyrodniczo-Humanistyczny w Siedlcach, Instytut Informatyki (2019-2023)
                    </span>
                    <br></br>
                    (Bachelor of Engineering)
                </li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">Certyfikat poświadczający wygłoszenie referatu na Ogólnopolskiej Konferencji Interdyscyplinarnej </span> <br></br>"Współczesne
                    zastosowania Informatyki 2022" (16.05.2022r.)
                </li>
                <br></br>
                <li>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-300">Zaświadczenie o udziale w konferencji "Inkluzja bez barier" inaugurującej
                    projekt grantowy </span><br></br>"Pilotażowe wdrożenie modelu Specjalistycznych
                    Centrów Wspierających Edukację Włączającą" (29.03.2022r.)
                </li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }


  return <section className="text-white mt-32">
            <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
                <Image src="/images/about-image.jpg" width={600} height={500} alt="Working Station" className="place-self-center rounded-xl"/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
                    <p className="text-base md:text-lg">
                    I'm an IT engineer with a passion for creating innovative and immersive applications. I have experience in creating projects 
                    with HTML, CSS, JavaScript, React, Android, Ionic, Java, C#, SQL, Spring, Unity and Git. 
                    I am a quick self learner and I am always looking how to expand my knowledge and skill set. Im not afraid of new challenges.
                    I've been working with groups of people and im excited to work with others to create amazing apps.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}> Skills </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}> Education </TabButton>
                        <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={tab === "certifications"}> Certifications </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    
  
}

export default AboutSection
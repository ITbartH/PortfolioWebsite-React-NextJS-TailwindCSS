'use client'

import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from './components/AchievementsSection'
import { useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'




export default function Home(props) {
  const [currentLang, setCurrentLang] = useState(true);

  const [lang, setLang] = useState("EN");

  const handleLang = (event, newLang) => {
    if (newLang !== null) {
      const content = document.getElementById('content');
  
   
      content.classList.add('opacity-0');
  
      setTimeout(() => {
        setLang(newLang); 
  
      
        setTimeout(() => {
          content.classList.remove('opacity-0');
        }, 100);
      }, 300);
    }
  };

  return (
    <main style={{ scrollBehavior: "smooth" }} className="flex min-h-screen flex-col">

      <Navbar currentLang={lang} setCurrentLang={setCurrentLang}></Navbar>

      <div id ="content" className="container mt-24 mx-auto px-14 py-6 transition-opacity duration-300">
        
        <HeroSection currentLang={lang} setCurrentLang={setCurrentLang} />
        <section id="about"/>
        <AboutSection currentLang={lang} setCurrentLang={setCurrentLang} />

        <AchievementsSection currentLang={lang} setCurrentLang={setCurrentLang} />
        <section id="projects"/>
        <ProjectSection currentLang={lang} setCurrentLang={setCurrentLang} />

        <section id="contact"/>
        <EmailSection currentLang={lang} setCurrentLang={setCurrentLang} />
      </div>
      <Footer />
    </main>
  )
}

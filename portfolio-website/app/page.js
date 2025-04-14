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
      setLang(newLang);
    }

  };

  return (
    <main style={{ scrollBehavior: "smooth" }} className="flex min-h-screen flex-col bg-[#121212]">

      <Navbar currentLang={lang} setCurrentLang={setCurrentLang}></Navbar>

      <div className="container mt-24 mx-auto px-14 py-6">
        <div className="fixed right-5 ">
          <ToggleButtonGroup
            color="warning"
            value={lang}
            exclusive
            onChange={handleLang}
          >
            <ToggleButton value="EN" aria-label="English">
              EN
            </ToggleButton>

            <ToggleButton value="PL" aria-label="Polish">
              PL
            </ToggleButton>

          </ToggleButtonGroup>
        </div>
        <HeroSection currentLang={lang} setCurrentLang={setCurrentLang} />

        <AboutSection currentLang={lang} setCurrentLang={setCurrentLang} />

        <AchievementsSection currentLang={lang} setCurrentLang={setCurrentLang} />

        <ProjectSection currentLang={lang} setCurrentLang={setCurrentLang} />

        <EmailSection currentLang={lang} setCurrentLang={setCurrentLang} />
      </div>
      <Footer />
    </main>
  )
}

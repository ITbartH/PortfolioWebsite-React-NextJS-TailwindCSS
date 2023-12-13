import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from './components/AchievementsSection'

export default function Home() {
  return (
    <main style={{scrollBehavior: "smooth"}} className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-14 py-6">
        <HeroSection/>
        
        <AboutSection/>
        <AchievementsSection/>
        <ProjectSection/>
     
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  )
}

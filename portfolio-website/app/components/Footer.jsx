import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import global_en from '../translations/en/en.json'
import global_pl from '../translations/pl/pl.json'

const Footer = ({ currentLang }) => {

  const t = currentLang === "EN" ? global_en.footer : global_pl.footer

  return (
    <footer className="bg-[#0f0f0f] text-gray-300 pt-12 pb-6 px-6 mt-20 border-t border-gray-800">
   
      <div className="h-1 w-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-400 mb-10" />


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

     
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">{t.aboutTitle}</h3>
          <p>{t.aboutText}</p>
        </div>

    
        <div className="md:block">
          <h3 className="text-lg font-semibold mb-3 text-white">{t.navigationTitle}</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-white transition">{t.aboutLink}</a></li>
            <li><a href="#projects" className="hover:text-white transition">{t.projectsLink}</a></li>
            <li><a href="#contact" className="hover:text-white transition">{t.contactLink}</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">{t.findMeTitle}</h3>
          <div className="flex gap-6 mt-2">
            <a
              href="https://www.linkedin.com/in/bartosz-hrycaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              <FaLinkedin size={36} />
            </a>
            <a
              href="https://github.com/ITbartH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transform hover:scale-110 transition duration-300"
            >
              <FaGithub size={36} />
            </a>
          </div>
        </div>
      </div>

    
      <div className="mt-10 text-center text-xs text-gray-500">
        © 2025 <a href="/" className="hover:underline">Bartosz Hrycaj</a>. {t.rights}
      </div>
    </footer>
  )
}

export default Footer
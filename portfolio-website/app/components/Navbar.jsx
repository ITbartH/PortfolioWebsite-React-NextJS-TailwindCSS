"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon, XmarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

let navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }, 
]


const Navbar = (currentLang, setCurrentLang) => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    if(currentLang.currentLang == "EN"){
        navLinks = [
           {
               title: "About",
               path: "#about",
           },
           {
               title: "Projects",
               path: "#projects",
           },
           {
               title: "Contact",
               path: "#contact",
           }, 
       ]
   }else{
    navLinks = [
        {
            title: "O mnie",
            path: "#about",
        },
        {
            title: "Projekty",
            path: "#projects",
        },
        {
            title: "Kontakt",
            path: "#contact",
        }, 
    ]
   }
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 py-2 shadow">
        <div className="flex flex-wrap items-center justify-between mx-auto px-6 ">
            <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                <div>
                <img src="/images/githublogo.png"
                        alt="Bartosz Hrycaj"
                        className=" rounded-full h-14 mr-3 md:h-20"
                        />
                </div>
                
                        
               
            </Link>  
            <div className="mobile-menu block md:hidden">
            {
                !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        <Bars3Icon className="h-5 w-5"/>
                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        <XMarkIcon className="h-5 w-5"/>
                    </button>
                )
            }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
               <ul className="flex p-4 md:p-4 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link, index) => (
                            <li key={index} >
                                <NavLink href={link.path} title={link.title} scroll={false}/>
                            </li>
                        ))
                    }   
                </ul> 
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar
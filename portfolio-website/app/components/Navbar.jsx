"use client";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import { motion, AnimatePresence } from 'framer-motion';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

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

const Navbar = ({ currentLang, setCurrentLang, handleLang, lang }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);

            // Detect active section
            const sections = ['about', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (currentLang == "EN") {
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
    } else {
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

    const navbarVariants = {
        default: {
            backgroundColor: "rgba(18, 18, 18, 0.95)",
            backdropFilter: "blur(0px)",
            borderBottom: "1px solid transparent"
        },
        scrolled: {
            backgroundColor: "rgba(15, 15, 15, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        }
    };

    const logoVariants = {
        default: { scale: 1, rotate: 0 },
        hover: { scale: 1.05, rotate: 5 },
        tap: { scale: 0.95, rotate: -5 }
    };

    const menuIconVariants = {
        closed: { rotate: 0 },
        open: { rotate: 180 }
    };

    return (
        <>
            <motion.nav 
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                animate={scrolled ? "scrolled" : "default"}
                variants={navbarVariants}
                initial="default"
            >
                {/* bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
                
                <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-3">
                    {/* logo */}
                    <Link href={"/"} className="relative group">
                        <motion.div
                            variants={logoVariants}
                            initial="default"
                            whileHover="hover"
                            whileTap="tap"
                            className="relative"
                        >
                            {/* glow */}
                            <div className="absolute inset-0 bg-yellow-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                            
                            <img 
                                src="/images/githublogo.png"
                                alt="Bartosz Hrycaj"
                                className="relative rounded-full h-12 md:h-16 border-2 border-transparent group-hover:border-yellow-500/50 transition-all duration-300"
                            />
                            
                            {/* ringg */}
                            <div className="absolute inset-0 rounded-full border-2 border-yellow-500/30 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300" 
                                 style={{ animation: 'rotate 3s linear infinite' }} />
                        </motion.div>
                    </Link>

                    {/* Center - PC menu */}
                    <div className="menu hidden md:block">
                        <motion.div 
                            className="flex items-center bg-black/20 backdrop-blur-sm rounded-2xl px-2 py-2 border border-white/10"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <ul className="flex space-x-1">
                                {navLinks.map((link, index) => {
                                    const isActive = activeSection === link.path.replace('#', '');
                                    
                                    return (
                                        <motion.li 
                                            key={index}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + (index * 0.1), duration: 0.3 }}
                                        >
                                            <NavLink 
                                                href={link.path} 
                                                title={link.title} 
                                                isActive={isActive}
                                                index={index}
                                            />
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right side - Language buttons + Mobile menu */}
                    <div className="flex items-center space-x-3">
                        {/* Language toggle - PC */}
                        <div className="hidden md:block">
                            <ToggleButtonGroup
                                value={lang}
                                exclusive
                                onChange={handleLang}
                                className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10"
                            >
                                <ToggleButton
                                    value="EN"
                                    sx={{
                                        border: 'none',
                                        borderRadius: '0.75rem 0 0 0.75rem',
                                        padding: '8px 16px',
                                        '&.Mui-selected': {
                                            backgroundColor: '#f0bc0d',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#d9a80c',
                                            },
                                        },
                                        '&:hover': {
                                            backgroundColor: 'rgba(234, 179, 8, 0.1)',
                                        },
                                        color: 'rgba(255, 255, 255, 0.8)',
                                    }}
                                >
                                    <span className="fi fi-us w-5 h-5"></span>
                                </ToggleButton>
                                <ToggleButton
                                    value="PL"
                                    sx={{
                                        border: 'none',
                                        borderRadius: '0 0.75rem 0.75rem 0',
                                        padding: '8px 16px',
                                        '&.Mui-selected': {
                                            backgroundColor: '#f0bc0d',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#d9a80c',
                                            },
                                        },
                                        '&:hover': {
                                            backgroundColor: 'rgba(234, 179, 8, 0.1)',
                                        },
                                        color: 'rgba(255, 255, 255, 0.8)',
                                    }}
                                >
                                    <span className="fi fi-pl w-5 h-5"></span>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        {/* Language toggle - Mobile */}
                        <div className="block md:hidden">
                            <ToggleButtonGroup
                                value={lang}
                                exclusive
                                onChange={handleLang}
                                className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10"
                                size="small"
                            >
                                <ToggleButton
                                    value="EN"
                                    sx={{
                                        border: 'none',
                                        borderRadius: '0.75rem 0 0 0.75rem',
                                        padding: '6px 12px',
                                        minWidth: '40px',
                                        '&.Mui-selected': {
                                            backgroundColor: '#f0bc0d',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#d9a80c',
                                            },
                                        },
                                        '&:hover': {
                                            backgroundColor: 'rgba(234, 179, 8, 0.1)',
                                        },
                                        color: 'rgba(255, 255, 255, 0.8)',
                                    }}
                                >
                                    <span className="fi fi-us w-4 h-4"></span>
                                </ToggleButton>
                                <ToggleButton
                                    value="PL"
                                    sx={{
                                        border: 'none',
                                        borderRadius: '0 0.75rem 0.75rem 0',
                                        padding: '6px 12px',
                                        minWidth: '40px',
                                        '&.Mui-selected': {
                                            backgroundColor: '#f0bc0d',
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#d9a80c',
                                            },
                                        },
                                        '&:hover': {
                                            backgroundColor: 'rgba(234, 179, 8, 0.1)',
                                        },
                                        color: 'rgba(255, 255, 255, 0.8)',
                                    }}
                                >
                                    <span className="fi fi-pl w-4 h-4"></span>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        {/* Mobile menu button */}
                        <div className="mobile-menu block md:hidden">
                            <motion.button 
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                variants={menuIconVariants}
                                animate={navbarOpen ? "open" : "closed"}
                                className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-400 hover:text-white hover:border-white/50 transition-all duration-300 overflow-hidden group"
                            >
                                {/* glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <AnimatePresence mode="wait">
                                    {!navbarOpen ? (
                                        <motion.div
                                            key="bars"
                                            initial={{ opacity: 0, rotate: -90 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: 90 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Bars3Icon className="h-6 w-6 relative z-10" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="x"
                                            initial={{ opacity: 0, rotate: 90 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: -90 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <XMarkIcon className="h-6 w-6 relative z-10" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* mobile menu overlay */}
            <AnimatePresence>
                {navbarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            onClick={() => setNavbarOpen(false)}
                        />
                        
                        {/* content menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative mt-20 mx-6"
                        >
                            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl border border-yellow-500/20 overflow-hidden">
                                {/* glow (header) */}
                                <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                                
                                <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
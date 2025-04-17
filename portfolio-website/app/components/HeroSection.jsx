"use client";
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView } from "framer-motion"
import global_en from '../translations/en/en.json'
import global_pl from '../translations/pl/pl.json'

const HeroSection = (currentLang, setCurrentLang) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    const ENtranslation = global_en;
    const PLtranslation = global_pl;




    return (
        <section className="mt-6 md:mt-20">
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-12">
                <div className="hidden xl:block"></div>
                <div className="col-span-3 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center">

                        {currentLang.currentLang == "EN" ?
                            (<span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-300 ">
                                {ENtranslation.hero.header}
                                {""}
                            </span>) :
                            (<span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-300 ">
                                {PLtranslation.hero.header}
                                {""}
                            </span>)
                        }

                        <br></br>
                        <TypeAnimation
                            sequence={[

                                'Bartosz',
                                1000,
                                "IT engineer",
                                1000,
                                'Unity Dev',
                                1000,
                                'Web Dev',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{ backgroundColor: "[#121212]" }}
                        />
                    </h1>
                </div>
                <div className="xl:hidden"></div>
                <motion.div variants={animVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 1, delay: 0 }}
                    className="col-span-4 place-self-center mt-12 lg:mt-0">
                    <div className="shadow rounded-full bg-yellow-500 blur-2xl w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] md:w-[250px] md:h-[250px] absolute opacity-25 ml-25" />
                    <div className="shadow rounded-full bg-[#181810]           w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] md:w-[250px] md:h-[250px] relative mb-10">
                        <Image
                            src="/images/my-photo-full.jpg"
                            alt="hero image"
                            className="myface blur-none absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full border-4 border-primary-500 opacity-95"
                            width={250}
                            height={250}
                            priority
                        />
                    </div>
                </motion.div>
                <div className="xl:hidden"></div>
                <div className="col-span-3 place-self-center mt-8">

                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl text-center">
                        {currentLang.currentLang == "EN" ?
                            (
                                <>{ENtranslation.hero.body}
                                </>
                            ) :
                            (
                                <>{PLtranslation.hero.body}
                                </>
                            )}
                    </p>



                    <div className="mt-4 flex flex-col items-center">
                        <button className="hover:animate-wiggle px-1 py-1 w-full sm:w-fit rounded-xl bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-300 hover:bg-slate-800  mt-2">
                            <a href="/Bartosz_Hrycaj_CV.pdf" download="cv" className="block bg-[#121212] hover:bg-slate-800 rounded-xl px-8 py-2">

                                {currentLang.currentLang == "EN" ?
                                    (
                                        <>{ENtranslation.hero.button1}
                                        </>
                                    ) :
                                    (
                                        <>{PLtranslation.hero.button1}
                                        </>
                                    )}

                            </a>
                        </button>
                        {/* 
                        <button className="hover:animate-wiggle px-6 py-3 w-full mt-2 sm:w-fit rounded-xl bg-gradient-to-br from-primary-400 via-primary-500 to-secondary-500 hover:bg-slate-200 text-black font-bold">
                            {currentLang.currentLang == "EN" ?
                                (
                                    <>{ENtranslation.hero.button2}
                                    </>
                                ) :
                                (
                                    <>{PLtranslation.hero.button2}
                                    </>
                                )}
                        </button> 
                        */}

                    </div>
                </div>
                <div className="hidden xl:block"></div>
            </div>
        </section>
    )
}

export default HeroSection

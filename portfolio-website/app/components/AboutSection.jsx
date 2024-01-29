"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from './TabButton';
import { useTranslation } from 'react-i18next';

import global_en from '../translations/en/en.json'
import global_pl from '../translations/pl/pl.json'
const ENtranslation = global_en;
const PLtranslation = global_pl;

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
                    (Engineer IT)
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

const AboutSection = (currentLang, setCurrentLang) => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }


    return <section id="about" className="text-white mt-32">
        <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
            <Image priority src="/images/about-image.jpg" width={600} height={500} alt="Working Station" className="place-self-center rounded-xl" />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4 ">
                    {
                        currentLang.currentLang == "EN" ?
                            (
                                <>{ENtranslation.aboutme.header}
                                </>
                            ) :
                            (
                                <>{PLtranslation.aboutme.header}
                                </>
                            )
                    }
                </h2>
                <p className="text-base md:text-lg">
                    {
                        currentLang.currentLang == "EN" ?
                            (
                                <>{ENtranslation.aboutme.body}
                                </>
                            ) :
                            (
                                <>{PLtranslation.aboutme.body}
                                </>
                            )
                    }
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}>
                        {
                            currentLang.currentLang == "EN" ?
                                (
                                    <>{ENtranslation.aboutme.skills}
                                    </>
                                ) :
                                (
                                    <>{PLtranslation.aboutme.skills}
                                    </>
                                )
                        }
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}>
                        {
                            currentLang.currentLang == "EN" ?
                                (
                                    <>{ENtranslation.aboutme.education}
                                    </>
                                ) :
                                (
                                    <>{PLtranslation.aboutme.education}
                                    </>
                                )
                        }
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("certifications")}
                        active={tab === "certifications"}>
                         {
                        currentLang.currentLang == "EN" ?
                            (
                                <>{ENtranslation.aboutme.certifications}
                                </>
                            ) :
                            (
                                <>{PLtranslation.aboutme.certifications}
                                </>
                            )
                    }
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>


}

export default AboutSection
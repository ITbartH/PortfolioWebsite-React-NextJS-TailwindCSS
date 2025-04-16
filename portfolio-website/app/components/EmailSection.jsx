"use client";
import React, { useState } from "react";
import GitHubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link"
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";

import global_en from '../translations/en/en.json'
import global_pl from '../translations/pl/pl.json'
const ENtranslation = global_en;
const PLtranslation = global_pl;

const EmailSection = (currentLang, setCurrentLang) => {

    const [isAlertVisible, setIsAlertVisible] = React.useState(false);

    const showInfo = () => {
        navigator.clipboard.writeText("hrycaj.bartosz@gmail.com");

        setIsAlertVisible(true);
    }



    function timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }

    const [buttonText, setButtonText] = useState('Copy');

    if (isAlertVisible) {
        if (currentLang.currentLang == "EN") {
            if (buttonText !== "Copied!") {
                setButtonText("Copied!")
            }
        } else if (currentLang.currentLang == "PL") {
            if (buttonText !== "Skopiowano!") {
                setButtonText("Skopiowano!")
            }
        }

    } else {
        if (currentLang.currentLang == "EN") {
            if (buttonText !== "Copy") {
                setButtonText("Copy")
            }
        } else if (currentLang.currentLang == "PL") {
            if (buttonText !== "Kopiuj") {
                setButtonText("Kopiuj")
            }
        }
    }
    return (
        <section className="grid md:grid-cols-2 my-20 md:my-32 py-14 gap-4 relative">

            <div className="">
                <h5 className="text-xl font-bold text-white my-2">
                    {
                        currentLang.currentLang == "EN" ?
                            (

                                <>
                                    {ENtranslation.contact.header}
                                </>
                            ) :
                            (
                                <>
                                    {PLtranslation.contact.header}
                                </>
                            )
                    }
                </h5>
                <p className="text-[#adb7be] mb-4 p-2">
                    {" "}
                    {
                        currentLang.currentLang == "EN" ?
                            (

                                <>Thank you for visiting my website! <br></br>
                                    {ENtranslation.contact.body}
                                </>
                            ) :
                            (
                                <>Dziękuję za odwiedzenie mojej strony! <br></br>
                                    {PLtranslation.contact.body}
                                </>
                            )
                    }

                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/ITbartH" target="_blank">
                        <Image src={GitHubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/bartosz-hrycaj" target="_blank">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>

            <div>
                <div className="mb-6 flex flex-col justify-center items-center transform border xl:mx-32 py-4 rounded-2xl mt-10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                    <h5 className="text-xl font-bold text-white my-2">
                        {
                            currentLang.currentLang == "EN" ?
                                (
                                    <>{ENtranslation.contact.contactmsg}
                                    </>
                                ) :
                                (
                                    <>{PLtranslation.contact.contactmsg}
                                    </>
                                )
                        }

                    </h5>

                    <div className="flex flex-col justify-center items-center p-2 lg:flex-row">
                        <input className="text-center bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-auto p-2.5" type="email" id="email" required placeholder="hrycaj.bartosz@gmail.com" disabled />
                        <button onClick={showInfo} type="submit" className="mt-2 lg:mt-0 lg:ml-2  float-left bg-gradient-to-br from-yellow-500 via-yellow-500 to-yellow-300 hover:from-yellow-600 hover:via-yellow-600 hover:to-yellow-400 text-[#000000] font-medium py-2.5 px-5 rounded-lg ">{buttonText}</button>
                    </div>
                    <span>
                        {isAlertVisible && currentLang.currentLang == "EN" && <TypeAnimation
                            sequence={[

                                'Email copied successfully!',
                                3000

                            ]}
                            wrapper="span"
                            speed={60}
                            repeat={1}
                        />}
                        {isAlertVisible && currentLang.currentLang == "PL" && <TypeAnimation
                            sequence={[

                                'Email skopiowany pomyślnie!',
                                3000

                            ]}
                            wrapper="span"
                            speed={60}
                            repeat={1}
                        />}
                    </span>
                </div>
            </div>



        </section>
    )
}

export default EmailSection
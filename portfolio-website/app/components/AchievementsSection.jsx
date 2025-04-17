import React from 'react'
import dynamic from 'next/dynamic';

import global_en from '../translations/en/en.json'
import global_pl from '../translations/pl/pl.json'
const ENtranslation = global_en;
const PLtranslation = global_pl;

let achievementsList = [
  {
    metric: "Projects",
    value: "10+",
  },
  {
    metric: "Certifications",
    value: "2+",
  },
  {
    metric: "Years",
    value: "3+",
  }
]


const AchievementsSection = (currentLang, setCurrentLang) => {
  if (currentLang.currentLang == "EN") {

    achievementsList = [
      {
        metric: ENtranslation.achievements.projects.toString(),
        value: "10+",
      },
      {
        metric: ENtranslation.achievements.certifications.toString(),
        value: "2+",
      },
      {
        metric: ENtranslation.achievements.years.toString(),
        value: "3+",
      }
    ]
  } else {
    achievementsList = [
      {
        metric: PLtranslation.achievements.projects.toString(),
        value: "10+",
      },
      {
        metric: PLtranslation.achievements.certifications.toString(),
        value: "2+",
      },
      {
        metric: PLtranslation.achievements.years.toString(),
        value: "3+",
      }
    ]
  }
  return (
    <section id="about" className="py-8 sm:py-16 sm:px-10" >
      <div className="shadow-xl border-[#33353f] border rounded-md py-4 md:py-8 flex flex-row content-center justify-between px-18">
        {achievementsList.map((achievement, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center pl-2 pr-2 md:pl-4 md:pr-4 lg:pl-16 lg:pr-16">
              <h2 className="text-white text-lg md:text-4xl font-bold">{achievement.value}</h2>
              <p className="text-[#adb7be] text-xs md:text-xl text-base font-bold">{achievement.metric}</p>
            </div>
          );
        })
        }
      </div>
    </section>

  );
};

export default AchievementsSection
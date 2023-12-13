import React from 'react'
import dynamic from 'next/dynamic';


const achievementsList = [
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
const AchievementsSection = () => {
  return (
    <section id="about" className="py-8 sm:py-16 sm:px-10" >
      <div className="shadow-xl border-[#33353f] border rounded-md py-8 flex flex-row content-center justify-between px-14">
      {achievementsList.map((achievement, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center">
                <h2 className="text-white text-4xl font-bold">{achievement.value}</h2>
                <p className="text-[#adb7be] text-base font-bold">{achievement.metric}</p>
                </div>
            );
          })
      }
      </div>
    </section>
    
  );
};

export default AchievementsSection
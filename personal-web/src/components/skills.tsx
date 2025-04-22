"use client";

import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiNodedotjs, SiExpress, SiDocker, SiGit,
  SiMysql, SiBootstrap, SiBackendless
} from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const skills = [
  { icon: <SiHtml5 size={32} />, label: "HTML" },
  { icon: <SiCss3 size={32} />, label: "CSS" },
  { icon: <SiJavascript size={32} />, label: "JavaScript" },
  { icon: <SiReact size={32} />, label: "React" },
  { icon: <SiBootstrap size={32} />, label: "Bootstrap" },
  { icon: <SiNodedotjs size={32} />, label: "Node.js" },
  { icon: <SiExpress size={32} />, label: "Express" },
  { icon: <SiMysql size={32} />, label: "MySQL" },
  { icon: <SiBackendless size={32} />, label: "Backendless" },
  { icon: <SiDocker size={32} />, label: "Docker" },
  { icon: <SiGit size={32} />, label: "Git" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 w-full bg-blue-50 py-16 px-6 sm:px-16 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center">Skills</h2>

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            }}
            >
            {skills.map((skill, index) => (
                <SwiperSlide key={index}>
                <SkillBox icon={skill.icon} label={skill.label} />
                </SwiperSlide>
            ))}
        </Swiper>

      </div>
    </section>
  );
}

type SkillProps = {
  icon: React.ReactNode;
  label: string;
};

function SkillBox({ icon, label }: SkillProps) {
  return (
    <div className="flex flex-col items-center justify-center 
                    p-4 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 
                    bg-white border rounded-lg shadow hover:shadow-md transition mx-auto">
      <div className="text-blue-600 text-3xl sm:text-4xl md:text-5xl">
        {icon}
      </div>
      <span className="mt-2 text-sm sm:text-base text-gray-700 text-center">
        {label}
      </span>
    </div>
  );
}

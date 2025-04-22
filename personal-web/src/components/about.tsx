"use client";


import { SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiPython, SiPhp, SiHtml5, SiCss3, SiLaravel, SiMysql } from "react-icons/si";
import { FaClock, FaEye, FaComments } from "react-icons/fa"

export default function About() {
    return (
        <section id="about" className="scroll-mt-20 w-full bg-gray-50 py-16 px-6 sm:px-16 text-gray-800">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
                
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-center">About Me</h2>

                {/* 1. Brief Bio */}
                <div className="space-y-4 text-center sm:text-left">
                    <h3 className="text-xl font-semibold">Brief Bio</h3>
                    <p className="max-w-4xl mx-auto sm:mx-0">
                        Im Muhamad Fauzan Siswantoro, a Full-Stack Web Developer passionate about crafting efficient and elegant digital solutions.
                        With a background in software development and a strong interest in user-centric design, I enjoy working across the stack to
                        build seamless, scalable applications. Over the years, I’ve collaborated with cross-functional teams and contributed to
                        diverse projects in both freelance and company environments.
                    </p>
                </div>

                {/* 2. Core Skills */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-center sm:text-left">Core Skills</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-3xl mx-auto sm:mx-0">
                        <Skill icon={<SiJavascript size={32} />} label="JavaScript" />
                        <Skill icon={<SiReact size={32} />} label="React" />
                        <Skill icon={<SiNextdotjs size={32} />} label="Next.js" />
                        <Skill icon={<SiTailwindcss size={32} />} label="Tailwind" />
                        <Skill icon={<SiPython size={32} />} label="Python" />
                        <Skill icon={<SiPhp size={32} />} label="PHP" />
                        <Skill icon={<SiHtml5 size={32} />} label="HTML" />
                        <Skill icon={<SiCss3 size={32} />} label="CSS" />
                        <Skill icon={<SiLaravel size={32} />} label="Laravel" />
                        <Skill icon={<SiMysql size={32} />} label="SQL" />
                    </div>
                </div>

                {/* 3. Key Values */}
                <div className="space-y-4 text-center sm:text-left">
                    <h3 className="text-xl font-semibold">Key Values</h3>
                    <ul className="max-w-2xl mx-auto sm:mx-0 space-y-3">
                        <li className="flex items-start gap-3">
                            <FaClock className="mt-1 text-blue-600" />
                            <span><strong>Timeliness:</strong> I believe in meeting deadlines and delivering work on schedule.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaEye className="mt-1 text-blue-600" />
                            <span><strong>Attention to Detail:</strong> I care deeply about clean code and pixel-perfect UI.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaComments className="mt-1 text-blue-600" />
                            <span><strong>Clear Communication:</strong> Whether in code or conversation, clarity is key to collaboration.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

type SkillProps = {
    icon: React.ReactNode;
    label: string;
};

function Skill({ icon, label }: SkillProps) {
    return (
        <div className="flex flex-col items-center justify-center 
                        p-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
                        bg-white border rounded-lg shadow hover:shadow-md transition">
            <div className="text-blue-600 text-2xl sm:text-3xl md:text-4xl">
                {icon}
            </div>
            <span className="mt-2 text-sm sm:text-base md:text-lg text-gray-700">
                {label}
            </span>
        </div>
    );
}



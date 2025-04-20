"use client";


import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiAngular,
    SiNodedotjs, SiExpress, SiDjango, SiRubyonrails,
    SiDocker, SiGit, SiJenkins, SiAmazon, SiGithubactions,
    SiMysql,
    SiBootstrap,
    SiBackendless
} from "react-icons/si";

export default function Skills() {
    return (
        <section id="skills" className="w-full bg-gray-50 py-16 px-6 sm:px-16 text-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col space-y-12">

                <h2 className="text-3xl font-bold text-center">Skills</h2>

                {/* Front-End Skills */}
                <SkillCategory title="Front-End Skills" skills={[
                    { icon: <SiHtml5 size={32} />, label: "HTML" },
                    { icon: <SiCss3 size={32} />, label: "CSS" },
                    { icon: <SiJavascript size={32} />, label: "JavaScript" },
                    { icon: <SiReact size={32} />, label: "React" },
                    { icon: <SiBootstrap size={32} />, label: "Bootstrap" },
                ]} />

                {/* Back-End Skills */}
                <SkillCategory title="Back-End Skills" skills={[
                    { icon: <SiNodedotjs size={32} />, label: "Node.js" },
                    { icon: <SiExpress size={32} />, label: "Express" },
                    { icon: <SiMysql size={32} />, label: "MySQL" },
                    { icon: <SiBackendless size={32} />, label: "Backendless" },
                ]} />

                {/* DevOps & Tools */}
                <SkillCategory title="DevOps & Tools" skills={[
                    { icon: <SiDocker size={32} />, label: "Docker" },
                    { icon: <SiGit size={32} />, label: "Git" },
                ]} />
            </div>
        </section>
    );
}

type SkillProps = {
    icon: React.ReactNode;
    label: string;
};

function SkillCategory({ title, skills }: { title: string, skills: SkillProps[] }) {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center sm:text-left">{title}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                    <SkillBox key={index} icon={skill.icon} label={skill.label} />
                ))}
            </div>
        </div>
    );
}

function SkillBox({ icon, label }: SkillProps) {
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

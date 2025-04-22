"use client";

import Image from "next/image";

export default function Experience() {
    const experiences = [
        {
            title: "Junior IT Business Analyst",
            company: "PT Andromedia",
            timeline: "2022 - 2023",
            image: "/company-logos/andromedia-logo.webp", // Example logo path
            responsibilities: [
                "Analyzed business processes and helped define requirements for technical systems.",
                "Create system documentation",
                "Collaborated with teams to deliver scalable web applications."
            ]
        },
        {
            title: "IT Rollout Analyst",
            company: "PT Astra Graphia Information Technology",
            timeline: "2023 - 2024",
            image: "/company-logos/agit-logo.png", // Example logo path
            responsibilities: [
                "Analyzed business processes and helped define requirements for technical systems.",
                "Provided technical support for implementation of enterprise systems.",
                "Ensured smooth integration of systems across different business units."
            ]
        },
        {
            title: "Function Analyst",
            company: "Siloam Hospital Group",
            timeline: "2024 - Present",
            image: "/company-logos/siloam-logo.png", // Example logo path
            responsibilities: [
                "Analyzed business workflows and proposed technical solutions for healthcare systems.",
                "Worked on the optimization and integration of hospital management software.",
                "Led the deployment of critical systems across different hospital branches."
            ]
        }
    ];

    return (
        <section id="experience" className="scroll-mt-20 w-full py-16 px-6 sm:px-16 bg-gray-50 text-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col space-y-12">
                <h2 className="text-3xl font-bold text-center">Experience</h2>

                {/* Experience Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                            <div className="flex flex-col sm:flex-row p-6">
                                {/* Image */}
                                <div className="flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 sm:mb-0">
                                    <Image
                                        src={exp.image}
                                        alt={`${exp.company} logo`}
                                        width={96}
                                        height={96}
                                        className="object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="ml-0 sm:ml-6 flex flex-col justify-between">
                                    <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
                                    <p className="text-md text-gray-600">{exp.company}</p>
                                    <p className="text-sm text-gray-500">{exp.timeline}</p>
                                    <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

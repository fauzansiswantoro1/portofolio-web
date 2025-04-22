"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Astra Motor Intergrated System (ASSIST)",
    description: "Part of Rollout Analyst Team for ASSIST App. managing and executing projects for the implementation or launch of a new system, product, or service",
    image: "/portofolio/project1.jpg",
    link: "/project1", 
  },
  {
    title: "Customer Relationship Portal",
    description: "Being part of the project development team for the Customer Relationship Portal website as an IT business analyst. Creating documentation and conductiong system testing.",
    image: "/portofolio/project2.png",
    link: "/project2",
  },
  {
    title: "Website PPID Balitbang Jawa Timur",
    description: "Designing and implementing the UI/UX for the Public Information and Documentation Officer (PPID) website of the Research and Development Agency of East Java Province",
    image: "/portofolio/project3.jpg",
    link: "/project3",
  },
  {
    title: "Hospital Information System",
    description: "Responsible for analyzing user needs and evaluating their suitability with the new HIS system. Designing solution to bridge the gap between user needs and the new system.",
    image: "/portofolio/project4.jpg",
    link: "/project4",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-20 px-6 py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">My Projects</h2>
        

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative w-full h-48 hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg text-blue-500">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded shadow hover:bg-gray-800 transition"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

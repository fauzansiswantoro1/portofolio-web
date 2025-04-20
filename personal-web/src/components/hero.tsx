"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full min-h-[80vh] flex flex-col-reverse sm:flex-row items-center justify-between px-6 sm:px-16 py-10 bg-white">
            
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center sm:text-left">
                <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                    Muhamad Fauzan Siswantoro
                </h1>
                <h2 className="text-xl sm:text-2xl text-gray-600 font-medium mb-4">
                    Full-Stack Web Developer
                </h2>
                <p className="text-gray-700 mb-6 max-w-lg mx-auto sm:mx-0">
                    I specialize in building high-quality web applications from front-end design to back-end functionality.
                    Passionate about clean code, modern frameworks, and creating seamless user experiences.
                </p>

                <div className="flex justify-center sm:justify-start gap-4">
                    <Link
                        href="#portfolio"
                        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        View Portfolio
                    </Link>
                    <Link
                        href="#contact"
                        className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md hover:bg-blue-50 transition"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex-1 flex justify-center mb-8 sm:mb-0">
                <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] relative rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="/photo-fauzan.jpeg" // Replace with your image path
                        alt="Muhamad Fauzan Siswantoro"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

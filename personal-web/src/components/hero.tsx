"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full min-h-[80vh] flex items-center justify-center px-6 py-10 bg-white">
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 max-w-screen-lg w-full">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-xl text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-3">
                Muhamad Fauzan Siswantoro
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600 font-medium mb-5">
                Full-Stack Web Developer
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
                I specialize in building high-quality web applications from front-end design to back-end functionality.
                Passionate about clean code, modern frameworks, and creating seamless user experiences.
            </p>

            <div className="flex justify-center sm:justify-start gap-5">
                <Link
                    href="#portfolio"
                    className="bg-blue-600 text-white px-6 py-3 text-lg rounded-md hover:bg-blue-700 transition"
                >
                    View Portfolio
                </Link>
                <Link
                    href="#contact"
                    className="border border-blue-600 text-blue-600 px-6 py-3 text-lg rounded-md hover:bg-blue-50 transition"
                >
                    Contact Me
                </Link>
            </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex-shrink-0">
            <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] relative rounded-full overflow-hidden shadow-lg">
                <Image
                    src="/photo-fauzan.jpeg"
                    alt="Muhamad Fauzan Siswantoro"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    </div>
</section>



    );
}

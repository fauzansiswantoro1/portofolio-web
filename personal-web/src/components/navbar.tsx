"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 h-[70px] w-screen bg-gradient-to-b from-teal-500 to-blue-500 max-sm:px-5 flex items-center justify-between px-10 shadow-2xl">
            <Link href="/" className="text-lg font-semibold text-white">Personal Website</Link>

            {/* Desktop Nav */}
            <div className="text-white hidden sm:flex items-center gap-6 h-[30px] absolute left-1/2 transform -translate-x-1/2 font-bold">
                <Link className="hover:text-blue-200" href="/#about">About</Link>
                <Link className="hover:text-blue-200" href="/#skills">Skills</Link>
                <Link className="hover:text-blue-200" href="/#portfolio">Portfolio</Link>
                <Link className="hover:text-blue-200" href="/#experience">Experience</Link>
                <Link className="hover:text-blue-200" href="/#testimonials">Testimonials</Link>
                <Link className="hover:text-blue-200" href="/#contact">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="text-white sm:hidden absolute top-[60px] left-0 w-full bg-gray-700 px-6 py-4 flex flex-col gap-4 shadow-md">
                    <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/#skills" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link href="/#portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <Link href="/#experience" onClick={() => setIsOpen(false)}>Experience</Link>
                    <Link href="/#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
                    <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </div>
    );
}

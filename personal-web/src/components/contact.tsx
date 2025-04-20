"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="w-full bg-gray-50 py-16 px-6 sm:px-16 text-gray-800">
            <div className="max-w-4xl mx-auto space-y-12 text-center sm:text-left">
                <h2 className="text-3xl font-bold text-center">Get in Touch</h2>

                {/* Contact Form */}
                <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all shadow"
                    >
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="space-y-4 pt-10">
                    

                    {/* Social Links */}
                    <div className="flex justify-center sm:justify-start gap-6 text-2xl text-blue-600">
                        <a
                            href="https://www.linkedin.com/in/muhamad-fauzan-siswantoro-798a60207/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-800 transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/fauzansiswantoro1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-800 transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:fauzansiswantoro@gmail.com"
                            className="hover:text-red-600 transition"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

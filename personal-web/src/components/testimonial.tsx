"use client";

import Image from "next/image";

const testimonials = [
    {
        name: "Dianti Anggraeni",
        quote: "Fauzan’s work exceeded our expectations! Great communication and leadership skills, proffesional and detail oriented.",
        image: "/client-photo/dianti.jpeg", 
    },
    {
        name: "Luthfi Ardyan",
        quote: "Very professional and detail-oriented. Easy to talk to and easy to collaborate with,  Highly recommended for IT Implementator.",
        image: "/client-photo/luthfi.jpeg",
    },
    {
        name: "Vincent Valiant Coa",
        quote: "Great communication and dedication. easy to collaborate with, Highly recommended for function analyst!",
        image: "/client-photo/vincent-valiant.jpeg",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="w-full bg-white py-16 px-6 sm:px-16 text-gray-800">
            <div className="max-w-6xl mx-auto text-center space-y-12">
                <h2 className="text-3xl font-bold">Client Testimonials</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 relative rounded-full overflow-hidden border shadow">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-gray-600 italic text-sm">"{t.quote}"</p>
                                <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

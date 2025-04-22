"use client";


import ContactForm from "./contact-form";
import ContactInfoCard from "./contact-info-card";

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-20 w-full bg-gray-50 py-16 px-6 sm:px-16 text-gray-800">
            <div className="max-w-4xl mx-auto space-y-12 text-center sm:text-left">
                <h2 className="text-3xl font-bold">Get in Touch</h2>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                   
                    <div className="w-full bg-gray-400 p-6 rounded-lg shadow-md">
                        <ContactInfoCard />
                    </div>

                    
                    <div className="w-full bg-gray-400 p-6 rounded-lg shadow-md">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

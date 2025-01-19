"use client";

import React from 'react';
import BookingForm from "@/components/BookingForm";

const NfpaPage: React.FC = () => {
    return (
        <div className="p-6 d-fl">
            <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
                <h1 className="text-4xl font-bold mb-4">NFPA Safety Information</h1>
                <p className="text-lg mb-6">
                    Welcome to the NFPA Safety Information page. Here you will find important safety guidelines and resources provided by the National Fire Protection Association (NFPA).
                </p>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Fire Safety Tips</h2>
                    <ul className="list-disc ml-6">
                        <li>Install smoke alarms on every level of your home.</li>
                        <li>Test smoke alarms every month.</li>
                        <li>Plan and practice a home fire escape plan.</li>
                        <li>Keep flammable items at least three feet away from anything that gets hot.</li>
                        <li>Never leave cooking unattended.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Resources</h2>
                    <ul className="list-disc ml-6">
                        <li><a href="https://www.nfpa.org/Public-Education/Staying-safe" target="_blank" rel="noopener noreferrer">NFPA Public Education</a></li>
                        <li><a href="https://www.nfpa.org/Training-and-Events/By-topic/Fire-Protection" target="_blank" rel="noopener noreferrer">NFPA Fire Protection Training</a></li>
                        <li><a href="https://www.nfpa.org/Codes-and-Standards" target="_blank" rel="noopener noreferrer">NFPA Codes and Standards</a></li>
                    </ul>
                </section>
            </div>
            <div className="w-1/2 pl-4">
                <BookingForm serviceName="NFPA Safety Information" />
            </div>
        </div>
    );
};

export default NfpaPage;
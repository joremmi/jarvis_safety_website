"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";

const HazmatPage: React.FC = () => {
    return (
        <div className="p-6 d-fl">
            <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
                <h1 className="text-4xl font-bold mb-4">Hazardous Materials Safety</h1>
                <p className="text-lg mb-6">Welcome to the Hazardous Materials Safety page. Here you will find information and resources to help you handle hazardous materials safely.</p>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">What are Hazardous Materials?</h2>
                    <p className="mb-4">Hazardous materials are substances that pose a risk to health, property, or the environment. They can be chemical, biological, radiological, or physical in nature.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Safety Guidelines</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Always wear appropriate personal protective equipment (PPE).</li>
                        <li>Follow proper storage and handling procedures.</li>
                        <li>Be aware of emergency procedures and evacuation routes.</li>
                        <li>Report any spills or incidents immediately.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Resources</h2>
                    <p className="mb-2">For more information, please refer to the following resources:</p>
                    <ul className="list-disc list-inside">
                        <li><a href="https://www.osha.gov/hazardous-materials" target="_blank" rel="noopener noreferrer">OSHA Hazardous Materials</a></li>
                        <li><a href="https://www.epa.gov/hazardous-waste" target="_blank" rel="noopener noreferrer">EPA Hazardous Waste</a></li>
                        <li><a href="https://www.cdc.gov/niosh/topics/hazmat/" target="_blank" rel="noopener noreferrer">CDC NIOSH Hazmat</a></li>
                    </ul>
                </section>
            </div>
            <div className="w-1/2 pl-4">
                <BookingForm serviceName="Hazardous Materials Safety" />
            </div>
        </div>
    );
};

export default HazmatPage;
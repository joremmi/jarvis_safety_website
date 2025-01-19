"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";

const ISOCompliancePage: React.FC = () => {
    return (
        <div className="p-6 d-fl">
            <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
                <h1 className="text-4xl font-bold mb-4">ISO Compliance</h1>
                <p className="text-lg mb-6">Welcome to the ISO Compliance page. Here you will find information about our compliance with ISO standards.</p>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">ISO 9001</h2>
                    <p className="text-lg mb-4">Our company is ISO 9001 certified, ensuring that our quality management systems meet the highest standards.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">ISO 27001</h2>
                    <p className="text-lg mb-4">We are also ISO 27001 certified, which demonstrates our commitment to information security management.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">ISO 14001</h2>
                    <p className="text-lg mb-4">Our environmental management systems are certified under ISO 14001, reflecting our dedication to environmental responsibility.</p>
                </section>
            </div>
            <div className="w-1/2 pl-4">
                <BookingForm serviceName="ISO Compliance" />
            </div>
        </div>
    );
};

export default ISOCompliancePage;
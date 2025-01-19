"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";

const SsowsPage: React.FC = () => {
    return (
        <div className="p-6 d-fl">
            <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
                <h1 className="text-4xl font-bold mb-4">Safe Systems of Work (SSOWS)</h1>
                <p className="text-lg mb-6">
                    Welcome to the Safe Systems of Work (SSOWS) page. Our services ensure that your organization follows the best practices for safety and compliance.
                </p>
                <ul className="list-disc ml-6">
                    <li>Development of safe work procedures</li>
                    <li>Risk assessments</li>
                    <li>Training and implementation</li>
                </ul>
            </div>
            <div className="w-1/2 pl-4">
                <BookingForm serviceName="SSOWS" />
            </div>
        </div>
    );
};

export default SsowsPage;
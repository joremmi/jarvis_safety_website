"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";

const TemplatesPage: React.FC = () => {
    return (
        <div className="p-6 d-fl">
            <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
                <h1 className="text-4xl font-bold mb-4">Templates</h1>
                <p className="text-lg mb-6">
                    Welcome to the templates page. Here you can find various templates for your projects.
                </p>
                <ul className="list-disc ml-6">
                    <li>Project templates</li>
                    <li>Design templates</li>
                    <li>Documentation templates</li>
                </ul>
            </div>
            <div className="w-1/2 pl-4">
                <BookingForm serviceName="Templates" />
            </div>
        </div>
    );
};

export default TemplatesPage;
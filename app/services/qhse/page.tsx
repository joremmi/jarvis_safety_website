"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";

const QHSEPage = () => {
  return (
    <div className="p-6 d-fl">
      <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
        <h1 className="text-4xl font-bold mb-4">QHSE Trainings</h1>
        <p className="text-lg mb-6">
          We provide comprehensive QHSE (Quality, Health, Safety, and Environment) training programs designed to enhance your team’s skills and ensure compliance with industry standards.
        </p>
        <ul className="list-disc ml-6">
          <li>Workplace safety training</li>
          <li>Environmental compliance</li>
          <li>Quality management systems</li>
        </ul>
      </div>
      <div className="w-1/2 pl-4">
        <BookingForm serviceName="QHSE Trainings" />
      </div>
    </div>
  );
};

export default QHSEPage;
"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";

const PlantExamsPage = () => {
  return (
    <div className="p-6 d-fl">
      <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
        <h1 className="text-4xl font-bold mb-4">Plant Examinations</h1>
        <p className="text-lg mb-6">
          Our plant examination services help ensure your machinery and equipment are safe, reliable, and compliant with regulations.
        </p>
        <ul className="list-disc ml-6">
          <li>Inspection and testing of equipment</li>
          <li>Risk assessments</li>
          <li>Regulatory compliance verification</li>
        </ul>
      </div>
      <div className="w-1/2 pl-4">
        <BookingForm serviceName="Plant Examinations" />
      </div>
    </div>
  );
};

export default PlantExamsPage;
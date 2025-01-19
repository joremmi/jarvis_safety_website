"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";

const MedicalExamsPage = () => {
  return (
    <div className="p-6 d-fl">
      <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
        <h1 className="text-4xl font-bold mb-4">Medical Examinations</h1>
        <p className="text-lg mb-6">
          We provide professional medical examination services to ensure your workforce is fit for duty and complies with industry requirements.
        </p>
        <ul className="list-disc ml-6">
          <li>Pre-employment medicals</li>
          <li>Periodic health checks</li>
          <li>Specialized examinations</li>
        </ul>
      </div>
      <div className="w-1/2 pl-4">
        <BookingForm serviceName="Medical Examinations" />
      </div>
    </div>
  );
};

export default MedicalExamsPage;
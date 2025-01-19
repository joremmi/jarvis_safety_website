"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";

const StandardizationsPage = () => {
  return (
    <div className="p-6 d-fl">
      <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
        <h1 className="text-4xl font-bold mb-4">Standardizations</h1>
        <p className="text-lg mb-6">
          We assist organizations in implementing and adhering to internationally recognized health, safety, and quality standards.
        </p>
        <ul className="list-disc ml-6">
          <li>ISO certifications</li>
          <li>Policy development</li>
          <li>System implementation</li>
        </ul>
      </div>
      <div className="w-1/2 pl-4">
        <BookingForm serviceName="Standardizations" />
      </div>
    </div>
  );
};

export default StandardizationsPage;
"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";

const AuditsPage = () => {
  return (
    <div className="p-6 d-fl">
      <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
        <h1 className="text-4xl font-bold mb-4">Audits</h1>
        <p className="text-lg mb-6">
          Our auditing services ensure that your organization meets the required health and safety standards. We help identify gaps and recommend improvements.
        </p>
        <ul className="list-disc ml-6">
          <li>Health and safety audits</li>
          <li>Compliance assessments</li>
          <li>Gap analysis and reporting</li>
        </ul>
      </div>
      <div className="w-1/2 pl-4">
        <BookingForm serviceName="Audits" />
      </div>
    </div>
  );
};

export default AuditsPage;
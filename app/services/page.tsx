// app/services/page.tsx

"use client";

import React, { useState } from "react";
import ServiceSection from "../../components/Service";
import Sidebar from "@/components/Sidebar";

const ServicesPage = () => {
  const categories = [
    {
      title: "Training Services",
      services: [
        {
          title: "QHSE Trainings",
          description: "Comprehensive Quality, Health, Safety, and Environmental trainings to ensure workplace safety and compliance.",
          link: "/services/qhse",
        },
        {
          title: "Emergency Preparedness",
          description: "Comprehensive planning and training to handle emergencies effectively and safeguard lives and assets.",
          link: "/services/emergency-preparedness",
        },
      ],
    },
    {
      title: "Audit Services",
      services: [
        {
          title: "Audits",
          description: "Thorough safety audits to identify risks and recommend actionable solutions.",
          link: "/services/audits",
        },
        {
          title: "Audit, Inspection & Risk Assessment Templates",
          description: "Customizable templates for audits, inspections, risk assessments, PTW, LOTO, and more.",
          link: "/services/templates",
        },
        {
          title: "Plant Examinations",
          description: "Detailed plant examinations to ensure compliance with safety regulations.",
          link: "/services/plant-exams",
        },
      ],
    },
    {
      title: "Policy Services",
      services: [
        {
          title: "Safety, Fire, Energy & Environmental Policy",
          description: "Development of tailored policies to enhance safety, fire prevention, energy efficiency, and environmental sustainability.",
          link: "/services/policy",
        },
        {
          title: "Safe Systems of Work (SSOWs)",
          description: "Implementation of safe systems of work to minimize risks and ensure regulatory compliance.",
          link: "/services/ssows",
        },
      ],
    },
    {
      title: "Compliance Services",
      backgroundImage: "/images/compliance-bg.jpg",
      services: [
        {
          title: "ISO Compliance Guides",
          description: "Step-by-step guidance on ISO compliance for standards like ISO 9001, ISO 14001, and ISO 45001.",
          link: "/services/iso-compliance",
        },
        {
          title: "NFPA Standards",
          description: "Expert advice on meeting National Fire Protection Association (NFPA) standards for fire safety and prevention.",
          link: "/services/nfpa",
        },
        {
          title: "DGR (Dangerous Goods Regulations)",
          description: "Consultancy on handling, transporting, and managing dangerous goods in compliance with IATA DGR standards.",
          link: "/services/dgr",
        },
      ],
    },
    {
      title: "Hazardous Material Services",
      services: [
        {
          title: "HAZMAT Services",
          description: "Specialized support for handling hazardous materials, including risk assessments and mitigation strategies.",
          link: "/services/hazmat",
        },
      ],
    },
    {
      title: "Standardization Services",
      services: [
        {
          title: "Standardizations",
          description: "Expert guidance on safety standardizations to meet industry benchmarks.",
          link: "/services/standardizations",
        },
      ],
    },
    {
      title: "Medical Services",
      backgroundImage: "/images/medical-bg.jpg",
      services: [
        {
          title: "Medical Examinations",
          description: "Health checks and medical examinations for your workforce.",
          link: "/services/medical-exams",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const sidebarItems = categories.map((category) => ({
    title: category.title,
    onClick: () => setSelectedCategory(category),
  }));

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-screen bg-white border-r shadow-sm">
        <Sidebar items={sidebarItems} />
      </aside>
      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">
        <h1 className="text-4xl font-bold text-white mb-8">
          {selectedCategory.title}
        </h1>

        {/* Direct rendering of service sections */}
        {selectedCategory.services.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.title}
            description={service.description}
            link={service.link}
            category={selectedCategory.title} // Pass the category here
          />
        ))}

      </main>
    </div>
  );
};

export default ServicesPage;

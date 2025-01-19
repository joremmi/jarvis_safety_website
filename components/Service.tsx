import React from "react";

interface ServiceProps {
  title: string;
  description: string;
  link: string;
  category: string;
}

const categoryImages: { [key: string]: string } = {
  Training: "/images/training-bg.jpg",
  Audit: "/images/audit-bg.jpg",
  Policy: "/images/policy-bg.jpg",
  Compliance: "/images/compliance-bg.jpg",
  Hazmat: "/images/hazmat-bg.jpg",
  Standardization: "/images/standardization-bg.jpg",
  Medical: "/images/medical-bg.jpg",
};

const Service = ({ title, description, link, category }: ServiceProps) => {
  const backgroundImage = categoryImages[category] || "/images/default-bg.jpg";

  return (
    <section
      className="relative text-black flex items-center rounded-lg shadow-lg overflow-hidden mb-8"
      style={{
        height: "300px",
        width: "100%",
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 75%), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      <div className="w-1/2 p-6 z-10">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6">{description}</p>
        <a
          href={link}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded shadow"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Service;

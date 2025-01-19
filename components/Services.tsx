// components/Services.tsx
import Image from 'next/image';

const ServicesSection = () => {
    const services = [
      { title: "Compliance Audits", img: "/images/audit-bg.jpg" },
      { title: "Hazard Management", img: "/images/hazmat-bg.jpg" },
      { title: "Employee Training", img: "/images/training-bg.jpg" },
      { title: "Policy Creation", img: "/images/policy-bg.jpg" },
    ];
  
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={640}
                height={360}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-gray-600">
                  Learn more about our {service.title.toLowerCase()} to ensure workplace safety and
                  compliance.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServicesSection;
  
// components/Team.tsx
import Image from 'next/image';

const TeamSection = () => {
    const teamMembers = [
      { name: "Alice Johnson", role: "CEO", img: "/images/company-overview.jpg" },
      { name: "Mark Spencer", role: "Safety Consultant", img: "/images/training-bg.jpg" },
    ];
  
    return (
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
              <Image
                src={member.img}
                alt={member.name}
                width={128}
                height={128}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TeamSection;
  
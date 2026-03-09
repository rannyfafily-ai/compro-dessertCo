"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: { first: string; last: string };
  picture: { large: string };
  location: { city: string };
  email: string;
}

export default function TeamsPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulated Roles and Bios to match Puyo's vibe
  const roles = ["Outlet Manager", "Quality Control", "Pastry Chef", "Customer Experience", "Logistics Specialist"];
  const bios = [
    "Passionate about ensuring every #PuyoPeople leaves with a smile.",
    "Expert in maintaining the signature silky texture we all love.",
    "Always experimenting with new ways to deliver happiness in a cup.",
    "Dedicated to providing a remarkable experience, one customer at a time."
  ];

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team is a diverse group of individuals inspired to be the best they can be, 
            working together to make a positive impact on the communities we serve.
          </p>
        </div>

        {/* Team Grid */}
        {loading ? (
          <div className="text-center text-pink-500 font-semibold">Loading the squad...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.picture.large}
                    alt={member.name.first}
                    className="rounded-full w-full h-full object-cover border-4 border-[#64c4d3]"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name.first} {member.name.last}
                </h3>
                <p className="text-[#64c4d3] font-medium mb-3">
                  {roles[index % roles.length]}
                </p>
                <p className="text-gray-500 text-sm italic">
                  "{bios[index % bios.length]}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
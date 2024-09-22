import React from 'react';

export const Committee = () => {
  const members = [
    { name: 'John Doe', position: 'President', image: '/api/placeholder/150/150', social: { twitter: '#', linkedin: '#' } },
    { name: 'Jane Smith', position: 'Vice President', image: '/api/placeholder/150/150', social: { twitter: '#', linkedin: '#' } },
    // Add more committee members here
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Committee</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.position}</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href={member.social.twitter} className="text-blue-500 hover:underline">Twitter</a>
              <a href={member.social.linkedin} className="text-blue-700 hover:underline">LinkedIn</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
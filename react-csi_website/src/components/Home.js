import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const eventData = [
  { name: 'Workshops', count: 15 },
  { name: 'Seminars', count: 10 },
  { name: 'Hackathons', count: 5 },
  { name: 'Tech Talks', count: 8 },
];

export const Home = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <img src="/api/placeholder/200/200" alt="CSI Logo" className="mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Computer Society of India (CSI)</h1>
        <p className="mt-2">Empowering students through technology and innovation</p>
      </header>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          The Computer Society of India (CSI) student club is dedicated to fostering technological 
          innovation and knowledge sharing among computer science enthusiasts. We organize various 
          events, workshops, and seminars to help students stay updated with the latest trends in 
          the tech industry.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Events Conducted</h3>
            <p className="text-4xl font-bold text-blue-600">38</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Total Participation</h3>
            <p className="text-4xl font-bold text-blue-600">1,500+</p>
          </div>
        </div>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={eventData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#3182ce" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/api/placeholder/150/75" alt="Sponsor 1" className="mx-auto" />
          <img src="/api/placeholder/150/75" alt="Sponsor 2" className="mx-auto" />
          <img src="/api/placeholder/150/75" alt="Sponsor 3" className="mx-auto" />
          <img src="/api/placeholder/150/75" alt="Sponsor 4" className="mx-auto" />
        </div>
      </section>
    </div>
  );
};
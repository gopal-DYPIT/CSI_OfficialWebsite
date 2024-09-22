import React from 'react';
export const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/api/placeholder/100/50" alt="CSI Logo" className="mb-2" />
              <p>&copy; 2024 Computer Society of India. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
              <a href="mailto:contact@csiclub.com" className="hover:text-blue-400">Email</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
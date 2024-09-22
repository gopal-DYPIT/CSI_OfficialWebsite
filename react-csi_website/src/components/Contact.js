import React from 'react';
export const Contact = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="mb-4">Get in touch with us through our social media channels or send us an email:</p>
          <div className="space-y-2">
            <p>Email: <a href="mailto:contact@csiclub.com" className="text-blue-600 hover:underline">contact@csiclub.com</a></p>
            <p>Twitter: <a href="#" className="text-blue-600 hover:underline">@CSIClub</a></p>
            <p>Facebook: <a href="#" className="text-blue-600 hover:underline">facebook.com/CSIClub</a></p>
            <p>Instagram: <a href="#" className="text-blue-600 hover:underline">@csi_club</a></p>
          </div>
        </div>
      </div>
    );
  };
import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className="pt-36 md:pt-0 h-screen w-full bg-gradient-to-b from-blue-700 to-blue-300 flex flex-col items-center justify-center text-white"
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg text-center max-w-lg">
        Explore our events, learn about our members, and get in touch with us!
      </p>
      <a
        href="#events"
        className="mt-6 px-4 py-2 bg-white text-blue-700 rounded hover:bg-blue-600 hover:text-white transition duration-300"
      >
        Learn More
      </a>
    </div>
  );
};

export default Home;

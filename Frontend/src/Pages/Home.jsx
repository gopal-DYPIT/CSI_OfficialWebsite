import React from "react";
import { motion } from "framer-motion";

const appear = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div
      name="home"
      className="pt-36 md:pt-0 h-screen w-full bg-gradient-to-b from-blue-700 to-blue-300 flex flex-col items-center justify-center text-white"
    >
      <motion.section
        className="flex flex-col items-center"
        variants={appear}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="text-5xl font-bold mb-4" variants={item}>
          Welcome to Our Website
        </motion.h1>

        <motion.p className="text-lg text-center max-w-lg" variants={item}>
          Explore our events, learn about our members, and get in touch with us!
        </motion.p>

        <motion.p
          className="text-lg py-4 text-center max-w-lg"
          variants={item}
          onClick={() => {
            // window.location.href = "/events";
          }}
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Learn More
          </button>
        </motion.p>
      </motion.section>
    </div>
  );
};

export default Home;

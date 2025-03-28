import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";

const ComingSoon: React.FC = () => {
  return (
    <div className="relative w-full h-screen text-white">
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Group Classes
          </h1>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            🚧 Coming Soon 🚧
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mt-10 mb-6">
            We're cooking up something amazing! Stay tuned for updates.
          </p>
          <div className="flex justify-center">
            {/* <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl shadow-lg transition duration-300">
              Notify Me
            </button> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;

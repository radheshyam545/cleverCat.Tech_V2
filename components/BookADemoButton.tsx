"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BookADemoButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/more-info");
  };

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={handleClick}
      className="relative inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold text-lg shadow-xl overflow-hidden group transition-all duration-300"
    >
      {/* Sliding Background */}
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 transition-transform duration-500 transform translate-x-[-100%] group-hover:translate-x-0 rounded-full z-0" />

      {/* Overlay to darken base before hover */}
      <span className="absolute inset-0 bg-purple-600 opacity-80 group-hover:opacity-0 transition-opacity duration-300 rounded-full z-10" />

      {/* Button Text and Icon */}
      <span className="relative z-20 flex items-center">
        Book a Demo
        <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
      </span>
    </motion.button>
  );
};

export default BookADemoButton;

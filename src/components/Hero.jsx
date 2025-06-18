import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-charcoal-black relative overflow-hidden"
    >
      {/* Optional: Add a subtle background image here */}
      {/* <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('/path/to/your/image.jpg')"}}></div> */}

      <div className="text-center z-10 p-6">
        <motion.h1
          className="text-5xl md:text-8xl font-heading text-off-white tracking-widest"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DEMOCRACY IS NOT A DATE,
        </motion.h1>
        <motion.h2
          className="text-5xl md:text-8xl font-heading text-nigeria-green tracking-widest mt-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          IT'S A DEMAND.
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;

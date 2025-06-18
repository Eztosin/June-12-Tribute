import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We said enough.",
    author: "Nigerian Youth, 2020",
    position: "top-1/4 left-1/4",
    delay: 0,
  },
  {
    quote: "End Police Brutality",
    author: "#EndSARS Protester",
    position: "top-1/3 right-1/4",
    delay: 0.3,
  },
  {
    quote: "The power of the people is stronger than the people in power.",
    author: "June 12 Activist",
    position: "bottom-1/4 left-1/3",
    delay: 0.6,
  },
  {
    quote: "Soro Soke Werey!",
    author: "Youth Voice, 2020",
    position: "bottom-1/3 right-1/3",
    delay: 0.9,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-charcoal-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-heading text-center mb-20 text-off-white">
          Voices of Resistance
        </h2>
        
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-nigeria-green rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-blood-red rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        {/* Testimonial quotes */}
        <div className="relative h-[600px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`absolute ${testimonial.position} transform -translate-x-1/2 -translate-y-1/2`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: testimonial.delay }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-md">
                <p className="text-2xl md:text-3xl font-heading text-off-white mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-mono text-nigeria-green text-right">
                  — {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
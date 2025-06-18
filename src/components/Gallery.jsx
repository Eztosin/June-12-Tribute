import React, { useState } from "react";
import { motion } from "framer-motion";
import endsars1 from "../endsars1.jpeg";
import endsars2 from "../endsars2.jpeg";
import endsars3 from "../endsars3.jpeg";
import endsars4 from "../endsars4.jpeg";
import endsars5 from "../endsars5.jpeg";
import endsars6 from "../endsars6.jpeg";
import endsars7 from "../endsars7.jpeg";
import endsars8 from "../endsars8.jpeg";
import endsars9 from "../endsars9.jpeg";
import endsars10 from "../endsars10.jpeg";


// Image array with imported images and captions
const images = [
  { src: endsars1, caption: "Youth raising their voices" },
  { src: endsars2, caption: "Standing for justice" },
  { src: endsars3, caption: "The power of unity" },
  { src: endsars4, caption: "Demanding accountability" },
  { src: endsars5, caption: "Peaceful resistance" },
  { src: endsars6, caption: "A generation awakened" },
  { src: endsars7, caption: "The struggle for change" },
  { src: endsars8, caption: "The struggle for change" },
  { src: endsars9, caption: "The struggle for change" },
  { src: endsars10, caption: "The struggle for change" }
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-off-white text-charcoal-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-nigeria-green/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blood-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl font-heading text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          A Movement in Pictures
        </motion.h2>
        
        <motion.p 
          className="text-center mb-12 max-w-2xl mx-auto text-charcoal-black/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          The visual story of resistance, courage, and solidarity during the #EndSARS protests
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden relative group ${
                index === 0 || index === 5 ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
            >
              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Image with filter effect */}
              <img
                src={image.src}
                alt={`#EndSARS protest - ${image.caption}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-150"
                style={{ 
                  filter: activeIndex === index ? "contrast(110%) brightness(105%)" : "grayscale(30%)"
                }}
              />
              
              {/* Caption that appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-off-white font-heading text-xl">{image.caption}</p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-nigeria-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="font-mono text-charcoal-black/70 mb-6">
            Images from the #EndSARS movement that shook Nigeria and awakened a generation.
          </p>
          <div className="inline-flex items-center justify-center space-x-2 text-nigeria-green">
            <span className="w-8 h-0.5 bg-nigeria-green"></span>
            <span className="w-2 h-2 bg-nigeria-green rounded-full"></span>
            <span className="w-8 h-0.5 bg-nigeria-green"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
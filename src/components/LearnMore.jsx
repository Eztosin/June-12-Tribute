import React from "react";
import { motion } from "framer-motion";

const resources = [
  {
    title: "June 12 History",
    description: "Learn about the events of June 12, 1993 and its significance in Nigeria's democratic journey.",
    link: "#",
    color: "bg-nigeria-green",
    icon: "📚",
  },
  {
    title: "#EndSARS Movement",
    description: "Understand the origins, demands, and impact of the 2020 youth-led protests against police brutality.",
    link: "#",
    color: "bg-blood-red",
    icon: "✊🏾",
  },
  {
    title: "Nigerian Civic Organizations",
    description: "Connect with groups working to strengthen democracy and human rights in Nigeria.",
    link: "#",
    color: "bg-charcoal-black",
    icon: "🔗",
  },
];

const LearnMore = () => {
  return (
    <section id="learn" className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-heading text-center mb-12 text-charcoal-black">
          Deepen Your Understanding
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`${resource.color} p-6 text-off-white`}>
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-2xl font-heading mb-2">{resource.title}</h3>
                <p className="font-sans text-off-white/90 mb-4">{resource.description}</p>
                <a 
                  href={resource.link} 
                  className="inline-block font-mono py-2 px-4 bg-off-white/20 hover:bg-off-white/30 rounded transition-colors duration-300 text-off-white"
                >
                  Explore →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center mt-12 font-mono text-charcoal-black/70">
          Knowledge is the foundation of meaningful action.
        </p>
      </div>
    </section>
  );
};

export default LearnMore;
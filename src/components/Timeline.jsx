import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    date: "📅 June 12, 1993",
    title: "A Promise Made",
    description:
      "Millions of Nigerians voted in what was hailed as the freest and fairest election in the nation’s history. A symbol of hope.",
  },
  {
    date: "🛑 The Silencing Years",
    title: "A Promise Broken",
    description:
      "The election results were annulled by the military regime, sparking widespread protests and a long period of resistance against authoritarian rule.",
  },
  {
    date: "✊🏾 October 2020",
    title: "#EndSARS — The Cry Repeated",
    description:
      "A new generation of Nigerians took to the streets, using social media to organize a massive protest against police brutality, echoing the same demand for justice and accountability.",
  },
  {
    date: "🔗 What Democracy Means Today",
    title: "An Ongoing Struggle",
    description:
      "The fight for true democracy continues. It lives in the hearts of activists, journalists, and every citizen who dares to demand a better future.",
  },
];

const TimelineItem = ({ event, isLast }) => (
  <div className="flex items-start">
    <div className="flex flex-col items-center mr-6">
      <div className="w-8 h-8 bg-nigeria-green rounded-full flex items-center justify-center text-off-white font-bold">
        {/* You can use an icon here */}
        {event.date.split(" ")[0]}
      </div>
      {!isLast && <div className="w-1 h-full bg-off-white/20 mt-2"></div>}
    </div>
    <motion.div
      className="bg-white/5 p-6 rounded-lg flex-1"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <p className="font-mono text-nigeria-green mb-1">{event.date}</p>
      <h3 className="text-3xl font-heading text-off-white mb-2">
        {event.title}
      </h3>
      <p className="font-sans text-off-white/80">{event.description}</p>
    </motion.div>
  </div>
);

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-charcoal-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-heading text-center mb-12 text-off-white">
          The Story of a Struggle
        </h2>
        <div className="relative flex flex-col space-y-12">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              event={event}
              isLast={index === timelineEvents.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

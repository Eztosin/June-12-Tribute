import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Quotes from the movement
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

// Sample tweets data
const sampleTweets = [
  {
    id: "1",
    username: "NigerianActivist",
    handle: "@fight4justice",
    content: "June 12 reminds us that the fight for democracy never ends. From 1993 to #EndSARS, the spirit of resistance lives on. #June12 #DemocracyDay",
    timestamp: "2h ago",
    likes: 1243,
    retweets: 567
  },
  {
    id: "2",
    username: "EndSARSMovement",
    handle: "@sorosoke",
    content: "The youth of Nigeria will not be silenced. Our voices echo those who stood up on June 12, 1993. The struggle continues. #EndSARS #June12Legacy",
    timestamp: "5h ago",
    likes: 3421,
    retweets: 1892
  },
  {
    id: "3",
    username: "HistoryMatters",
    handle: "@neverforget",
    content: "Today we honor MKO Abiola and all those who sacrificed for Nigeria's democracy. Their courage inspires a new generation. #June12 #DemocracyHeroes",
    timestamp: "1d ago",
    likes: 982,
    retweets: 421
  },
  {
    id: "4",
    username: "YouthVoice",
    handle: "@newgeneration",
    content: "From June 12 to #EndSARS, the message is clear: Nigeria belongs to all of us, and we demand better governance. The revolution will not be silenced.",
    timestamp: "3h ago",
    likes: 2156,
    retweets: 876
  }
];

const VoicesOfResistance = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate API fetch
  useEffect(() => {
    const fetchTweets = async () => {
      setTimeout(() => {
        setTweets(sampleTweets);
        setLoading(false);
      }, 1500);
    };

    fetchTweets();
  }, []);

  return (
    <section id="voices" className="py-20 bg-charcoal-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-nigeria-green rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-blood-red rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl font-heading text-center mb-6 text-off-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Voices of Resistance
        </motion.h2>
        
        <motion.p 
          className="text-center text-off-white/80 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          From historic protests to modern digital activism, these are the voices that continue 
          Nigeria's fight for democracy and justice.
        </motion.p>
        
        {/* Floating quotes section */}
        <div className="relative h-[500px] mb-24">
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
        
        {/* Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-16 h-0.5 bg-nigeria-green"></div>
          <div className="mx-4 text-nigeria-green">✊🏾</div>
          <div className="w-16 h-0.5 bg-nigeria-green"></div>
        </div>
        
        {/* Live tweets section */}
        <motion.h3 
          className="text-3xl font-heading text-center mb-8 text-off-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Conversation Continues
        </motion.h3>
        
        {loading ? (
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-nigeria-green border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tweets.map((tweet) => (
              <motion.div
                key={tweet.id}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-nigeria-green rounded-full flex items-center justify-center text-off-white font-bold mr-4">
                    {tweet.username.charAt(0)}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-off-white">{tweet.username}</p>
                    <p className="font-mono text-off-white/60 text-sm">{tweet.handle}</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-6 h-6 text-nigeria-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                </div>
                <p className="text-off-white mb-4">{tweet.content}</p>
                <div className="flex justify-between text-off-white/60 font-mono text-sm">
                  <span>{tweet.timestamp}</span>
                  <div className="flex space-x-4">
                    <span>{tweet.retweets} RT</span>
                    <span>{tweet.likes} ♥</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="https://twitter.com/search?q=%23EndSARS%20OR%20%23June12%20OR%20%23DemocracyDay%20Nigeria&src=typed_query&f=live" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block font-mono py-3 px-6 bg-nigeria-green hover:bg-nigeria-green/90 rounded-full transition-colors duration-300 text-off-white"
          >
            See More Voices on X
          </a>
        </div>
      </div>
    </section>
  );
};

export default VoicesOfResistance;
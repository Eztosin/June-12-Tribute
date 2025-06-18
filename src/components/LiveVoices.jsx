import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// This is a placeholder component that simulates tweets
// In a real implementation, you would fetch data from Twitter/X API
const LiveVoices = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample tweets data - in a real app, this would come from the X API
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

  // Simulate API fetch
  useEffect(() => {
    const fetchTweets = async () => {
      // In a real app, you would fetch from Twitter API here
      setTimeout(() => {
        setTweets(sampleTweets);
        setLoading(false);
      }, 1500);
    };

    fetchTweets();
  }, []);

  return (
    <section id="voices" className="py-20 bg-charcoal-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-heading text-center mb-12 text-off-white">
          Voices of Resistance
        </h2>
        
        <p className="text-center text-off-white/80 mb-12 max-w-2xl mx-auto">
          Real voices from Nigerians continuing the fight for democracy and justice, 
          connecting the legacy of June 12 with today's movements.
        </p>
        
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

export default LiveVoices;
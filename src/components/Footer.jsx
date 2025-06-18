import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-charcoal-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-heading text-nigeria-green tracking-wider">
              June 12 Spirit
            </h2>
            <p className="text-off-white/70 font-sans mt-2 max-w-md">
              A tribute to Nigeria's democratic journey and the ongoing struggle for justice and accountability.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <ul className="flex space-x-6 mb-4">
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="font-sans cursor-pointer text-off-white hover:text-nigeria-green transition-colors duration-300"
                >
                  Top
                </Link>
              </li>
              <li>
                <Link
                  to="timeline"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="font-sans cursor-pointer text-off-white hover:text-nigeria-green transition-colors duration-300"
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="font-sans cursor-pointer text-off-white hover:text-nigeria-green transition-colors duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="cta"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="font-sans cursor-pointer text-off-white hover:text-nigeria-green transition-colors duration-300"
                >
                  Take Action
                </Link>
              </li>
            </ul>
            
            <p className="text-off-white/50 font-mono text-sm">
              © {new Date().getFullYear()} | Created with purpose
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
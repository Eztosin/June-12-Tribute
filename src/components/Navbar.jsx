import React from "react";
import { Link } from "react-scroll";

const sections = [
  { id: "timeline", title: "The Story" },
  { id: "gallery", title: "The Movement" },
  { id: "voices", title: "Voices" },
  { id: "learn", title: "Learn More" },
  { id: "cta", title: "Take Action" },
];

const Navbar = () => {
  return (
    <nav className="bg-charcoal-black/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-heading text-nigeria-green tracking-wider">
          June 12 Spirit
        </h1>
        <ul className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-sans cursor-pointer text-off-white hover:text-nigeria-green transition-colors duration-300"
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
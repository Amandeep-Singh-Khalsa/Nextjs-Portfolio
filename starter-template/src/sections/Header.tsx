"use client";

import { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState("Home");

  const handleClick = (section: string) => {
    setActive(section);
  };

  return (
    <div className="flex justify-center fixed top-3 w-full z-10 px-4">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur max-w-[103%] md:max-w-[70%] lg:max-w-[50%]">
        <a
          href="#"
          onClick={() => handleClick("Home")}
          className={`nav-item ${
            active === "Home" ? "bg-white text-gray-900 hover:bg-white/70" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => handleClick("Projects")}
          className={`nav-item ${
            active === "Projects"
              ? "bg-white text-gray-900 hover:bg-white/70"
              : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={() => handleClick("About")}
          className={`nav-item ${
            active === "About" ? "bg-white text-gray-900 hover:bg-white/70" : ""
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={() => handleClick("Contact")}
          className={`nav-item ${
            active === "Contact"
              ? "bg-white text-gray-900 hover:bg-white/70"
              : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

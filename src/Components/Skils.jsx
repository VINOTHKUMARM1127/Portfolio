import React from "react";
import { Icon } from "@iconify/react";

const Skils = () => {
  return (
    <div className="mt-5">
      <div className="text-center text-[2em] font-bold">Skills</div>
      <div className="text-center text-[1.2em] opacity-55 mt-2 mb-6">Here are some of my skills on which I have learnt.</div>
      <div className="flex justify-center md:justify-evenly text-center flex-col md:flex-row">
        <div className="border border-blue-600 rounded-xl px-0 md:px-16 py-6">
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>React Js</h3>
          <h3>Tailwind CSS</h3>
        </div>

        <div className="border border-blue-600 rounded-xl px-16 py-6">
          <h3>Git</h3>
          <h3>GitHub</h3>
          <h3>Netlify</h3>
          <h3>Vite</h3>
          <h3>PhotoShop</h3>
        </div>
      </div>
    </div>
  );
};

export default Skils;

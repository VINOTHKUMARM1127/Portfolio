import React from "react";
import { Icon } from "@iconify/react";

const Skils = () => {
  return (
    <div className="mt-5">
      <div className="text-center text-[2em] font-bold mt-3">Skills</div>
      <div className="text-center text-[1.2em] opacity-55 mt-5 mb-10">
        Here are some of my skills on which I have learnt.
      </div>
      <div className="flex justify-center md:justify-evenly text-center flex-col md:flex-row">
        <div className="border border-blue-600 rounded-xl px-0 mx-[10%] my-5 md:px-16 pb-8 md:mx-0 md:my-0 opacity-80 shadow-[0_0_10px_blue]">
          <div className="text-center text-[1.6em] my-4 font-bold">Frontend</div>
          <div className="flex justify-center gap-5">
            <h3 className="border border-white rounded-lg px-3 py-2">HTML</h3>
            <h3 className="border border-white rounded-lg px-3 py-2">CSS</h3>
            <h3 className="border border-white rounded-lg px-3 py-2">
              JavaScript
            </h3>
          </div>
          <div className="flex justify-center gap-5 mt-3">
            
            <h3 className="border border-white rounded-lg px-3 py-2">
              React Js
            </h3>
            <h3 className="border border-white rounded-lg px-3 py-2">
              Tailwind CSS
            </h3>
          </div>
        </div>

        <div className="border border-blue-600 rounded-xl px-0 mx-[10%] my-5 md:px-16 pb-8 md:mx-0 md:my-0 opacity-80 shadow-[0_0_10px_blue]">
        <div className="text-center text-[1.6em] my-4 font-bold">Others</div>
          <div className="flex justify-center gap-5">
            <h3 className="border border-white rounded-lg px-3 py-2">Git</h3>
            <h3 className="border border-white rounded-lg px-3 py-2">GitHub</h3>
            <h3 className="border border-white rounded-lg px-3 py-2">PhotoShop</h3>
          </div>
          <div className="flex justify-center gap-5 mt-3">
            <h3 className="border border-white rounded-lg px-3 py-2">Netlify</h3>
            <h3 className="border border-white rounded-lg px-3 py-2">Vite</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;

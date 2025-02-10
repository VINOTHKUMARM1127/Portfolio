import React from "react";
import LotGames from '../assets/LotGames.png'
import LotHub from '../assets/LotHub.png'

const Projects = () => {
  return (
    <div className="mt-[5%] w-screen xl:w-[80%] mx-auto my-0">
      <div className="text-center text-[2em] font-bold mt-3">Projects</div>
      <div className="text-center text-[1.2em] opacity-55 mt-5 mb-10 px-10">
        I have worked on a wide range of projects. From websites to web apps.
        Here are some of my projects.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] md:w-[100%] mx-auto my-0">
        <div className="border border-[#b14fc4] rounded-xl py-4 px-2 mx-auto my-0 opacity-80 shadow-[0_0_6px_#d607ed] mb-8">
        <img src={LotHub} alt="" className="rounded-[10%] min-h-[180px] min-w-[280px] px-4 mb-2"/>
          <div className=" px-4 text-[1.2em] font-bold opacity-90 ">LotHub</div>
          <div className=" px-4 text-[0.8em] opacity-50 mb-1">2024</div>
          <div className=" px-4 text-[0.9em] opacity-70 text-justify">
          Lothub is a movie discovery platform inspired by IMDb. It provides users with an intuitive interface to explore, search, and discover movies, TV shows, and actors. The website pulls data from The Movie Database (TMDb) API to give real-time information on movies, actors, trending content, and much more.
          </div>
        </div>

        <div className="border border-[#b14fc4] rounded-xl py-4 px-2 mx-auto my-0 opacity-80 shadow-[0_0_6px_#d607ed] mb-8">
        <img src={LotGames} alt="" className="rounded-[10%] min-h-[180px] min-w-[280px] px-4 mb-2"/>
          
          <div className="px-4 flex gap-3 text-[0.8em] my-1">
            <div className=" bg-[#b14fc4] rounded-xl px-2">React</div>
            <div className=" bg-[#b14fc4] rounded-xl px-2">Tailwind Css</div>
          </div>
          <div className=" px-4 text-[1.2em] font-bold opacity-90 ">LotGames</div>
          <div className=" px-4 text-[0.8em] opacity-50 mb-1">2024</div>
          <div className=" px-4 text-[0.9em] opacity-70 text-justify">
          LotGames is a game discovery platform inspired by RAWG. It provides users with an intuitive interface to explore, search, and discover video games, game creators, and gaming stores. The website pulls data from the RAWG API to offer real-time information about games, creators, trending content, and much more.
          </div>
        </div>

        <div className="border border-[#b14fc4] rounded-xl py-4 px-2 mx-auto my-0 opacity-80 shadow-[0_0_6px_#d607ed] mb-8">
          <img src={LotGames} alt="" className="rounded-[10%] min-h-[180px] min-w-[280px] px-4 mb-2"/>
          <div className=" px-4 text-[1.2em] font-bold opacity-90 ">LotHub</div>
          <div className=" px-4 text-[0.8em] opacity-50 mb-1">2024</div>
          <div className=" px-4 text-[0.9em] opacity-70 text-justify">
            As a Computer Science graduate, I possess strong problem-solving and
            precision skills. Combining this foundation with my passion for
            technology, I'm venturing into IT.
          </div>
        </div>

      </div>
    </div> 
  );
};

export default Projects;

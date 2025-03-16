import React, { useEffect, useState } from 'react'

const Details = ({ project, onClose }) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);


    return (
        <div onClick={onClose} className={'fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto '}>
            <div className='bg-gray-800 p-4 rounded-lg w-[80vw] md:w-[50vw] text-center'>

                
                <div className="px-4 pt-10">
                
                <img src={project.poster} alt="" className="max-h-[320px] mx-auto my-0 mb-2" />
                <div className="px-4 py-1 flex gap-3 text-[0.8em] my-1">
                    <div className=" bg-[#b14fc4] rounded-xl px-2">{project.tech[0]}</div>
                    <div className=" bg-[#b14fc4] rounded-xl px-2">{project.tech[1]}</div>
                </div>
                <div className="px-4 text-[1.4em] mt-1 font-bold opacity-90 ">{project.title}</div>
                <div className="px-4 text-[0.8em] opacity-50 mb-1">{project.year}</div>
                <div className="px-4 text-[1em] mb-5 opacity-70 text-justify">{project.Description}</div>

                <div className='flex justify-around'>
                    <button
                    onClick={() => window.open(project.code)}
                        className='bg-violet-600 rounded-lg py-2 px-4 mt-2 hover:bg-slate-500'>View Code</button>
                    <button
                    onClick={()=>window.open(project.app)}
                        className='bg-violet-600 rounded-lg py-2 px-4 mt-2 hover:bg-slate-500'>View LiveApp</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Details
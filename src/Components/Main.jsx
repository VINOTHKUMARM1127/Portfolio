import React from 'react'
import Pic from '../assets/Profile-Pic-min.jpg'

const Main = () => {
    return (
        <div className='md:h-[89vh] flex flex-col-reverse md:flex-row justify-evenly items-center py-10 md:py-0'>
            <div className='text-center w-[90vw] md:w-[40vw]'>
                <div className='text-[1.7em] md:text-[3em] font-black mt-4 md:mt-0'>
                <div className='text-[1.4em] md:text-[1em] '>Hi I Am</div>
                <div className='text-[1.4em] md:text-[1em]'>Vinoth Kumar M</div>
                </div>
                <div className='text-[1.8em] md:text-[2em]   '>I am Web Developer</div>
                <div className='text-[1em] md:text-[1.3em] opacity-70 mt-3'>A skilled React developer with a strong portfolio, passionate about
                     staying updated on frontend tech. Collaborative and committed to quality,
                      you thrive in dynamic teams. Eager to contribute creativity and bring 
                      innovative ideas to life.</div>
            </div>

            <div>
                <img src={Pic} 
                className='w-[300px] md:w-[400px] rounded-full border-2 border-violet-600 mt-5 md:mt-0  shadow-[0_0_40px_purple]' />
            </div>
        </div>
    )
}

export default Main

import React from 'react'
import Pic from '../assets/Pic.jpg'

const Main = () => {
    return (
        <div className='md:h-[89vh] flex flex-col-reverse md:flex-row justify-evenly items-center'>
            <div className='text-center w-[90vw] md:w-[40vw]'>
                <div className='text-[3em] font-black'>
                <div>Hi I Am</div>
                <div>Vinoth Kumar M</div>
                </div>
                <div className='text-[2em] font-bold'>I Am Web Developer</div>
                <div className='text-[1.3em] opacity-70 mt-3'>A skilled React developer with a strong portfolio, passionate about
                     staying updated on frontend tech. Collaborative and committed to quality,
                      you thrive in dynamic teams. Eager to contribute creativity and bring 
                      innovative ideas to life.</div>
            </div>

            <div><img src={Pic} className='w-[400px] rounded-full border-2 border-violet-600' /></div>
        </div>
    )
}

export default Main

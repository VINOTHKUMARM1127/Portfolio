import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className='bg-[var(--navbar)] z-50 flex justify-between md:px-[100px] 
    p-5 sticky top-0'>
      <div className='text-[1.5em]'>VinoDev</div>
      <div className='hidden md:block'>
      <div className='flex mx-0 my-auto cursor-pointer'>
        <Link to="home" smooth={true} duration={500} offset={-80} className='md:mx-[2em] mx-[1em] hover:text-violet-600'>About</Link>
        <Link to="skills" smooth={true} duration={500} offset={-80} className='md:mx-[2em] mx-[1em] hover:text-violet-600'>Skills</Link>
        <Link to="education" smooth={true} duration={500} offset={-80} className='md:mx-[2em] mx-[1em] hover:text-violet-600'>Education</Link>
        <Link to="projects" smooth={true} duration={500} offset={-80} className='md:mx-[2em] mx-[1em] hover:text-violet-600'>Projects</Link>
      </div></div>
      <a href='https://github.com/VINOTHKUMARM1127' className='mx-0 my-auto border-[2px] border-[#6536ff] px-6 py-1  rounded-full text-[#6536ff] hover:bg-violet-600 hover:text-white'>Github</a>
    </div>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='bg-[var(--navbar)] flex justify-center mt-5'>
        <div className='w-[90vw] text-center'>
      <div className='text-[1.4em] mt-5'>Vinoth Kumar M</div>
      <div className=''>
        <Link to='home' smooth={true} duration={500} offset={-80} className='block my-[1em] hover:text-violet-600'>About</Link>
        <Link to='skills' smooth={true} duration={500} offset={-80} className='block my-[1em] hover:text-violet-600'>Skills</Link>
        <Link to='education' smooth={true} duration={500} offset={-80} className='block my-[1em] hover:text-violet-600'>Education</Link>
        <Link to='projects' smooth={true} duration={500} offset={-80} className='block my-[1em] hover:text-violet-600'>Projects</Link>
      </div>
      </div>
    </div>
  )
}

export default Footer

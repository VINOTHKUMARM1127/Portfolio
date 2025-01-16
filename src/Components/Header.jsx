import React from 'react'

const Header = () => {
  return (
    <div className='bg-[var(--navbar)] flex justify-between md:px-[100px] 
    p-5 sticky top-0'>
      <div className='text-[1.5em]'>VinoDev</div>
      <div className='hidden md:block'>
      <div className='flex mx-0 my-auto'>
        <div className='md:mx-[2em] mx-[1em] hover:text-violet-600'>About</div>
        <div className='md:mx-[2em] mx-[1em] hover:text-violet-600'>Skills</div>
        <div className='md:mx-[2em] mx-[1em] hover:text-violet-600'>Education</div>
        <div className='md:mx-[2em] mx-[1em] hover:text-violet-600'>Projects</div>
      </div></div>
      <div className='mx-0 my-auto'>Github</div>
    </div>
  )
}

export default Header

import React, { useState } from 'react'

const Explore = () => {
    const [visible, setVisible] = useState(true)
  return (
    <div className={visible ? 'block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'hidden'}>
      <div className='text-center w-[50vw] mx-auto my-0 py-7 
      bg-slate-600 rounded-xl'>
        <div>Welcome to My World of Creation!</div>
        <div>Hello there! I'm excited to share my work with you.</div>
        <div>Feel free to browse through my projects and learn more about my skills and experiences.</div>
        <div>If you have any questions or would like to collaborate, don't hesitate to reach out!</div>
        <div>Looking forward to connect!</div>
        <button onClick={()=>{setVisible(false)}}
        className='bg-violet-600 rounded-xl p-2'>explore</button>
      </div>
      </div>
  )
}

export default Explore

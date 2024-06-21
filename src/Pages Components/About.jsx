import React from 'react'

const About = () => {
  return (
    <div className='h-fit font-poppins '>
    <h1 className='text-white  text-4xl'>About Me</h1>
    <div className='flex flex-col text-white justify-center items-center  mt-10 gap-20 md:flex-row '>
        {/* image */}
      <div className='w-fit'>
        <img src='/professional-brown-man-black-hair-wearing-glass-trans.jpg' className='h-96 md:h-80 w-full'/>
      </div>

    {/* text  */}
    <div className='text-left text-lg px-1 md:w-[50%] '>
        <h2 className='mb-2 w-fit text-violet-700 font-medium'>Full Stack Developer</h2> 
      <p className='mb-2 '>
        Hey there!  I'm full stack web developer specialized in MERN stack. I am always learning new technologies
         and trying to improve my skills. I love turning ideas into reality with code. I am always ready for 
         collaboration ,lets chat.
      </p>
      <button className='bg-violet-700 p-2 rounded-lg mt-3'>Resume</button>
      </div>
    </div>
    </div>
  )
}

export default About

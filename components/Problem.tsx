import React from 'react'

const Problem = () => {
  return (
    <div className='w-full pb-10 mb-[100px] md:mb-5 mt-40 z-40' id='Problem'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='md:w-1/2'>
    <h2 className='lg:max-w-[40vw] font-bold text-2xl md:text-3xl text-left'>
        Who is <span className='text-purple'>Mauricio Salas?</span>
    </h2>
    <p className='text-white-200 md:mt-5 my-5 text-justify'>
    I’m a 21-year-old Mexican student who enjoys spending quality time with family and friends, embracing nature and learning. With strong love for calisthenics and rock climbing, <span className='font-extralight'>along with an unshakeable dedication to entrepreneurship. </span>
    I am currently focused on merging my software engineer career with my passion for sales and marketing.
    </p>
        </div>
        <div className='md:w-1/2 flex justify-center '>
        <img 
            src="https://maush963.github.io/Imagesformysalespage/Maush.jpeg" 
            alt="Mauricio Salas" 
            className='w-4/5 h-full rounded-lg shadow-md shadow-purple'
          />
        </div>
        </div>
    </div>
  )
}

export default Problem
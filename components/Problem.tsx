import React from 'react'

const Problem = () => {
  return (
    <div className='w-full pb-10 mb-[100px] md:mb-5 mt-40 z-40' id='Problem'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='md:w-1/2'>
    <h2 className='text-2xl lg:max-w-[40vw] text-left font-bold'>
        You're winning. &nbsp; Now, achieve your  <span className='text-purple'>full potential.</span>
    </h2>
    <p className='text-white-200 md:mt-5 my-5 text-left'>
        You've already built a solid audience and established a steady income. Still, you know there’s room for more. Those peaks of success, <span className='font-extralight'> a trending post, a flood of new sign ups</span>  are proof of what you can achieve. What if you could transform those peaks into a steady upward trend? 
    </p>
        </div>
        <div className='md:w-1/2 flex justify-center '>
          <img src="Maush.jpeg" alt="Maush.jpeg" className='w-4/5 h-full rounded-lg shadow-md shadow-purple '/>
        </div>
        </div>
    </div>
  )
}

export default Problem
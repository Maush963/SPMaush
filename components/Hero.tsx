import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-10 pt-36'>
      <div>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="#3AFFB0" />
      <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="white" />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
          Calisthenics coaches and fitness skool owners  
        </h2>  
        <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Reach your full income potential with personnalized optimization' />
        
        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
          Data-backed strategies that will help you grow your income, expand your audience, based on your specific needs.
        </p>
        <a href='#about'>
          <MagicButton 
            title='Book a free analysis'
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>

        </div>
      </div>
    </div>
  )
}

export default Hero
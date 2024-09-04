import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '../data'
import { div } from 'three/webgpu'
import { Highlight } from './ui/Hero-highlight'


const Footer = () => {
    const handleClick = (url: string) => {
      window.open(url, '_blank', 'noopener,noreferrer');
};
  return (
    <footer className='w-full pb-10 mt-[100px] mb-[100px] md:mb-5' id='contact'>

        <div className='flex flex-col items-center'>
                <div className='w-full pb-10 mt-40 z-40' id='Problem'>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='md:w-1/2'>
            <h2 className='lg:max-w-[40vw] font-bold text-2xl md:text-3xl text-center'>
            Exclusive Attention & <span className='text-purple'> <Highlight  className='text-black' >Premium Results</Highlight></span>
            </h2>
            <p className='text-white-200 my-5 text-justify'>
            I offer a <span className='text-white font-bold'>unique approach</span>, combining my software engineering expertise for analysis and automation with my copywriting skills to enhance sales. If there&apos;s something new to learn, I&apos;m always eager to dive in and figure it out.
            </p>
                </div>
                </div>
            </div>
            <a href="https://calendly.com/maush-solutions/15min-onboarding-call">
            <MagicButton
                title="Free Strategy Session"
                icon={<FaLocationArrow/>}
                position='right'
            />
        </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-column justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Maush</p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div
                    key={profile.id}
                    className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                    onClick={() => handleClick(profile.link)}
                  >
                        <img src={profile.img} alt={profile.img} width={20} height={20} />
                    </div>
                ))}

            </div>
        </div>

    </footer>
  );
}

export default Footer;
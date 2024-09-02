import React from 'react'
import { Timeline } from './ui/Timeline'

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
  }
  
  const timelineData: TimelineEntry[] = [
    {
      title: 'Analysis',
      content: (
        <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 p-3">
          <p className='text-white-200 md:mt-5 my-5 text-wrap'>We start with a complete funnel analysis and goal clarification, then conduct market and competitors' research to identify <span className='font-bold text-white'>where to focus our efforts.</span></p>
        </div>
        <div className="md:w-1/2">
          <img
            src="Analyse.jpeg"
            alt="Analyse.jpeg"
            className="rounded-lg object-cover h-40 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
      ),
    },
    {
      title: 'Plan',
      content: (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/2">
          <img
            src="thumbnail.jpeg"
            alt="thumbnail.jpeg"
            className="rounded-lg object-cover h-40 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        <div className="md:w-1/2 p-3">
          <p className='text-white-200 md:mt-5 my-5 text-wrap'>Based on our analysis, we select one of our <span className='font-bold text-white'>three tailored solutions</span> or customize one to fit your goals.</p>
        </div>
      </div>
      ),
    },
    {
        title: 'Conversions and Sales',
        content: (
            <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 p-3">
          <p className='text-white-200 md:mt-5 my-5 text-wrap'>Boost conversions with our main offer, featuring compelling VSL scripts/videos and <span className=' text-purple font-extrabold'>high-quality sales pages</span> with stunning design and persuasive copy.</p>
        </div>
        <div className="md:w-1/2">
          <img
            src="1house.jpeg"
            alt="1house.jpeg"
            className="rounded-lg object-cover h-40 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
        ),
    },
    {
        title: 'Reach and Engagement',
        content: (
            <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/2">
              <img
                src="2house.jpeg"
                alt="2house.jpeg"
                className="rounded-lg object-cover h-40 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="md:w-1/2 p-3">
              <p className='text-white-200 md:mt-5 my-5 text-wrap'>Grow and engage your audience with content strategies based on analyzing top-performing niche videos to uncover <span className='font-bold text-white'>key success patterns.</span></p>
            </div>
          </div>
        ),
    },
    {
        title: 'Automation for Efficiency',
        content: (
            <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="md:w-1/2 p-3">
              <p className='text-white-200 md:mt-5 my-5 text-wrap'><span className='font-bold text-white'>Boost efficiency</span> with email automation, process improvements, and Virtual Assistant support to save you time and enhance engagement.</p>
            </div>
            <div className="md:w-1/2">
              <img
                src="3house.jpeg"
                alt="3house.jpeg"
                className="rounded-lg object-cover h-40 md:h-44 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
    },
  ];

const PerfectSolution = () => {
  return (
    
    <div className='w-full pb-10 mb-[100px] md:mb-5 mt-40 z-40' id='Problem'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
    <h2 className=' lg:max-w-[40vw] font-bold text-2xl md:text-3xl text-center'>
       Our Game <span className='text-purple'>Plan</span>
    </h2>
        </div>
    <Timeline data={timelineData}  />
    </div>
  )
}

export default PerfectSolution
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '../data'
import { companies } from '../data'

const clients = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            Kind words from {''}
            <span className='text-purple'>collaborators</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center max-lg:mt-10'>
            <InfiniteMovingCards 
                items={testimonials}
                direction='right'
                speed='slow'
            />
        </div>
    </div>
  )
}

export default clients
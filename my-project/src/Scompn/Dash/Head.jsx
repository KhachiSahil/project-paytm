import React from 'react'
import Heading from '../Card/Heading'


function Head({ value }) {
  return (
    <div className='flex flex-row justify-between'>
      <div className='m-5'>
        <Heading text={value} />
      </div>
      <div className='text-cyan-700 flex mt-9 mr-10 '>
        <span className='mt-2 text-2xl text-cyan-700'>Hello! &nbsp;  </span> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg> 
        <span className='mt-2 text-2xl text-cyan-700'>Sahil</span>
      </div>
    </div>
  )
}

export default Head

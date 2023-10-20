import React from 'react'

export default function HeadingTitle({heading, subHeading}) {
  return (
    <div className='text-center'>
        <p className='text-orange-300'>---{subHeading}---</p>
        <div className='divider w-1/4 mx-auto'></div>
        <h1 className='uppercase text-4xl font-semibold'>{heading}</h1>
    </div>
  )
}

import React from 'react'
import { Parallax } from 'react-parallax';
export default function MenuCover({img, coverTitle}) {
  return (
    <Parallax
    blur={{ min: -50, max: 50 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-200}
>
<div className="hero h-[700px]" >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
      <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis quasi facilis nostrum fugiat possimus delectus, dolorem quibusdam dignissimos impedit, dolor ex nihil id exercitationem accusamus voluptatum ea expedita nesciunt!</p>
      
    </div>
    </div>
    </div>
</Parallax>
  
       
    
  )
}

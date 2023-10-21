import React from 'react'
import HeadingTitle from '../../../Components/HeadingTitle/HeadingTitle';
import './FeaturedItem.css'

import featureImg from '../../../assets/images/home/featured.jpg'

export default function FeaturedItem() {
  return (
    <div className='my-10 feature-item text-white pt-10 bg-fixed'>
        <HeadingTitle heading='Featured Item' subHeading='check it now' ></HeadingTitle>
        <div className='md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-50 my-10'>
        <div>
            <img src={featureImg} alt="" />
        </div>
        <div className='md:ml-10'>
            <p>Aug 20, 2029</p>
            <p className='uppercase'>When cam I get some?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ullam perferendis reprehenderit exercitationem quo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ullam perferendis reprehenderit exercitationem quo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ullam perferendis reprehenderit exercitationem quo </p>
            <div className="btn btn-warning">Order Now</div>
        </div>
        </div>
    </div>
   
  )
}

import React from 'react'
import Banner from '../Banner/Banner'
import OrderOnline from '../OrderOnline/OrderOnline'
import PopularMenuItems from '../PopulerMenuItems/PopularMenuItems'
import FeaturedItem from '../FeaturedItem/FeaturedItem'
import Testimonials from '../Testimonials/Testimonials'

export default function Home() {
  return (
    <>
        <Banner></Banner>
        <OrderOnline></OrderOnline>
        <PopularMenuItems></PopularMenuItems>
        <FeaturedItem></FeaturedItem>
        <Testimonials></Testimonials>
    </>
  )
}

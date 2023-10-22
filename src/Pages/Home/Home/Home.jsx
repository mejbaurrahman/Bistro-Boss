import React from 'react'
import Banner from '../Banner/Banner'
import OrderOnline from '../OrderOnline/OrderOnline'
import PopularMenuItems from '../PopulerMenuItems/PopularMenuItems'
import FeaturedItem from '../FeaturedItem/FeaturedItem'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Bistro Boss | Home</title>
    </Helmet>
        <Banner></Banner>
        <OrderOnline></OrderOnline>
        <PopularMenuItems></PopularMenuItems>
        <FeaturedItem></FeaturedItem>
        <Testimonials></Testimonials>
    </>
  )
}

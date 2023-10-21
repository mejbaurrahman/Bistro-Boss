import React from 'react'
import Banner from '../Banner/Banner'
import OrderOnline from '../OrderOnline/OrderOnline'
import PopularMenuItems from '../PopulerMenuItems/PopularMenuItems'

export default function Home() {
  return (
    <>
        <Banner></Banner>
        <OrderOnline></OrderOnline>
        <PopularMenuItems></PopularMenuItems>
    </>
  )
}

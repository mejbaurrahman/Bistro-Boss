import React, { useState } from 'react'
import MenuCover from '../../../Shared/MenuCover/MenuCover';
import orderImg from '../../../assets/images/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import useMenu from '../../../Hooks/useMenu';

export default function Order() {
  const [menu, loading] = useMenu()
    const categories = ['salad','pizza','soup','dessert','drinks']
    const {category} = useParams()

    const initalIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initalIndex);
  
    const saladMenu = menu.filter(item => item.category ==='salad')
    
    const soupMenu = menu.filter(item => item.category ==='soup')
    const dessertMenu = menu.filter(item => item.category ==='dessert')
    const pizzaMenu = menu.filter(item => item.category ==='pizza')
    const drinkMenu = menu.filter(item => item.category ==='drinks')
  return (
    <div>
        <Helmet>
        <title>Bistro Boss | Order</title>
        </Helmet>
        <MenuCover img={orderImg} coverTitle='our order'></MenuCover>
        <div className='my-10'>


 
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUPS</Tab>
        <Tab>DESSERT</Tab>
        <Tab>DRINKS</Tab>
      </TabList>
      <TabPanel>
        <OrderTab items={saladMenu}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={pizzaMenu}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={soupMenu}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={dessertMenu}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={drinkMenu}></OrderTab>
      </TabPanel>
      
    </Tabs>


        </div>
    </div>
  )
}

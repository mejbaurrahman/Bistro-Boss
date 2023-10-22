import React from 'react'
import { Helmet } from 'react-helmet-async'
import MenuCover from '../../../Shared/MenuCover/MenuCover'
import menuImg from '../../../assets/images/menu/banner3.jpg'
import MenuCategory from '../MenuCategory/MenuCategory';
import desertImg from '../../../assets/images/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/images/menu/pizza-bg.jpg'
import saladImg from '../../../assets/images/menu/salad-bg.jpg'
import soupImg from '../../../assets/images/menu/soup-bg.jpg'
export default function Menu() {
  return (
    <div>
        <Helmet>
      <title>Bistro Boss | Our Menu</title>
        </Helmet>
        <MenuCover img={menuImg} coverTitle='our menu'></MenuCover>
        <MenuCategory heading='Today offer'  subHeading={`Don't Miss`} category='offered'></MenuCategory>
        <MenuCover img={desertImg} coverTitle='dessert'></MenuCover>
        <MenuCategory heading='dessert'  subHeading={`Don't Miss`} category='dessert'></MenuCategory>
        <MenuCover img={saladImg} coverTitle='salads'></MenuCover>
        <MenuCategory heading='Salads'  subHeading={`Don't Miss`} category='salad'></MenuCategory>
        <MenuCover img={pizzaImg} coverTitle='pizzas'></MenuCover>
        <MenuCategory heading='pizza'  subHeading={`Don't Miss`} category='pizza'></MenuCategory>
        <MenuCover img={soupImg} coverTitle='soups'></MenuCover>
        <MenuCategory heading='soups'  subHeading={`Don't Miss`} category='soup'></MenuCategory>
    </div>
  )
}

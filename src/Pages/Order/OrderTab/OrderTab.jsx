import React from 'react'
import FoodCard from '../../../Components/FoodCard/FoodCard'

export default function OrderTab({menu}) {
  return (
    <div className='grid grid-cols-3 gap-4'>
          {menu.map(item => (
            <FoodCard key={item.id} item={item}></FoodCard>
          ))}
    </div>
  )
}

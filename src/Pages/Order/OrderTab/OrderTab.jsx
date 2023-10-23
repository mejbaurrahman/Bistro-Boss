import React from 'react'
import FoodCard from '../../../Components/FoodCard/FoodCard'
import { useState } from 'react'

export default function OrderTab({items}) {
  const [currentPage, setCurrentPage] = useState(1)
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = items.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(items.length / recordPerPage)
  const numbers = [...Array(nPage+1)]

  return (
    <div className='grid grid-cols-3 gap-4'>
          {items.map(item => (
            <FoodCard key={item.id} item={item}></FoodCard>
          ))}
    </div>
  )
}

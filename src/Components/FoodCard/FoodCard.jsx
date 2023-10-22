import React from 'react'

export default function FoodCard({item}) {
    const {name, image, price, recipe} = item;
  return (
    
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button className="btn btn-warning">Order Now</button>
    </div>
  </div>
</div>
    
  )
}

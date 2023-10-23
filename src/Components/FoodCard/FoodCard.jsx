import React from 'react'
import useCart from '../../Hooks/useCart';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Swal from 'sweetalert2';

export default function FoodCard({item}) {
 
    const { name, image, price, recipe, _id } = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
  return (
    
 <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
      <button onClick={() => handleAddToCart(item)} className="btn btn-warning">Add To Cart</button>
    </div>
  </div>
</div>
    
  )
}

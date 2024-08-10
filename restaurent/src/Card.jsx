import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './feature/cartslice';
const Card = ({props}) => {
  let item=useSelector((state)=>state.cart.items);
console.log(item);
   const dispatch=useDispatch();
  return (
    <div>   
        <div className="card bg-base-100 w-96 h-96 shadow-xl overflow-scroll">
  <figure>
    <img
      src={props.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.name}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary">{props.price}</button>
      <button onClick={()=>dispatch(addToCart(item))} className="btn btn-primary">Buy Now</button>

    </div>
  </div>
         </div>
           
    </div>
  )
}

export default Card
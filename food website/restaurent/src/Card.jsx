import React, { useContext, useEffect, useState } from 'react'
import { Store } from './Global'

const Card = ({props}) => {
    let{addcart,setaddcart}=useContext(Store);
    let{Stock}=useContext(Store);
    let[Total,setTotal]=useState(0);
    let items=Stock;
  
  
    function handleclick(item){
      let user=items.find(x=>x.id===item.id)
       
      if (user) {
        setaddcart(addCart =>
            addCart.some(addCart_ke_element => addCart_ke_element.id === user.id)
                ? addCart
                : [...addCart, user]
              
        );
    }
  
    }
    useEffect(()=>{
      console.log(addcart)
     
    },[addcart])
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
      <button onClick={()=>handleclick(props)}  className="btn btn-primary">Buy Now</button>

    </div>
  </div>
         </div>
           
    </div>
  )
}

export default Card
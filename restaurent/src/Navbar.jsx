import React,{useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Store } from './Global';
import { FaCartArrowDown } from "react-icons/fa6";

const Navbar = () => {
  let{Query,setQuery}=useContext(Store);
  let{Stock}=useContext(Store);
  let [input,setinput]=useState('');
  useEffect(()=>{
     console.log(Query);
  },[Query]);
      let handleClick=()=>{
          setQuery(input);
          setinput("")
      } 
  return (
    <div>
       <div className="navbar bg-base-300">
  <div className="flex-1">
   <Link className="btn btn-ghost text-xl">Sher E Punjab</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input onChange={(e)=>{setinput(e.target.value)}} type="text" value={input} placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <button onClick={handleClick} className="btn btn-neutral">Search</button>
  <Link to='/basic'>
   <FaCartArrowDown className='font-bold text-2xl'/>
    </Link>
    
  </div>
</div>



    </div>
  )
}

export default Navbar
import React,{useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { Store } from './Global';
const Home = () => {
    let {Stock,Query}=useContext(Store);
    let[fooddata,setfooddata]=useState(Stock);
      useEffect(()=>{
          let newdata=Stock.filter(item => item.name.toLowerCase().includes(Query.toLowerCase()))
          
          setfooddata(newdata);    
      },[Query,Stock]);
  return (
    <div>
        <Navbar></Navbar>
        <div className='flex justify-center flex-wrap gap-3 pt-3 '> 
        {
            fooddata.map((obj_index_pe_value)=>{
               return <Card key={obj_index_pe_value.id} props={obj_index_pe_value}></Card>})
        }
        </div>
    </div>
  )
}

export default Home
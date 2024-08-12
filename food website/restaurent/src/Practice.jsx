import React,{useContext} from 'react'
import { Store } from './Global'
const Practice = () => {
    let{Stock}=useContext(Store);
    let sampledata;
       sampledata=Stock;
       console.log("sample data mein aa gyi value",sampledata);


   
    // console.log(Stock,"from practice");
  return (
    <div><p>practice</p>
      {Stock}</div>
  )
}

export default Practice
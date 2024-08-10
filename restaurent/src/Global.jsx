import { createContext, useState,useEffect } from 'react'
 export let Store = createContext();
const Global = (props) => {
    let [Stock,setStock]=useState([]);
    let[Query,setQuery]=useState("");
    let[search]=useState("");
    
    let array=  [
        {
            id:"1",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ321oD8PPlAakIa_zqLt_kFeToBplXfCsMug&s",
            price:"150.00",
            description:"'Rose water berry' or 'Rose berry') is a sweet confectionary or dessert, originating in the Indian ",
            name:"Gulab Jamun",
        },
        {
            id:"2",
            img:"https://thewoods.net.in/wp-content/uploads/2021/02/veg12.jpg",
            price:"140.00",
            description:" is a dish of stir-fried cooked rice vermicelli, curry powder, vegetables",
            name:"Chowmein",
        },
        {
            id:"3",
            img:"https://myfoodstory.com/wp-content/uploads/2022/04/Shahi-Paneer-1-500x500.jpg",
            price:"250.00",
            description:"Shahi paneer is a preparation of chhena or paneer, native to the Indian subcontinent, consisting of a thick gravy of cream, tomatoes and Indian spices.",
            name:"Shahi panner",
        },
        {
            id:"4",
            img:"https://www.indianveggiedelight.com/wp-content/uploads/2017/10/palak-paneer-recipe-featured.jpg",
            price:"250.00",
            description:"Palak paneer is a preparation of chhena or paneer, native to the Indian subcontinent, consisting of a thick gravy of cream, tomatoes and Indian spices.",
            name:"palak panner",
        },
        {
            id:"5",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpUhFg8cVtjoZUBnGG-WaK28fX2XrCzM-Cp5pFRKcpgNxNf-sBMvcqNTurA&s",
            price:"100.00",
            description:"What is pav bhaji Pav Bhaji is a spicy mashed vegetable dish, served piping hot with a dollop of butter, diced red onions, cilantro, and a squeeze of lime. ",
            name:"Pav bhaji"
    
        },
        {
              id:"6",
              img:"data:image/jpeg;base64,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",
              price:"60.00",
              description:"momos are prepared with ground/minced meat, potatoes, and leek filling. Nowadays, the fillings have become more elaborate and momos are prepared with virtually any combination of ground meat, vegetables", 
              name:"momos",
        },
    
        {
            id:"7",
            img:"data:image/jpeg;base64,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",
            price:"50.00",
            description:"A sandwich is a dish typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread,",
            name:"Grilled Sandwich",
        },
       ]
       
         useEffect(()=>{
           setStock(array)
         },[]);
        
  return (
    <Store.Provider value={{Stock,setStock,Query,setQuery,search}}>{props.children}</Store.Provider>
  )
}

export default Global
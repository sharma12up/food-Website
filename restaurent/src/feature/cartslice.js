import { createSlice } from '@reduxjs/toolkit';
import obj from '../Data';
const initialState={
    cart:[],
    items:obj,
    totalQuantity:0,
    totalprice:0,
};
export const cartSlice=createSlice({
    name: "cart",
    initialState,
    reducers:{
         addToCart:(state,action)=>{
            state.cart.push(action.payload);
         }
    },
})
export const{addToCart}=cartSlice.actions;
export default cartSlice.reducer;
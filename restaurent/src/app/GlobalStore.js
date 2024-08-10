import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../feature/cartslice';
const GlobalStore = configureStore({
  reducer: {
   cart:cartReducer, 
  },
});

export default GlobalStore;

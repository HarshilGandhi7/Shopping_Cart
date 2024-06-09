import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'
import cartReducer from './CartSlice'; 

export const store = configureStore({
  reducer: {
    cart:cartReducer,
  },
})
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload);
        },
        removeProduct:(state,action)=>{
            return state=state.filter((product)=>product.id!==action.payload);
        }
    }
})

export const {addProduct,removeProduct} = CartSlice.actions;
export default CartSlice.reducer;
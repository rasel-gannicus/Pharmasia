import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart : {
        totalPrice : 0 ,
    }
}


const productSlice =  createSlice({
    name : 'productSlice',
    initialState,
    reducers : {
        addTotalPrice : (state, action) => {
            state.cart.totalPrice = action.payload ; 
        }
    }
})



export const { addTotalPrice } = productSlice.actions;
export default productSlice.reducer;
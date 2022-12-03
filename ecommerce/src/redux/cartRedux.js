import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    isFetching:false,
    error:false
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products=[...state.products,action.payload];
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
        state.quantity -=1
      const newCart= state.products
      const objIndex= newCart.findIndex((obj)=>obj._id==action.payload._id)
      newCart.splice(objIndex,1)
      state.products=[...newCart]
      state.total -= action.payload.price * action.payload.quantity;
    },
    clearCart:(state)=>{
      state.quantity=0
      state.products=[]
      state.quantity= 0
      state.total= 0
    }
  },
});

export const { addProduct, deleteProduct,clearCart } = cartSlice.actions;
export default cartSlice.reducer;

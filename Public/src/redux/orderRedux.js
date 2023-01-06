import { createSlice } from "@reduxjs/toolkit";
//for checking
const orderSlice = createSlice({
  name: "order",
  initialState: {
   orderDetail:null,
   isFetching:false,
    error:false
  },
  reducers: {
    orderStart: (state)=>{
        state.isFetching=true
      },
      orderSuccess: (state,action)=>{
        state.isFetching=false;
        state.currentUser=action.payload
      },
      orderFailure: (state)=>{
        state.isFetching=false
        state.error=true
      }
    },
  },
);

export const { orderStart,orderSuccess,orderFailure } = orderSlice.actions;
export default orderSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
//for checking
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    resStart: (state) => {
      state.isFetching = true;
    },
    resSuccess: (state) => {
      state.isFetching = false;
    },
    resFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    changeStart: (state) => {
      state.isFetching = true;
    },
    changeSuccess: (state) => {
      state.isFetching = false;
    },
    changeFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  resStart,
  resSuccess,
  resFailure,
  changeStart,
  changeSuccess,
  changeFailure,
} = userSlice.actions;
export default userSlice.reducer;

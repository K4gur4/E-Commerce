import {loginStart,loginFailure, loginSuccess, resStart, resSuccess, resFailure
} from "./userRedux"

import {getProductStart,getProductSuccess,getProductFailure,deleteProductStart,deleteProductSuccess,deleteProductFailure,updateProductFailure,updateProductStart,updateProductSuccess,addProductFailure,addProductStart,addProductSuccess} from './productRedux'
import {publicRequest, userRequest} from "../resquestMethods"
export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res= await publicRequest.post("/auth/login",user)
        alert("đăng nhập thành công")
        dispatch(loginSuccess(res.data))
    } catch (error) {
      alert("đăng nhập thất bại")
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch)=>{
    dispatch(getProductStart());
    try {
        const res= await publicRequest.get("product/")
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}

export const deleteProducts = async (id,dispatch)=>{
    dispatch(deleteProductStart());
    try {
        // const res= await userRequest.delete(`product/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
}


export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
          const res = await userRequest.post(`product/`,id, product);
      // update
      dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };


  export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`product/`, product);
      dispatch(addProductSuccess(res.data.newProduct));
      alert("Thêm sản phẩm thành công")
    } catch (err) {
      console.log(err.message);
      dispatch(addProductFailure());
      alert("Thêm sản phẩm thất bại")
    }
  };


  export const register = async (dispatch,user)=>{
    dispatch(resStart());
    try {
        const res= await publicRequest.post("auth/register",user)
        dispatch(resSuccess(res.data))
        alert("Thêm người dùng thành công")
    } catch (error) {
      console.log(error.message);
      dispatch(resFailure())
      alert("Thêm người dùng thất bại")
    }
}














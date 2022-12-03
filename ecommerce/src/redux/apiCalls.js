import {loginStart,loginFailure, loginSuccess,resStart,resSuccess,resFailure} from "./userRedux"
import {publicRequest,orderRequest} from "../resquestMethods"
import { orderStart,orderSuccess,orderFailure } from "./orderRedux";
import { clearCart } from "./cartRedux";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accsessToken;
export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res= await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch,user)=>{
    dispatch(resStart());
    try {
        const res= await publicRequest.post("/auth/register",user)
        dispatch(resSuccess(res.data))
    } catch (error) {
        dispatch(resFailure())
    }
}

export const createCart=async (dispatch,cart)=>{


}

export const createOrder = async (dispatch,order)=>{
    dispatch(orderStart());
    try {
        const res= await orderRequest.post("/order/",order,{headers:{
            'token':`Bearer ${TOKEN}`
        }})
        dispatch(orderSuccess(res.data))
        alert('Đơn hàng đã được tạo, hãy kiểm tra giỏ hàng, cảm ơn bạn đã lựa chọn 7DECEMBER')
        dispatch(clearCart())
    } catch (error) {
        dispatch(orderFailure())
    }
}








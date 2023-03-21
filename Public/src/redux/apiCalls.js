import {
  loginStart,
  loginFailure,
  loginSuccess,
  resStart,
  resSuccess,
  resFailure,
  changeStart,
  changeFailure,
  changeSuccess,
} from "./userRedux";
import { publicRequest, orderRequest } from "../resquestMethods";
import { orderStart, orderSuccess, orderFailure } from "./orderRedux";
import { clearCart } from "./cartRedux";

//for checking
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accsessToken;
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(resStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(resSuccess(res.data));
  } catch (error) {
    console.log(error.message);
    dispatch(resFailure());
    alert('Có lỗi, hãy thử lại!!!')
  }
};

export const changePass = async (dispatch, id, pass) => {
  dispatch(changeStart());
  try {
    const res = await publicRequest.put(`/user/${id}`, pass, {
      headers: {
        token: `Bearer ${TOKEN}`,
      },
    });
    dispatch(changeSuccess(res.data));
  } catch (error) {
    alert(error.message);
    dispatch(changeFailure());
  }
};

export const createOrder = async (dispatch, order) => {
  dispatch(orderStart());
  try {
    const res = await orderRequest.post("/order/", order, {
      headers: {
        token: `Bearer ${TOKEN}`,
      },
    });
    dispatch(orderSuccess(res.data));
    dispatch(clearCart());
  } catch (error) {
    console.log(error.message);
    dispatch(orderFailure());
  }
};

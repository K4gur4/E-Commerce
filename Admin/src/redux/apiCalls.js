import {
  loginStart,
  loginFailure,
  loginSuccess,
  resStart,
  resSuccess,
  resFailure,
  changeStart,
  changeSuccess,changeFailure
} from "./userRedux";
//for checking
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import { publicRequest, userRequest } from "../resquestMethods";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    alert("đăng nhập thành công");
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("product/");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`product/`, product);
    dispatch(addProductSuccess(res.data.newProduct));
    alert("Thêm sản phẩm thành công");
  } catch (err) {
    console.log(err.message);
    dispatch(addProductFailure());
    alert("Thêm sản phẩm thất bại");
  }
};

export const register = async (dispatch, user) => {

  dispatch(resStart());
  try {
    const res = await publicRequest.post("auth/register", user);
    dispatch(resSuccess(res.data));
    alert("Thêm người dùng thành công");
  } catch (error) {
    console.log(error.message);
    dispatch(resFailure());
    alert("Thêm người dùng thất bại");
  }
};

export const updateProduct = async (dispatch,id, product) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`product/${id}`, product);
    alert("Cập nhật sản phảm thành công");
    dispatch(updateProductSuccess());
  } catch (err) {
    dispatch(updateProductFailure());
    alert("Cập nhật sản phẩm thất bại");
  }
};

export const updateUser = async (dispatch,id,update)=>{

  dispatch(changeStart());
  try {
      const res= await userRequest.put(`/user/${id}`,update)
      dispatch(changeSuccess(res.data))
      alert('Thay đổi thông tin thành công')
  } catch (error) {
      alert('Suất hiện lỗi',error.message)
      dispatch(changeFailure())
  }
}
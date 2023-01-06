
import styled from "styled-components";
import Home from "./pages/home.jsx";
import UserList from "./pages/userList.jsx";
import { BrowserRouter, Routes, Route, Navigate,Outlet } from "react-router-dom";
import User from "./pages/user.jsx";
import NewUser from "./pages/newUser.jsx";
import Products from "./pages/productsList.jsx";
import Product from "./pages/product.jsx";
import NewProduct from "./pages/newProduct.jsx";
import Login from "./pages/login.jsx";
import OrderList from "./pages/orderlist.jsx";
import Order from "./pages/order.jsx";
import { useState } from "react";
import PrivateRoutes from "./privateRoute.jsx";
import PublicRoutes from "./publicRoute.jsx";
//for checking
const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;
//for checking
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoutes/>}>
          <Route element={<Home /> } exact path="/home"/>
           <Route element={<UserList />} path="/users"/>
           <Route element={<User />} path="/user/:id"/>
           <Route element={<NewUser />} path="/newUser"/>
           <Route element={<Products />} path="/products"/>
           <Route element={<Product />} path="/product/:id"/>
           <Route element={<NewProduct />} path="/newProduct"/>
           <Route element={<OrderList />} path="/orderList"/>
           <Route element={<Order />} path="/order/:id"/>
      </Route>
      <Route element={<PublicRoutes/>} exact path='/'>
      <Route element={<Login /> } exact path="/login"/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

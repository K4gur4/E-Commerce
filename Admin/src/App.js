import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import styled from "styled-components";
import Home from "./pages/home.jsx";
import UserList from "./pages/userList.jsx";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import User from "./pages/user.jsx";
import NewUser from "./pages/newUser.jsx";
import Products from "./pages/productsList.jsx";
import Product from "./pages/product.jsx";
import NewProduct from "./pages/newProduct.jsx";
import Login from "./pages/login.jsx";
import OrderList from "./pages/orderlist.jsx";
import Order from "./pages/order.jsx";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  )?.currentUser?.dataLogin?.isAdmin;
  console.log(admin);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">{admin ? <Redirect to="/" /> : <Login />}</Route>
        {admin && (
          <>
            <Topbar />
            <Container>
              <Sidebar />
              <Route exact path="/">
                {/* {admin ? <Redirect to="/login" /> :( <Home />) } */}
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:id">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/product/:id">
                <Product />
              </Route>
              <Route path="/newProduct">
                <NewProduct />
              </Route>
              <Route path="/orderList">
                <OrderList />
              </Route>
              <Route path="/order/:id">
                <Order />
              </Route>
            </Container>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

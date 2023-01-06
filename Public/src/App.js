import Cart from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import ProductList from "./pages/ProductList";
import Register from "./pages/register";
import Order from "./pages/order";
import User from "./pages/user";
import UserOrder from "./pages/userOrder";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//for checking
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/userOrder/:id">
          <UserOrder />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;

import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import React, { useState } from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { clearCart } from "../redux/cartRedux";
import { useHistory } from "react-router-dom";
//for checking
const Container = styled.div`
  height: 60px;
  background: #a8a8a8;
  color: white;
  ${mobile({zIndex: "3"
  ,position: "sticky" ,width:"100%"})}
`;
const Wapper = styled.div`
  flex: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ display: "none" })}
`;
const Logo = styled.h1`
  font-weight: bolder;
  cursor: pointer;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  padding: 10px 0px;
`;

const Left = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "space-around" ,width:"100%"})}
`;

const Center = styled.div`
  flex: 30%;
  text-align: center;
  ${mobile({ fontSize: "10px" })}
`;
const Right = styled.div`
  flex: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    color: "white",
    flexDirection: "column",
    alignItems: "flex-start",
  })}
`;

const Itemlist = styled.div`
  display: flex;
  justify-content: space-around;
  font-weight: bolder;
  ${mobile({ background: "white", color: "black", fontSize: "15px" })}
`;

const Item = styled.span`
  cursor: pointer;
  align-items: center;
  ${mobile({ padding: "20px" })}
`;
const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  font-size: 45px;
  cursor: pointer;
  display: none;
  ${mobile({ display: "inline" })}
`;
const ExtendWrapper = styled.div`
  background: gray;
  display: flex;
  align-items: center;
  display: none;
  z-index: 3;
  position: relative;
  ${mobile({ display: "block" })}
`;

const Navbar = () => {
  const [extend, setExtend] = useState(false);

  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const disPatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    console.log("User log Out");
    disPatch(logout());
    disPatch(clearCart());
    let path = `/`;
    history.push(path);
  };

  const handleUser = () => {
    let path = `/user/${user.dataLogin?.username}`;
    history.push(path);
  };
  const handleUserOrder = () => {
    let path = `/userOrder/${user.dataLogin?._id}`;
    history.push(path);
  };

  const handleHome = () => {
    let path = `/`;
    history.push(path);
  };

  const handleMouse = () => {
    let path = `/products/mouse`;
    history.push(path);
  };

  const handleKey = () => {
    let path = `/products/keyboard/`;
    history.push(path);
  };

  const handleHead = () => {
    let path = `/products/headphone/`;
    history.push(path);
  };

  const handleLogin = () => {
    let path = `/login/`;
    history.push(path);
  };

  const handleRegister = () => {
    let path = `/register/`;
    history.push(path);
  };

  const data = user?.dataLogin;

  return (
    <Container extend={extend}>
      <OpenLinksButton
        onClick={() => {
          setExtend((curr) => !curr);
        }}
      >
        {extend ? <> &#10005;</> : <> &#8801;</>}
      </OpenLinksButton>

      <Wapper>
        <Left>
          <Logo onClick={handleHome}> 7DECEMBER. </Logo>
        </Left>
        <Center>
          <Itemlist>
            <Item onClick={handleMouse}>CHUỘT</Item>
            <Item onClick={handleKey}>BÀN PHÍM</Item>
            <Item onClick={handleHead}>TAI NGHE</Item>
          </Itemlist>
        </Center>
        <Right>
          {!user ? (
            <>
              <MenuItem onClick={handleLogin}>ĐĂNG NHẬP</MenuItem>

              <MenuItem onClick={handleRegister}>ĐĂNG KÝ</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={handleUser}>
                Xin chào {data?.username}
              </MenuItem>

              <MenuItem onClick={handleUserOrder}>Đơn hàng</MenuItem>

              <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
            </>
          )}

          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wapper>
      {extend && (
        <ExtendWrapper>
          <Left>
            <Logo onClick={handleHome}> 7DECEMBER. </Logo>

            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </Left>
          <Center>
            <Itemlist>
              <Itemlist>
                <Item onClick={handleMouse}>CHUỘT</Item>
                <Item onClick={handleKey}>BÀN PHÍM</Item>
                <Item onClick={handleHead}>TAI NGHE</Item>
              </Itemlist>
            </Itemlist>
          </Center>

          <Right>
            {!user ? (
              <>
                
                  <MenuItem onClick={handleLogin}>ĐĂNG NHẬP</MenuItem>
               
               
                  <MenuItem onClick={handleRegister}>ĐĂNG KÝ</MenuItem>
                
              </>
            ) : (
              <>
                <MenuItem onClick={handleUser}>
                  Xin chào {data?.username}
                </MenuItem>

                <MenuItem onClick={handleUserOrder}>Đơn hàng</MenuItem>

                <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
              </>
            )}
          </Right>
        </ExtendWrapper>
      )}
    </Container>
  );
};

export default Navbar;

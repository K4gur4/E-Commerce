import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Logo = styled.h1`
  font-weight: bolder;
  ${mobile({ fontSize: "20px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "10px", marginLeft: "3px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Itemlist= styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 50px;
  ${mobile({ display:"hidden"})}
`

const Item= styled.h3`
cursor: pointer;

`

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const disPatch= useDispatch()
  const history= useHistory()
  const handleLogout = () => {
    console.log("User log Out");
    disPatch(logout())
    let path= `/`
    history.push(path)
  };
  const data =user?.dataLogin;
  
  return (
    <Container>
      <Wapper>
        <Left>
          <Link to="/">
            <Logo> 7DECEMBER. </Logo>
          </Link>
        </Left>
        <Center>
          <Itemlist>
          <Link to={`/products/mouse`}>
            <Item>CHUỘT</Item>
          </Link>
          <Link to={`/products/keyboard`}>
            <Item>BÀN PHÍM</Item>
          </Link> 
          <Link to={`/products/headphone`}>
            <Item>TAI NGHE</Item>
          </Link>
          </Itemlist>
        
        </Center>
        <Right>
          {!user ? (
            <>
              <Link to="/login">
                <MenuItem>ĐĂNG NHẬP</MenuItem>
              </Link>
              <Link to="/register">
                <MenuItem>ĐĂNG KÝ</MenuItem>
              </Link>
            </>
          ) : (
            <>
            <Link to={`/user/${user.dataLogin?.username}`}>
              <MenuItem>Xin chào {data?.username}</MenuItem>
            </Link>
            <Link to={`/userOrder/${user.dataLogin?._id}`}>
            <MenuItem>Đơn hàng</MenuItem>
            </Link>

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
    </Container>
  );
};

export default Navbar;

import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px"})}
`;
const Wapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "30px" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none" })}
`;
const Logo = styled.h1`
  font-weight: bolder;
  ${mobile({ fontSize: "20px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "10px" , marginLeft:"3px"})}
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
  ${mobile({flex:2, justifyContent: "center" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wapper>
        <Left>
          <Language>VN</Language>
          <SearchContainer>
            <Input placeholder="Tìm kiếm" />
            <Search style={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo> 7DECEMBER. </Logo>
        </Center>
        <Right>
          <MenuItem>ĐĂNG KÝ</MenuItem>
          <MenuItem>ĐĂNG NHẬP</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wapper>
    </Container>
  );
};

export default Navbar;

import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`
  height: 60px;
`;
const Wapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Logo = styled.h1`
  font-weight: bolder;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
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
`;

const Navbar = () => {
  return (
    <Container>
      <Wapper>
        <Left>
          <Language>VN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize:20}} />
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

import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
//for checking
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  transition: all 0.5 ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1 1 0;
  margin: 5px;
  max-width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`;
const Image = styled.img`
  height: 80%;

  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5 ease;
  &:hover {
    background-color: #ffffff;
    transform: scale(1.1);
  }
`;
const Title = styled.h3`
  align-items: center;
  color: white;
  text-shadow: 2px 2px black;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Product = ({ product }) => {
 
  return (
    <Container>
      <Image src={product.img} alt={product.title} />
      <Info>
        <Title>{product.title}</Title>
        <IconContainer>
          <Icon>
            <Link to={`/product/${product._id}`}>
            <SearchOutlinedIcon />
            </Link>
          </Icon>
        </IconContainer>
      </Info>
    </Container>
  );
};

export default Product;

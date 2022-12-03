import styled from "styled-components";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/cartRedux";
import { Link, useHistory } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  border: 2px solid teal;
  padding: 10px;
  max-width: fit-content;
  border-radius: 10%;
  margin: 0px 5px;
  cursor: pointer;
`;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const DeleteIcon = styled.p`
  cursor: pointer;
`;
const ErrorUser = styled.div``;

const Cart = () => {
  const dispatch = useDispatch();
  const history= useHistory()
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const createOrder= ()=>{
    if(cart.products.length==0){
      alert("Giỏ hàng đang rỗng, hãy mua sắm gì đi!!!")
    }
    else{
     const path= "/order"
    history.push(path) 
    }
  }

  const handleDel = (item) => {
    dispatch(deleteProduct(item));
  };
  console.log("product",cart.products.length);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>GIỎ HÀNG CỦA BẠN</Title>
        <Top>
          <Link to={`/`}>
            <TopButton>TIẾP TỤC MUA SẮM</TopButton>
          </Link>
        </Top>
          <Bottom>
            <Info>
              {
              cart.products.map((product) => (
                <Product>
                  <ProductDetail>
                    <Image src={product.img}></Image>
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor>{product.color} </ProductColor>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <ProductAmount>{product.quantity}</ProductAmount>
                    </ProductAmountContainer>
                    <ProductPrice>
                      {(product.price * product.quantity).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} 
                    </ProductPrice>
                    <DeleteIcon onClick={() => handleDel(product)}>
                      remove item
                    </DeleteIcon>
                  </PriceDetail>
                </Product>
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>Tổng giỏ hàng</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Tổng giá sản phẩm</SummaryItemText>
                <SummaryItemPrice>{cart.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Phí vận chuyển</SummaryItemText>
                <SummaryItemPrice>
                  {cart.total > 1000000 ? 0 : cart.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) / 5} VND
                </SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Hỗ trợ phí vận chuyển</SummaryItemText>
                <SummaryItemPrice></SummaryItemPrice>
              </SummaryItem>

              <SummaryItem type="total">
                <SummaryItemText>Tổng Cộng</SummaryItemText>
                <SummaryItemPrice>
                  {cart.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) + (cart.total > 1000000 ? 0 : cart.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) / 5)}
                </SummaryItemPrice>
              </SummaryItem>
                <SummaryButton onClick={createOrder} disabled={user ? false : true}>
                  Thanh Toán
                </SummaryButton>
        
              <ErrorUser hidden={!user ? false : true}>
                bạn chưa đăng nhập
              </ErrorUser>
            </Summary>
          </Bottom>
      
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

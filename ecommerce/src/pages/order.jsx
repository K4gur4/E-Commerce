import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { createOrder } from "../redux/apiCalls";
import { useHistory } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const ShipInfor = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 30%;
`;
const Right = styled.div`
  width: 50%;
`;

const Center = styled.div`
  width: 100%;
  font-size: 15px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 90%;
  margin: 10px 0;
  padding: 10px;
`;

const InputTitle = styled.p``;

const Title2 = styled.h3`
  font-weight: 300;
  text-align: center;
`;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  display: block;
`;
const Select = styled.select`
  margin: 50px 0px;
  text-align: center;
  width: 70%;
  height: 30px;
`;
const Option = styled.option``;
const WrapperPay = styled.div`
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  max-height: 40vh;
  overflow-y: scroll;
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

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;


const ProductColor = styled.div``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmount = styled.div`
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div``;
const Order = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser.dataLogin._id);
  const cart = useSelector((state) => state.cart.products);
  const Carttotal = useSelector((state) => state.cart.total);
  const [userId, setUserId] = useState(user);
  const [products, setProduct] = useState( cart )
  const [total, setTotal] = useState(Carttotal);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const history=useHistory()
  const handleOrder = () => {
    if(!name||!address||!phone){
      alert("Hãy điền đủ thông tin trước khi thanh toán!!")
    }
    else{
      createOrder(dispatch, { userId, products, total, name, address, phone });
    setTotal(0)
    const path="/"
    history.push(path) 
    }
   
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>THANH TOÁN VÀ VẬN CHUYỂN</Title>
        <ShipInfor>
          <Left>
            <Title2>Thông tin vận chuyển</Title2>
            <InputTitle>Username ID : {user}</InputTitle>
            <InputTitle>Tên người nhận</InputTitle>
            <Input
              type={"text"}
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
            <InputTitle>Địa chỉ</InputTitle>
            <Input
              type={"text"}
              required={true}
              onChange={(e) => setAddress(e.target.value)}
            />
            <InputTitle>Số điện thoại</InputTitle>
            <Input
              type={"number"}
              required={true}
              onChange={(e) => setPhone(e.target.value)}
            />
          
  
          </Left>
          <Right>
            {" "}
            <Center>
              <Title2>Sản phẩm đã chọn</Title2>
              <Info>
                {cart.map((product) => (
                  <Product>
                    <ProductDetail>
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title} x {product.quantity}
                        </ProductName>
                        <ProductColor>{product.color} </ProductColor>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductPrice>
                        {(product.price * product.quantity).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} 
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                ))}
              </Info>
            </Center>
            <WrapperPay>
              <Title2>Tổng cộng</Title2>
              <h1>{total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h1>
              <Select>
                <Option value={"0"} disabled defaultValue>
                  Phương thức thanh toán
                </Option>
                <Option value={"1"}>Thanh toán khi nhận hàng</Option>
              </Select>
              <SummaryButton onClick={handleOrder}>Thanh toán</SummaryButton>
            </WrapperPay>
          </Right>
        </ShipInfor>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Order;

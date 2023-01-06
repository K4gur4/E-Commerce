import { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { cartRequest, orderRequest } from "../resquestMethods";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
//for checking

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid gray;
  margin: 10px 10px;
  justify-content: space-between;
  background: gray;
  box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75) ;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const User = styled.p`
  font-size: 15px;
  color: white;
`;
const Address = styled.p`
  font-size: 15px;
  color: white;
`;

const ProductInfor = styled.div`
  display: flex;
  flex-direction: column;
  font-size: smaller;
`;
const ProductName = styled.div``;
const Total = styled.div`
  color: white;
`;
const Status = styled.div`
  border: 1px solid;
  width: fit-content;
  padding: 5px;
  border: none;
  border-radius: 10px;
  color: white;
  background: ${(props) =>
    props.value === "Đã xác nhận"
      ? "#2fff2b"
      : props.value === "Đã giao"
      ? "#47f7b3"
      : props.value === "Đã hủy"
      ? "#fa3542"
      : "#ebf1fe"};
  color: black;
`;
const Left = styled.div``;
const Right = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Center = styled.div``
const UserOrder = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [orders, setOrder] = useState();
  useEffect(() => {
    const URL = "http://localhost:5000/order/find/";
    const getOrders = async () => {
      try {
        const res = await axios.get(URL + `${user.dataLogin._id}`, {
          headers: { token: `Bearer ${user.accsessToken}` },
        });
        console.log(res);
        setOrder(res.data.userOrder);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [user.accsessToken,user.dataLogin._id]);

  console.log("order", orders);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Đơn hàng của bạn</Title>
      {orders?.map((item) => (
        <Wrapper>
          <Left>
            <User>Người nhận: {item.name}</User>
            <Address>
              Địa chỉ: {item.address} - {item.city}
            </Address>
            <Address>SĐT: {item.phone}</Address>
          </Left>
          <Center>
  
          </Center>
          <Right>
            <Total>
              {
                item.total.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
            </Total>
            <Status value={item.status}>{item.status}</Status>
          </Right>

         
        </Wrapper>
      ))}

      <Footer />
    </Container>
  );
};

export default UserOrder;

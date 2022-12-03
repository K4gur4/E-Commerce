import { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { cartRequest, orderRequest } from "../resquestMethods";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

const Container = styled.div``;
const Wrapper = styled.div`
display: flex;
  padding: 20px;
  border: 1px solid gray;
  margin: 2px;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const User =styled.p`
`
const Address= styled.p``

const ProductInfor = styled.div`
display: flex;
flex-direction: column;
font-size: smaller;
`
const ProductName= styled.div``
const Total= styled.div``
const Status= styled.div`
border: 1px solid blue;
padding: 3px;

`


const UserOrder = ()=>{
    const user=useSelector(state=>state.user.currentUser)
const [orders,setOrder]= useState()
useEffect(()=>{
  const URL="http://localhost:5000/order/find/"
const getOrders= async ()=>{
try {
  const res = await axios.get(
    URL+`${user.dataLogin._id}`,{headers:{'token':`Bearer ${user.accsessToken}`}}
  )
  setOrder(res.data)
} catch (error) {
  console.log(error);
}
}
getOrders()
},[])

console.log("order",orders);
    return(
        <Container>
        <Navbar/>
        <Announcement/>
            <Title>Đơn hàng</Title>
            {orders?.map((item)=>(
            <Wrapper>
              <User>Người nhận: {item.name}</User>
              <Address>Địa chỉ:{item.address}</Address>
              {/* {
                item.products?.map((product)=>(
                  <ProductInfor>
                      <ProductName>{product.title}X{product.quantity}={product.price*product.quantity}</ProductName>
              </ProductInfor>
                ))
              } */}
              <Total> Tổng cộng {item.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</Total>
              <Status>{item.status}</Status>
            </Wrapper>
            ))}

            <Footer/>
        </Container>

)

}

export default UserOrder
import { useEffect, useState } from "react";
import styled from "styled-components";
import { userRequest } from "../resquestMethods";
//for checking
const Container = styled.div`
  flex: 2;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const WidgetTable = styled.table`
width: 100%;
border-spacing: 20px;

`;
const WidgetTableTr = styled.tr``;

const WidgetTableTh = styled.th`
text-align: left;
`;
const WidgetTableTd = styled.td``;

const WidgetTableImg = styled.img``;
const WidgetTableName = styled.span`
`;
const WidgetTableDate = styled.span`
font-weight: 300;

`;
const WidgetTableAmount = styled.span`
font-weight: 300;
`;
const WidgetTableStatus = styled.span``;
const WidgetTableButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background: ${(props) =>
    props.type === "Đã xác nhận"
      ? "#e5faf2"
      : props.type === "Đã giao"
      ? "#e5faf2"
      : props.type === "Đã hủy"
      ? "#fff0f1"
      : "#ebf1fe"};
    color: black;
`;

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <WidgetTableButton type={type}>{type}</WidgetTableButton>;
  };

  const [orders,setOrders]= useState([])
   

    useEffect(()=>{
       const getOrders = async ()=>{
        try {
            const res= await userRequest.get("order/")
            setOrders(res.data.allOrder)
        } catch (error) {
            console.log(error.message);
        }
    }
      getOrders()
    },[])

    const gettime =(time)=>{
      const date = new Date(time)
      return date.getDate()+'-'+ (date.getMonth()+1) + '-'+date.getFullYear()
    }
  return (
    <Container>
      <Title>Đơn hàng gần nhất</Title>
      <WidgetTable>
        <thead>
          <WidgetTableTr>
          <WidgetTableTh>Khách hàng</WidgetTableTh>
          <WidgetTableTh>Ngày tạo</WidgetTableTh>
          <WidgetTableTh>Tổng cộng</WidgetTableTh>
          <WidgetTableTh>Trạng thái</WidgetTableTh>
        </WidgetTableTr>
        </thead>
        <tbody>
          {
            orders.map((order)=>(
               <WidgetTableTr key={order._id}>
          <WidgetTableTd>
            <WidgetTableName>{order.name}</WidgetTableName>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableDate>{gettime(order.createdAt)}</WidgetTableDate>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableAmount>{order.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</WidgetTableAmount>
          </WidgetTableTd>
          <WidgetTableTd>
            <WidgetTableStatus>
              <Button type={order.status} />
            </WidgetTableStatus>
          </WidgetTableTd>
        </WidgetTableTr>
            ))
          }
        </tbody>
      </WidgetTable>
    </Container>
  );
};

export default WidgetLg;

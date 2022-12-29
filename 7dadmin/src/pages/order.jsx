import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { userRequest } from "../resquestMethods";
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const UserOrder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Bot = styled.div`
 box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
 margin: 10px 0px;
`;
const Title = styled.h1``;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  margin: 5px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin: 5px;
`;
const OrderInfor = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderInforItem = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
`;

const OrderInforData = styled.span`
  margin-left: 10px;
`;
const OrderInforKey = styled.span`
  margin-left: 10px;
`;

const StatusSelect = styled.select``;
const StatusOption = styled.option``;
const UpdateStatusBtn = styled.button`
  width: 200px;
  padding: 7px 10px;
  border: none;
  background-color: gray;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 60px;
`;
const OrderInforStatus = styled.span`
text-align: center;
  margin-left: 10px;
  width: 100px;
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background: ${(props) =>
    props.type === "Đã xác nhận"
      ? "#2fff2b"
      : props.type === "Đã giao"
      ? "#47f7b3"
      : props.type === "Đã hủy"
      ? "#fa3542"
      : "#ebf1fe"};
  color: black;
`;


const ProductInfo= styled.div`
display: flex;
padding: 4px;
align-items: center;
`
const ProductImg= styled.img`
height: 70px;
width: 70px;
object-fit: cover;

`
const ProductItem= styled.span``

const Order = () => {
  const location = useLocation();
  const ordertId = location.pathname.split("/")[2];
  const history= useHistory()
  const [status,setStatus] = useState("")
  const [order, setOrder] = useState({});
  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await userRequest.get("order/findOrder/" + ordertId);
        setOrder(res.data[0]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getOrder();
  }, [ordertId]);
  console.log("order", order);
  console.log(status);


  const newStatus= async ()=>{
    try {
        const res = await userRequest.put("order/" + ordertId,{status:status});
        console.log(res);
        alert("cập nhật trạng thái thành công")
        history.push('/orderlist')
    } catch (error) {
        console.log(error.message);
    }
  }
  const handleStatus= (e)=>{
      e.preventDefault()
        if(!status){
            alert("Bạn chưa chọn trạng thái mới")
        }
        else if(status===order.status){
            alert("Bạn chưa chọn trạng thái mới")
            
        }
        else{
            newStatus()
        }
  }
  return (
    <Container>
      <Title>Chi tiết đơn hàng</Title>
      <UserOrder>
        <Top>
          <Left>
            <OrderInfor>
              <OrderInforItem>
                <OrderInforKey>Mã Đơn hàng:</OrderInforKey>
                <OrderInforData>{order._id}</OrderInforData>
              </OrderInforItem>
              <OrderInforItem>
                <OrderInforKey>Tên người nhận:</OrderInforKey>{" "}
                <OrderInforData>{order.name}</OrderInforData>
              </OrderInforItem>
              <OrderInforItem>
                <OrderInforKey>Địa chỉ:</OrderInforKey>
                <OrderInforData>{order.address}</OrderInforData>
              </OrderInforItem>
              <OrderInforItem>
                <OrderInforKey>Thành phố:</OrderInforKey>
                <OrderInforData>{order.city}</OrderInforData>
              </OrderInforItem>
            </OrderInfor>
          </Left>
          <Right>
            <OrderInforItem>
            <OrderInforKey>Tổng tiền:</OrderInforKey>
              <OrderInforData>
                {order.total?.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </OrderInforData>
            </OrderInforItem>
            <OrderInforItem>
            <OrderInforKey>Hình thức thanh toán:</OrderInforKey>
              <OrderInforData>{order.payMent}</OrderInforData>
            </OrderInforItem>
            <OrderInforItem>
            <OrderInforKey>Trạng thái đơn hàng:</OrderInforKey>
              <OrderInforStatus type={order.status}>
                {order.status}
              </OrderInforStatus>
            </OrderInforItem>

            <OrderInforItem>
            <OrderInforKey>Đổi trạng thái:</OrderInforKey>
              <StatusSelect defaultValue={0} onChange={(e)=>{setStatus(e.target.value)}} name="status">
              <StatusOption selected value={0} disabled>Chọn trạng thái mới</StatusOption>
                <StatusOption  value={"Đã xác nhận"}>Đã xác nhận</StatusOption>
                <StatusOption value={"Đã giao"}>Đã giao</StatusOption>
                <StatusOption value={"Đã hủy"}>Đã Hủy</StatusOption>
              </StatusSelect>
            </OrderInforItem>
            <OrderInforItem>
              <UpdateStatusBtn onClick={handleStatus}>Cập nhật trạng thái</UpdateStatusBtn>
            </OrderInforItem>
          </Right>
        </Top>
        <Bot>
            {
                order.products?.map(
                    (product)=>(
                        <ProductInfo>
                    <ProductImg src={product.img}/>
                    <ProductItem>{product.title}. Màu: {product.color}, Đơn giá: {product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} x {product.quantity} </ProductItem>
                </ProductInfo>
                    )
                )
            }
                
        </Bot>
      </UserOrder>
    </Container>
  );
};

export default Order;

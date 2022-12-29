
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { userRequest } from "../resquestMethods"
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from "@mui/x-data-grid";


const Container= styled.div`
    flex: 4;
    padding: 20px;
`

const OrderListEdit= styled.button`
border: none;
border-radius: 10px;
padding: 5px 10px;
background-color: #3bb077;
color: white;
cursor: pointer;
margin-right: 20px;
`
const Status = styled.button`
 padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background: ${(props) =>
    props.type === "Đã xác nhận"
      ? "#93ff5d"
      : props.type === "Đã giao"
      ? "#e5faf2"
      : props.type === "Đã hủy"
      ? "#fff0f1"
      : "#ebf1fe"};
    color: black;
`

const OrderList = () => {

    const [orders,setOrder]= useState([])
  
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Name', width: 130 },
        {
          field: 'createdAt',
          headerName: 'Ngày tạo',
          type: 'string',
          width: 100,
          renderCell: (params) =>{
            const date = new Date(params.row.createdAt)
            const newDate= date.getDate()+'-'+ (date.getMonth()+1) + '-'+date.getFullYear()
            return(
                <span>{newDate}</span>
            )
          }
        },
        {
            field: 'phone',
            headerName: 'Số điện thoại',
            type: 'string',
            width: 120,
          },
          {
            field: 'total',
            headerName: 'Tổng cộng',
            type: 'string',
            width: 100,
          },
        {
            field: 'status',
            headerName: 'Trạng Thái',
            type: 'string',
            width: 120,
            renderCell:(params)=>{
                return(
                    <Status type={params.row.status}>{params.row.status}</Status>
                )
            }
        },
        {
            field: 'action',
            headerName: 'action',
            width: 150,
            renderCell: (params)=>{
                return (
                    <>
                    <Link to={"/order/"+params.row._id}>
                    <OrderListEdit>Hiển thị</OrderListEdit>
                    </Link>
                    <DeleteIcon onClick={()=>handleDelete(params.row.id)} style={{color:"red",cursor: "pointer"}} />
                    </>
                )
            }
        }
      ];
      

    useEffect(()=>{
  const getOrders = async ()=>{
        try {
            const res= await userRequest.get("order/")
            setOrder(res.data)
        } catch (error) {
            console.log(error.message);
        }
    }
    getOrders()
    },[])

    console.log(orders);
const handleDelete = (id)=>{
    console.log(id);
    setOrder(orders.filter((item)=> item._id !== id))
}


return (
    <Container>
    <DataGrid
    rows={orders}
    columns={columns}
    pageSize={7}
    getRowId={(rows)=>rows._id}
    checkboxSelection
    disableSelectionOnClick
  />
   </Container>
)

}

export default OrderList
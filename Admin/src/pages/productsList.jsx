import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProducts,deleteProducts } from "../redux/apiCalls";
import Topbar from "../components/topbar/Topbar.jsx";
import Sidebar from '../components/sidebar/Sidebar.jsx'
const Containerall = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const ProductTitle2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1``;

const ProductAddBtn = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: gray;
  color: white;
  padding: 5px 20px;
  font-weight: 600;
`;

const ProductList = styled.div`
display: flex;
align-items: center;
`;

const ProductTitle= styled.span``
const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductEdit= styled.button`
border: none;
border-radius: 10px;
padding: 5px 10px;
background-color: #3bb077;
color: white;
cursor: pointer;
margin-right: 20px;`

const Products = () => {
  const products= useSelector((state)=> state.product.products.allProduct)
  const dispatch= useDispatch()

 
  useEffect(()=>{
    getProducts(dispatch)
  },[dispatch])


  const handleDelete = (id) => {
  deleteProducts(id,dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Tên sản phẩm",
      width: 550,
      renderCell: (params) => {
        return (
          <ProductList>
            <Img src={params.row.img} alt={params.row.title} />
            <ProductTitle> {params.row.title}</ProductTitle>
          </ProductList>
        );
      },
    },
    { field: "inStock", type:'boolean', headerName: "Kho", width: 70 },
    { field: "price", headerName: "Đơn giá", width: 100 },
    {
      field: "action",
      headerName: "action",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <ProductEdit>Edit</ProductEdit>
            </Link>
            <DeleteIcon
              onClick={() => handleDelete(params.row._id)}
              style={{ color: "red", cursor: "pointer" }}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
    <Topbar/>
    <Containerall>
      <Sidebar/>
    <Container>
    <ProductTitle2>
        <Title>Quản lý sản phẩm</Title>
        <Link to="/newProduct">
          <ProductAddBtn>Thêm sản phẩm mới</ProductAddBtn>
        </Link>
      </ProductTitle2>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        getRowId={(rows) => rows._id }
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Container>
    </Containerall>
    </>
  );
};

export default Products;

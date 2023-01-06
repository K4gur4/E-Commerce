import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { userRequest } from "../resquestMethods";
import Topbar from "../components/topbar/Topbar.jsx";
import Sidebar from '../components/sidebar/Sidebar.jsx'
const Containerall = styled.div`
  display: flex;
  margin-top: 10px;
`;
//for checking
const Container= styled.div`
    flex: 4;
    padding: 20px;
    `

const UserListEdit= styled.button`
border: none;
border-radius: 10px;
padding: 5px 10px;
background-color: #3bb077;
color: white;
cursor: pointer;
margin-right: 20px;
`
const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const UserTitle = styled.h1``;

const UserAddBtn = styled.button`
  width: 170px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;


const UserList = ()=>{
    const [users,setUsers]= useState([])
  

    useEffect(()=>{
  const getUsers = async ()=>{
        try {
            const res= await userRequest.get("user/")
            setUsers(res.data.users)
        } catch (error) {
            console.log(error.message);
        }
    }
        getUsers()
    },[])

const handleDelete = (id)=>{
 
    setUsers(users.filter((item)=> item._id !== id))
}



    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'username', headerName: 'Tên đăng nhập', width: 130 },
        {
          field: 'email',
          headerName: 'Email',
          type: 'string',
          width: 200,
        },
        {
            field: 'transaction',
            headerName: 'transaction',
            type: 'string',
            width: 200,
          },
        {
            field: 'isAdmin',
            headerName: 'Phân quyền',
            type: 'boolean',
            width: 100,
        },
        {
            field: 'action',
            headerName: 'action',
            width: 100,
            renderCell: (params)=>{
                return (
                    <>
                    <Link to={"/user/"+params.row._id}>
                    <UserListEdit>Edit</UserListEdit>
                    </Link>
                    <DeleteIcon onClick={()=>handleDelete(params.row.id)} style={{color:"red",cursor: "pointer"}} />
                    </>
                )
            }
        }
      ];
      
    return (
        <>
            <Topbar/>
        <Containerall>
        <Sidebar/>
       <Container>
       <UserTitleContainer>
        <UserTitle>Quản lý người dùng</UserTitle>
        <Link to={'/newUser'}>
        <UserAddBtn>Thêm người dùng mới</UserAddBtn>
        </Link>
      </UserTitleContainer>
        <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        getRowId={(rows)=>rows._id}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
       </Container>
        </Containerall>
        </>
    )
}

export default UserList
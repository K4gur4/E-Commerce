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
    console.log(id);
    setUsers(users.filter((item)=> item._id !== id))
}

console.log(users);

    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'username', headerName: 'Name', width: 130 },
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
            headerName: 'Admin ???',
            type: 'boolean',
            width: 90,
        },
        {
            field: 'action',
            headerName: 'action',
            width: 150,
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
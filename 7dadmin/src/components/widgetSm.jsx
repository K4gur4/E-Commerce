import styled from "styled-components"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import axios from 'axios'
import { userRequest } from "../resquestMethods";
import { Link } from "react-router-dom";


const Container = styled.div`
    flex: 1;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75) ;
    padding: 20px;
    margin-right: 20px;
`

const Title = styled.span`
font-size: 22px;
font-weight: 600;
`

const WidgetList= styled.ul`
 margin: 0;
 padding: 0;
 list-style: none;
`
const WidgetListItem= styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`

const WidgetUser= styled.div`
    display: flex;
    flex-direction: column;
`
const WidgetUserName= styled.span`
    font-weight: 600;
`
const WidgetUserEmail= styled.span`
font-weight: 300;
`
const Button = styled.button`
display: flex;
align-items: center;
border: none;
border-radius: 10px;
padding: 7px 10px;
cursor: pointer;
background-color: #eeeef7;
color: #555;

.icon{
    font-style: 16px;
    margin-right: 5px;
}
`


const WidgetSm =()=>{
    const [users,setUsers]= useState([])
  

    useEffect(()=>{
  const getUsers = async ()=>{
        try {
            const res= await userRequest.get("user/?new=true")
            setUsers(res.data)
        } catch (error) {
            console.log(error.message);
        }
    }
        getUsers()
    },[])
    return (
        <Container>
            <Title>Người dùng mới</Title>
            <WidgetList>
                {users.map((user)=>(
                   <WidgetListItem key={user._id}>
                    <WidgetUser>
                        <WidgetUserName>{user.username}</WidgetUserName>
                        <WidgetUserEmail>{user.email}</WidgetUserEmail>
                    </WidgetUser>
                    <Link to={`/user/${user._id}`} style={{ textDecoration: "none" }}>

                    <Button> <VisibilityIcon/> Display </Button>
                    </Link>
                </WidgetListItem> 
                ))}
            </WidgetList>
        </Container>
    )
}


export default WidgetSm
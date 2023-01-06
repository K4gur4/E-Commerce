import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import Topbar from "../components/topbar/Topbar.jsx";
import Sidebar from '../components/sidebar/Sidebar.jsx';
import { useNavigate } from "react-router-dom";
const Containerall = styled.div`
  display: flex;
  margin-top: 10px;
`;
//for checking
const Container = styled.div`
  flex: 4;
  margin-left: 20px;
`;
const Title = styled.h1``;

const NewUserForm = styled.form`
  display: flex;

  flex-wrap: wrap;
`;

const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const NewUserLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: gray;
  &.gender {
    display: block;
  }
`;
const NewUserInput = styled.input`
  height: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const NewUserSelect = styled.select`
  height: 40px;
  border-radius: 5px;
`;
const NewUserOption = styled.option``;

const NewUserBtn = styled.button`
  width: 200px;
  padding: 7px 10px;
  border: none;
  background-color: gray;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
`;

const NewUser = () => {
  const [inputs,setInputs]= useState({})
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const handleChange= (e)=>{
    setInputs(prev=>{
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleBtn= async (e)=>{
    e.preventDefault()
    try {
      await register(dispatch,inputs)
      alert('Đăng ký thành công')
      navigate('/users')
    } catch (error) {
      alert(error.message)
    }
    
  }
  
  return (
    <>
    <Topbar/>
    <Containerall>
      <Sidebar/>
      <Container>
      <Title>Tạo người dùng mới</Title>
      <NewUserForm>
        <NewUserItem>
          <NewUserLabel>Tên đăng nhập</NewUserLabel>
          <NewUserInput onChange={handleChange} name="username" placeholder="join" />
        </NewUserItem>
        {/* <NewUserItem>
          <NewUserLabel>Tên đầy đủ</NewUserLabel>
          <NewUserInput onChange={handleChange} name="fullname" type={"text"} placeholder="join" />
        </NewUserItem> */}
        <NewUserItem>
          <NewUserLabel>Email</NewUserLabel>
          <NewUserInput onChange={handleChange} name="email" type={"email"} placeholder="abd@gmail.com" />
        </NewUserItem>
        <NewUserItem>
          <NewUserLabel>Mật khẩu</NewUserLabel>
          <NewUserInput onChange={handleChange} name="password" type={"password"} placeholder="abd@gmail.com" />
        </NewUserItem>
        {/* <NewUserItem>
          <NewUserLabel>Số điện thoại</NewUserLabel>
          <NewUserInput  onChange={handleChange}name="phone" type={"text"} placeholder="+84 368186158" />
        </NewUserItem> */}
        {/* <NewUserItem>
          <NewUserLabel>Address</NewUserLabel>
          <NewUserInput  onChange={handleChange}name="address" type={"text"} placeholder="Thai Nguyen" />
        </NewUserItem> */}
        {/* <NewUserItem>
          <NewUserLabel className="gender">Giới tính</NewUserLabel>
          <NewUserSelect defaultValue={"male"} onChange={handleChange} name="gender" >
            <NewUserOption  value={"male"} >Nam</NewUserOption>
            <NewUserOption value={"female"}>Nữ</NewUserOption>
            <NewUserOption value={"other"}>Khác</NewUserOption>
          </NewUserSelect>
        </NewUserItem> */}
        <NewUserItem>
          <NewUserLabel> Đặt làm quản trị viên</NewUserLabel>
          <NewUserSelect defaultValue={false} onChange={handleChange} name="isAdmin" id="isAdmin">
            <NewUserOption  value={false}>No</NewUserOption>
            <NewUserOption value={true}>Yes</NewUserOption>
          </NewUserSelect>
        </NewUserItem>
        <NewUserItem>
          <NewUserBtn onClick={handleBtn}>Tạo người dùng mới</NewUserBtn>
        </NewUserItem>
      </NewUserForm>
    </Container>
    </Containerall>
    </>
    
  );
};

export default NewUser;

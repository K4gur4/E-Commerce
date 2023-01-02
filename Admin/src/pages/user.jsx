import styled from "styled-components";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../resquestMethods";

//for checking
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

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

const UserContainer = styled.div`
  display: flex;
`;

const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserShowTop = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserShowName = styled.span`
  font-weight: 600;
`;
const UserShowAdmin = styled.span`
  font-weight: 300;
`;

const UserShowBot = styled.div`
margin-top:20px;
`

const UserShowTitle = styled.span`
font-size: 14px;
font-weight: 600;
color: rgb(175,170,170);
`
const UserShowUserName = styled.span`
margin-left: 10px;

`;

const UserInfoContainer = styled.div`
display: flex;
align-items: center;
margin: 20px 0px;
color: #444;

.icon{
    font-size: 16px !important;
}
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const UserUpdateTitle = styled.span`
font-size: 24px;
font-weight: 600;
`
const UserUpdateForm = styled.form`
display: flex;
justify-content: space-between;
margin-top: 20px;
`
const UserUpdateLeft = styled.div``
const UserUpdateItem = styled.div`

display: flex;
flex-direction: column;
margin-top: 10px;

`
const UserUpdateLabel = styled.label`
margin-bottom: 10px;
font-size: 14px;

`
const UserUpdateInput = styled.input`

border: none;
width: 250px;
height: 30px;
border-bottom: 1px solid gray;

`


const UserUpdateRight = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;

`
const UserUpdateBtn = styled.button`
border-radius: 5px;
border: none;
cursor: pointer;
background-color: gray;
color: white;
padding: 5px 20px;
font-weight: 600;
`




const User = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [user,setUser]= useState({})
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("user/find/" + userId);
        setUser(res.data.user)
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  const date = new Date(user.createdAt)
  const newDate= date.getDate()+'-'+ (date.getMonth()+1) + '-'+date.getFullYear()
  console.log(user);
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Quản lý người dùng</UserTitle>
        <Link to={'/newUser'}>
        <UserAddBtn>Thêm người dùng mới</UserAddBtn>
        </Link>
      </UserTitleContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <UserShowName>Người dùng: {user.username}</UserShowName>
          </UserShowTop>
          <UserShowBot>
            <UserShowTitle>Thông tin người dùng</UserShowTitle>
            <UserInfoContainer>
              <PermIdentityIcon className="icon" />
              <UserShowUserName>{user._id}</UserShowUserName>
            </UserInfoContainer>
            {/* <UserInfoContainer>
              <CalendarTodayIcon className="icon" />
              <UserShowUserName>Ngày tạo tài khoản: {newDate}</UserShowUserName>
            </UserInfoContainer> */}
            {/* <UserInfoContainer>
              <LocalPhoneIcon className="icon" />
              <UserShowUserName>+84 368186158</UserShowUserName>
            </UserInfoContainer> */}
            <UserInfoContainer>
              <EmailIcon className="icon" />
              <UserShowUserName>{user.email}</UserShowUserName>
            </UserInfoContainer>
            {/* <UserInfoContainer>
              <LocationOnIcon className="icon" />
              <UserShowUserName>Thai Nguyen</UserShowUserName>
            </UserInfoContainer> */}
          </UserShowBot>
        </UserShow>
        <UserUpdate>
            <UserUpdateTitle>Sửa thông tin người dùng</UserUpdateTitle>
            <UserUpdateForm>
                <UserUpdateLeft>
                    <UserUpdateItem>
                        <UserUpdateLabel>Tên đăng nhập</UserUpdateLabel>
                        <UserUpdateInput type={"text"} placeholder={user.username}></UserUpdateInput>
                    </UserUpdateItem>
                    {/* <UserUpdateItem>
                        <UserUpdateLabel>Ngày sinh</UserUpdateLabel>
                        <UserUpdateInput type={"text"} placeholder={"vuducthinh"}></UserUpdateInput>
                    </UserUpdateItem> */}
                    {/* <UserUpdateItem>
                        <UserUpdateLabel>Số điện thoại</UserUpdateLabel>
                        <UserUpdateInput type={"text"} placeholder={"vuducthinh"}></UserUpdateInput>
                    </UserUpdateItem> */}
                    <UserUpdateItem>
                        <UserUpdateLabel>Email</UserUpdateLabel>
                        <UserUpdateInput type={"email"} placeholder={user.email}></UserUpdateInput>
                    </UserUpdateItem>

                    {/* <UserUpdateItem>
                        <UserUpdateLabel>Địa chỉ</UserUpdateLabel>
                        <UserUpdateInput type={"text"} placeholder={"vuducthinh"}></UserUpdateInput>
                    </UserUpdateItem> */}
                </UserUpdateLeft>
                <UserUpdateRight>
                    <UserUpdateBtn>Cập nhật</UserUpdateBtn>
                </UserUpdateRight>
            </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;

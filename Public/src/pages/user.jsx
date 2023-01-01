import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { changePass } from "../redux/apiCalls";
import { logout } from "../redux/userRedux";
import { useHistory } from "react-router-dom";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const UserWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserLabel = styled.label`
  text-align: center;
  margin-top: 10px;
`;
const UserInput = styled.input`
  width: 300px;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
`;
const TitleUser = styled.h2`
  text-align: center;
`;

const Button = styled.button`
  padding: 5px;
  margin-top: 10px;
  background: teal;
  border: none;
  color: white;
`;

const User = () => {
  const history=useHistory()
  const user = useSelector((state) => state.user.currentUser).dataLogin;
  const id = useSelector((state) => state.user.currentUser).dataLogin._id;
  console.log(id);
  const [newPass, setNewPass] = useState("");
  const [newPass2, setNewPass2] = useState("");
  const dispatch=useDispatch()
  const handleChangePass = (e) => {
    e.preventDefault();
    if ( !newPass || !newPass2) {
      alert("hãy điền đủ thông tin")
    }
     else if (newPass === newPass2 && newPass && newPass2) {
        changePass(dispatch,id,{password:newPass})
        alert("đổi mật khẩu thành công, hãy đăng nhập lại.")
        dispatch(logout())
        history.push(`/login`)
      } else {
        alert("mật khẩu không khớp")
      }
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Tài khoản</Title>
        <UserWrapper>
          <Left>
            <TitleUser>Thông tin đăng ký</TitleUser>
            <UserLabel>ID</UserLabel>
            <UserInput placeholder={user._id} disabled />
            <UserLabel>Tên Đăng nhập</UserLabel>
            <UserInput placeholder={user.username} disabled />
            <UserLabel>Email</UserLabel>
            <UserInput placeholder={user.email} disabled />
          </Left>
          <Right>
            <TitleUser>Đổi mật khẩu</TitleUser>
            <UserLabel>Mật khẩu mới</UserLabel>
            <UserInput
              type={"password"}
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
              required
            />
            <UserLabel>Xác nhận mật khẩu mới</UserLabel>
            <UserInput
              type={"password"}
              onChange={(e) => {
                setNewPass2(e.target.value);
              }}
              required
            />
            <Button onClick={(e) => handleChangePass(e)}>Đổi mật khẩu</Button>
          </Right>
        </UserWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default User;

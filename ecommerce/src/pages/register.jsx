import { Checkbox } from "@mui/material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), url('https://thumbs.dreamstime.com/b/top-view-gamer-workspace-gear-like-mouse-keyboard-joystick-headset-monochrome-white-table-background-d-rendering-211925243.jpg') no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
${mobile({ width: "80%" })}
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 10px 20px;
background-color: teal;
color: white;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Trở thành thành viên tại 7DECEMBER.</Title>
        <Form>
          <Input placeholder="Tên" />
          <Input placeholder="Họ" />
          <Input placeholder="Email" />
          <Input placeholder="Tên đăng nhập" />
          <Input placeholder="Mật khẩu" />
          <Input placeholder="Xác nhận mật khẩu" />
          <Agreement>
            <Checkbox/>
            Tôi chấp nhận với điều khoản sử dụng sau khi đăng ký thành viên tại 7DECEMBER.
          </Agreement>
          <Button>Đăng ký</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

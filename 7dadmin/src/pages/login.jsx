import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://thumbs.dreamstime.com/b/game-pc-accessories-wallpaper-design-line-technology-cover-white-backdrop-leisure-background-vector-template-electronic-esports-177398310.jpg")
      no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 5px;
  &:disabled {
    color: white;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history= useHistory()
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    alert("Đăng nhập thành công")
    history.push('/home')
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Title>7DECEMBER. Quản trị viên đăng nhập.</Title>
          <Form>
            <Input
              placeholder="Tên đăng nhập"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              type="password"
              placeholder="Mật khẩu"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button onClick={handleLogin}>Đăng nhập</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;

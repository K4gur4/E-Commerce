import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/navbar";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

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
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
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

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <>
     <Navbar/>
 <Container>
      <Wrapper>
        <Title>Chào mừng bạn đến với 7DECEMBER.</Title>
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
          <Button onClick={handleClick} disabled={isFetching}>
            Đăng nhập
          </Button>

          {error && (
            <Error>Bạn nhập sai toài khoản hoặc mật khẩu, hãy thử lại!!</Error>
          )}

          <Link>Quên mật khẩu</Link>
          <Link>Đăng ký thành viên 7DECEMBER.</Link>
        </Form>
      </Wrapper>
    </Container>

    </>
   
  );
};

export default Login;

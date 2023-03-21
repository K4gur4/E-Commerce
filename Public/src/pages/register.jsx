import { Checkbox } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import { useHistory } from "react-router-dom";
import Navbar from "../components/navbar";
//for checking
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://thumbs.dreamstime.com/b/top-view-gamer-workspace-gear-like-mouse-keyboard-joystick-headset-monochrome-white-table-background-d-rendering-211925243.jpg")
      no-repeat center;
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
  flex-direction: column;
  flex-wrap: wrap;
`;
const Error = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  :invalid {
    border: 1px solid red;
  }
  :invalid ~ ${Error} {
    display: block;
  }
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
  const [focused, setFocused] = useState(false);
  const dispatch=useDispatch()
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
const {confirmPassword,...other}=values;
const history=useHistory()
const err= useSelector(state=>state.user.error)
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setFocused(true);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
       await register(dispatch,other)
     alert('Đăng ký thành công')

      history.push('/login')
     } catch (error) {
      console.log(error.message);
     }
  };
  console.log(other);
  return (
    <>
    <Navbar/>
    <Container>
      
      <Wrapper>
        <Title>Trở thành thành viên tại 7DECEMBER.</Title>
        <Form onSubmit={handleClick}>
          {inputs.map((e) => (
            <>
              <Input
                key={e.id}
                placeholder={e.placeholder}
                name={e.name}
                type={e.type}
                onChange={onChange}
                required
                onBlur={handleFocus}
                onFocus={() =>
                e.name === "confirmPassword" && setFocused(true)
              }
           focused={focused.toString()}
              />
              <Error>{e.errorMessage}</Error>
            </>
          ))}
          <Button>Đăng ký</Button>
        </Form>
      </Wrapper>
    </Container>
    </>
    
  );
};

export default Register;

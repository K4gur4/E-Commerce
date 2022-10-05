import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ), url('https://thumbs.dreamstime.com/b/game-pc-accessories-wallpaper-design-line-technology-cover-white-backdrop-leisure-background-vector-template-electronic-esports-177398310.jpg') no-repeat center;
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
margin-bottom: 5px ;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login=()=>{

    return(
        <Container>
        <Wrapper>
          <Title>Chào mừng bạn đến với 7DECEMBER.</Title>
          <Form>
            <Input placeholder="Tên đăng nhập" />
            <Input placeholder="Mật khẩu" />
            <Button>Đăng nhập</Button>
            <Link>Quên mật khẩu</Link>
            <Link>Đăng ký thành viên tại 7DECEMBER.</Link>
          </Form>
        </Wrapper>
      </Container>

    )
}

export default Login
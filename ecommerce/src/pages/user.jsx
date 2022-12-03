import { useSelector } from "react-redux";
import styled from "styled-components"
import Announcement from "../components/announcement"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { mobile } from "../responsive";
const Container =styled.div``
const Wrapper =styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`
const Title =styled.h1`
    font-weight: 300;
    text-align: center;
    `

const User = ()=>{
    const user = useSelector((state) => state.user.currentUser).dataLogin;
    console.log(user);
    return(
        <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Thông tin tài khoản</Title>

        </Wrapper>
        <Footer/>
        </Container>
    )
}

export default User
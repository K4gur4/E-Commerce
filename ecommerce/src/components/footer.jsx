import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;

const ConTactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>7DECEMBER.</Logo>
        <Desc>
          Được thành lập vào tháng 8/2022, hoạt động chủ yếu trong lĩnh vực bán
          lẻ các sản phẩm GAMING GEAR như chuột, bàn phím, tai nghe. Với khẩu
          hiệu “Uy tín tạo dựng niềm tin”, 7DECEMBER. mong muốn xây dựng “niềm
          tin” của Khách hàng bằng chất lượng dịch vụ tốt nhất, vượt trội nhất.
          Đó cũng chính là kim chỉ nam cho sự phát triển bền vững mà 7DECEMBER.
          hướng đến.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Danh Mục</Title>
        <List>
          <ListItem>Trang Chủ</ListItem>
          <ListItem>Giỏ Hàng</ListItem>
          <ListItem>Chuột</ListItem>
          <ListItem>Bàn Phím</ListItem>
          <ListItem>Tai nghe</ListItem>
          <ListItem>Tài Khoản</ListItem>
          <ListItem>Đơn Hàng</ListItem>
          <ListItem>Mục Yêu Thích</ListItem>
          <ListItem>Quy Định Và Điều Khoản</ListItem>
        </List>
      </Center>
      <Right>
        
          <Title>Liên hệ</Title>
        
        <ConTactItem>
          <RoomIcon style={{ maginRight: "10px" }} />
          Thị Trấn Hùng Sơn, Đại Từ, Thái Nguyên
        </ConTactItem>
        <ConTactItem>
          <LocalPhoneIcon style={{ maginRight: "10px" }} />
          +84 368 186 158
        </ConTactItem>
        <ConTactItem>
          <EmailIcon style={{ maginRight: "10px" }} /> vuducthinhkmt@gmail.com
        </ConTactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;

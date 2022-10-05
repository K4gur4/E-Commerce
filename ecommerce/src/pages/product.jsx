import styled from "styled-components";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`padding: 50px;
display: flex;
${mobile({ padding:"10px",flexDirection: "column" })}
`;
const ImgContainer = styled.div`
flex:1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;

${mobile({ height:"50vh" })}

`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px"})}

`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: center;
${mobile({ width: "100%"})}

`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
background-color: ${props=>props.color};
border: 2px solid black;
margin: 0px 5px;
cursor: pointer;
`

const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;
${mobile({ width: "100%"})}

`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4 ;
}
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://cf.shopee.vn/file/1768abe581829520b366c75f612694e0' />
        </ImgContainer>
        <InfoContainer>
          <Title>FUHLEN D90S</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            doloremque? Recusandae voluptas inventore ipsum, aliquid molestias
            eius quod fugiat ratione sed veniam quidem, consectetur, corrupti
            qui? Recusandae ad maiores quis.
          </Desc>
          <Price>1.990.000</Price>
          <FilterContainer>
                <Filter>
                    <FilterTitle>Màu sắc:</FilterTitle>
                    <FilterColor color='black'></FilterColor>
                    <FilterColor color='white'></FilterColor>
                </Filter>
          </FilterContainer>
          <AddContainer>
                <AmountContainer>
                    <RemoveIcon></RemoveIcon>
                    <Amount>1</Amount>
                    <AddIcon></AddIcon>
                </AmountContainer>
                <Button>Thêm vào giỏ hàng</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;

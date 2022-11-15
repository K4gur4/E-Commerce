import styled from "styled-components";
import Announcement from "../components/announcement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { publicRequest } from "../resquestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

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
border: 2px solid teal;
max-width: fit-content;
padding: 10px;
border-radius: 10%;
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
  const location = useLocation()
  const id =location.pathname.split("/")[2]
  const [product,setProduct]=useState({})
  const [quantity,setQuantity]=useState(1)
  const [color, setColor] = useState("");
  const dispatch= useDispatch()
  useEffect(()=>{
    const getProduct = async ()=>{
      try {
        const res= await publicRequest.get("/product/find/"+id)
        setProduct(res.data)
      } catch (error) {
        console.log(error.message);
      }
    }
    getProduct()
  },[id])
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = ()=>{
    dispatch(
       addProduct({
      ...product,quantity,color
    })
    )
   
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt={product.title} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
           {product.desc}
          </Desc>
          <Price>{product.price+" VND"}</Price>
          <FilterContainer>
                <Filter>
                    <FilterTitle>Màu sắc:</FilterTitle>
                    {
                    product.color?.map((c)=>(
                      <FilterColor key={c} onClick={() => setColor(c)} >{c}</FilterColor>
                    ))
                    }

                </Filter>
          </FilterContainer>
          <AddContainer>
                <AmountContainer>
                    <RemoveIcon onClick={() => handleQuantity("dec")}/>
                    <Amount>{quantity}</Amount>
                    <AddIcon onClick={() => handleQuantity("inc")} />
                </AmountContainer>
                <Button onClick={()=>{handleClick()}} >Thêm vào giỏ hàng</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;

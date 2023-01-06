import styled,{keyframes} from "styled-components";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { useEffect, useState } from "react";
import {mobile} from '../responsive'
import { useHistory } from "react-router-dom";
import axios from "axios";
//for checking
const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  background-color: white;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease ;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
`;
const Desc= styled.p`
  font-size: 30px;
  padding: 20px 0px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slider = () => {
const history=useHistory()
  const [slideIndex, setSlideIndex] = useState(0);
  const [newPro,setNewPro]=useState([])
  useEffect(()=>{
    const URL="http://localhost:5000/product/"
   const getProduct = async ()=>{
    try {
        const res= await axios.get(
            URL+`?new=true`
        )
        setNewPro(res.data.allProduct)
    } catch (error) {
        console.log(error);
    }
   } 
   getProduct();
  }
  ,[])

console.log("slider",newPro);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const handleCheck= (url)=>{
    const productURl=`/product/${url}`
    history.push(productURl)
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {newPro?.map((item) => (
          <Slide key={item._id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>NEW ARRIVALS: {item.title} </Title>
              <Desc>Sản phẩm mới cập bến 7DECMBER.</Desc>
              <Button  onClick={()=>{handleCheck(item._id)}}>ĐẶT HÀNG NGAY</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;

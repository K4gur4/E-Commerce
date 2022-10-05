import styled from "styled-components"
import Announcement from "../components/announcement"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
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
const Top =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton =styled.button `
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled"&& "none"};
    background-color: ${props=>props.type==="filled" ? "black":"transparent"};
    color: ${props=>props.type==="filled"&& "white"};
`
const TopTexts=styled.div`

${mobile({ display: "none" })}
`

const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom =styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}


`
const Info= styled.div`
flex:3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}

`
const ProductDetail = styled.div`
flex:2;
display: flex;
`

const Image = styled.img`
width: 200px;

`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
width: 20px;
height: 20px;
border: 1px solid black ;
background-color: ${props=>props.color};
`

const ProductType = styled.div``

const PriceDetail = styled.span`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ProductAmountContainer= styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount= styled.div`
    font-size: 24px;
    margin: 5px;
${mobile({ margin: "5px 15px" })}

    `
const ProductPrice= styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}

`

const Hr=styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    `
    const Summary= styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    height: 50vh;
    `

const SummaryTitle=styled.h1`
font-weight:200;`

const SummaryItem=styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==='total'&&"500"};
font-size: ${props=>props.type==='total'&&"24px"};
`

const SummaryItemText=styled.span``

const SummaryItemPrice=styled.span``

const SummaryButton=styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`



const Cart = ()=>{

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>GIỎ HÀNG CỦA BẠN</Title>
                <Top>

                    <TopButton>TIẾP TỤC MUA SẮM</TopButton>
                    <TopTexts>
                        <TopText>GIỎ HÀNG(2)</TopText>
                        <TopText>MỤC ƯA THÍCH(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">THANH TOÁN NGAY</TopButton>
                </Top>
                <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://cf.shopee.vn/file/1768abe581829520b366c75f612694e0'></Image>
                            <Details>
                                <ProductName> <b>Product:</b> Fuhlen D90S </ProductName>
                                <ProductId> <b>ID:</b> 5345345 </ProductId>
                                <ProductType> <b>Phân loại:</b>Chuột</ProductType>
                                <ProductColor color="black"/> 
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <RemoveIcon/>
                            <ProductAmount>1</ProductAmount>
                            <AddIcon/>
                            </ProductAmountContainer>

                            <ProductPrice>560.000đ</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src='https://product.hstatic.net/1000026716/product/arctis52019-white-gearvn.jpg'></Image>
                            <Details>
                                <ProductName> <b>Product:</b> SteelSeries Arctis 5 2019 </ProductName>
                                <ProductId> <b>ID:</b> 53124645 </ProductId>
                                <ProductType> <b>Phân loại:</b>Tai nghe</ProductType>
                                <ProductColor color="white"/> 
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <RemoveIcon/>
                            <ProductAmount>1</ProductAmount>
                            <AddIcon/>
                            </ProductAmountContainer>

                            <ProductPrice>1.200.000đ</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                    <Summary>
                        <SummaryTitle>Tổng giỏ hàng</SummaryTitle>
                        <SummaryItem>
                        <SummaryItemText>Tổng giá sản phẩm</SummaryItemText>
                        <SummaryItemPrice>1.800.000</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                        <SummaryItemText>Phí vận chuyển</SummaryItemText>
                        <SummaryItemPrice>100.000</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                        <SummaryItemText>Hỗ trợ phí vận chuyển</SummaryItemText>
                        <SummaryItemPrice>-80.000</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                        <SummaryItemText >Tổng Cộng</SummaryItemText>
                        <SummaryItemPrice>1.820.000đ</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>Thanh Toán</SummaryButton>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )

}

export default Cart
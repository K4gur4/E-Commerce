import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { orderRequest } from "../resquestMethods";
//for checking
const Container= styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const FeaturedItem= styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75) ;
`

const FeaturedTitle= styled.span`
    font-style: 20px;
    
`

const FeaturedMoneyContainer= styled.div`
margin: 10px 0px;
display: flex;
align-items: center;

`

const FeaturedMoney= styled.span`
    font-size: 30px;
    font-weight: 600;
    `

const FeaturedMoneyRate =styled.span`
display: flex;
align-items: center;
margin-left: 20px;

.freaturedIcon{
    font-size: 14px;
    margin-left: 5px;
    color: green;
}

.freaturedIcon.negative{
    color: red;
}
`


const FeaturedSub= styled.span`
font-style: 15px;
color: gray;
`
const FeaturedInfor = () => {
    const [income,setIncome]= useState([]);
    const [daily,setDaily]= useState([]);
    const [perc,serPerc]= useState(0);
    const [perc2,serPerc2]= useState(0);
    const getIncome= async ()=>{
        try {
            const res= await orderRequest.get("order/income")
            setIncome(res.data.income)
            serPerc((res.data.income[0]?.revenue*100)/res.data.income[1]?.revenue-100)
        } catch (error) {
            console.log(error.message);
        }
    }
    const getDaily= async ()=>{
        try {
            const res= await orderRequest.get("order/daily")
            setDaily((res.data.income).sort((a,b)=>b._id-a._id))
            serPerc2((res.data.income[0]?.revenue*100)/res.data.income[1]?.revenue)
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getIncome()
        getDaily()
    },[])
    
    console.log("daily",daily);
console.log("income",income);
return(
<Container>
    <FeaturedItem>
        <FeaturedTitle>Doanh thu</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>{daily[0]?.revenue
                .toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
                }</FeaturedMoney>
                <FeaturedMoneyRate>{Math.floor(perc2)}% {" "}
                {perc2 < 0 ? (
                    <ArrowDownwardIcon className="freaturedIcon negative"/>
                    ):(<ArrowUpwardIcon className="freaturedIcon "/>)
                }
                </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
                <FeaturedSub> So với hôm qua </FeaturedSub>
    </FeaturedItem>
    <FeaturedItem>
    <FeaturedTitle>Doanh thu</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>{income[0]?.revenue
                .toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
                }</FeaturedMoney>
                <FeaturedMoneyRate>{Math.floor(perc)}% {" "}
                {perc < 0 ? (
                    <ArrowDownwardIcon className="freaturedIcon negative"/>
                    ):(<ArrowUpwardIcon className="freaturedIcon "/>)
                }
                </FeaturedMoneyRate>
            </FeaturedMoneyContainer>
                <FeaturedSub> So với tháng trước </FeaturedSub>
    </FeaturedItem>
    {/* <FeaturedItem>
        <FeaturedTitle>Tổng Thu</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>3000000 VND</FeaturedMoney>
                <FeaturedMoneyRate>-1.4 <ArrowDownwardIcon className="freaturedIcon negative"/></FeaturedMoneyRate>
            </FeaturedMoneyContainer>
                <FeaturedSub> So với tháng trước </FeaturedSub>
    </FeaturedItem> */}
    {/* <FeaturedItem>
        <FeaturedTitle>Kinh phí</FeaturedTitle>
            <FeaturedMoneyContainer>
                <FeaturedMoney>3000000 VND</FeaturedMoney>
                <FeaturedMoneyRate>-2.4 <ArrowUpwardIcon className="freaturedIcon"/></FeaturedMoneyRate>
            </FeaturedMoneyContainer>
                <FeaturedSub> So với tháng trước </FeaturedSub>
    </FeaturedItem> */}
</Container>

)

}

export default FeaturedInfor
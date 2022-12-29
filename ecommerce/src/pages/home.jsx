
import React from "react";
import Announcement from "../components/announcement";
import Categories from "../components/categories";
import Navbar from "../components/navbar";
import Products from "../components/products";
import Slider from "../components/slider"
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import styled from "styled-components";
import { mobile } from "../responsive";
const Home = ()=>{

const NewArrival = styled.p`
 font-size: 60px ;
 text-align: center;
 font-weight: bolder;
 margin: 20px 0px;
 ${mobile({ fontSize: "30px" })}
`  
let arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ") ", "ABC"];
const str = 'Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options'
const sortArr = (arr) => {
    let a= []
    let b= []
    let c= []
    for(let i=0;i<arr.length;i++){
        if(arr[i].match([0-9])){
            a=arr.push(arr[i])
        }
    }
    return a
}

const findStr= (str)=>{
    return str.split(' ')
}
console.log(sortArr(arr));
console.log(findStr(str))
return (
    <>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <NewArrival>HÀNG MỚI VỀ!!!</NewArrival>
        <Products/>
        <Newsletter/>
        <Footer/>
    </>
)
}

export default Home
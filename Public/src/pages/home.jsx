
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
//for checking
const NewArrival = styled.p`
 font-size: 60px ;
 text-align: center;
 font-weight: bolder;
 margin: 20px 0px;
 ${mobile({ fontSize: "30px" })}
`  
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
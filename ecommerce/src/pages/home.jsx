
import React from "react";
import Announcement from "../components/announcement";
import Categories from "../components/categories";
import Navbar from "../components/navbar";
import Products from "../components/products";
import Slider from "../components/slider"
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
const Home = ()=>{
return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
)
}

export default Home
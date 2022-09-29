
import React from "react";
import Announcement from "../components/announcement";
import Categories from "../components/categories";
import Navbar from "../components/navbar";
import Products from "../components/products";
import Slider from "../components/slider"
const Home = ()=>{
return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
    </div>
)
}

export default Home
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./product";
import axios from "axios"

const Container=styled.div`
    padding: 20px;
    display:flex;
    flex-wrap: wrap;
`

const Products=({cat,sort})=>{

const [product,setProduct]= useState([])
const [filteredProduct,setFilteredProduct]= useState([])

useEffect(()=>{
    const URL="http://localhost:5000/product/"
   const getProduct = async ()=>{
    try {
        const res= await axios.get(
            cat?
            URL+`?category=${cat}&new=true`
            :
            URL+`?new=true`
            
        )
        setProduct(res.data)
    } catch (error) {
        console.log(error);
    }
   } 
   getProduct();
}, [cat])

useEffect(() => {
    switch (sort) {
        case "asc":
            setFilteredProduct((prev)=>[...prev].sort((a, b) => a.price - b.price))
            break
        case "desc":
            setFilteredProduct((prev)=>[...prev].sort((a, b) => b.price - a.price))
            break
        default:
            setFilteredProduct(product)
            break;
    }
  }, [product,sort]);

    return (
        <Container>
            {
            cat?
            filteredProduct.map((item)=>(
                <Product product={item} key={item.id}/>
            ))
                : filteredProduct.splice(0,8).map((item)=>(
                    <Product product={item} key={item.id}/>  
                ))
        }
            
            
        </Container>
    )
}

export default Products
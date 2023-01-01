import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/announcement'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Products from '../components/products'
import { mobile } from '../responsive'

const Container= styled.div`
`
const Title= styled.h1`margin: 20px;`
const FilterContainer= styled.div`
display: flex;
justify-content: space-between;
`
const Filter= styled.div`
margin: 20px;
${mobile({ width: "0px 20px",margin: "15px" })}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    
`

const Select =styled.select`
padding: 4px;
margin-right: 20px;
${mobile({ margin: "10px 0px"})}

`

const Option =styled.option``

const ProductList = ()=>{
const location = useLocation()
const cat =location.pathname.split("/")[2]
const [sort,setSort]= useState()


const handleSoft=(e)=>{
    const value = e.target.value;
    setSort(value)
}

console.log(sort);
return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Danh mục sản phẩm  </Title>
        <FilterContainer>
            <Filter><FilterText>Sắp xếp theo:</FilterText>
            <Select onChange={handleSoft}>
                    <Option selected value="newest" >Mới cập nhật</Option>
                    <Option value="asc">Giá thấp nhất</Option>
                    <Option value="desc">Giá cao nhất</Option>
                </Select>
                    </Filter>
        </FilterContainer>
        <Products cat={cat} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
)

}

export default ProductList
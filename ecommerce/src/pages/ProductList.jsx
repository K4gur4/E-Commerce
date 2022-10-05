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

return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Danh mục các sản phẩm</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Lọc Sản Phẩm:</FilterText>
                <Select>
                    <Option selected>Tất cả</Option>
                    <Option>Chuột</Option>
                    <Option>Bàn Phím</Option>
                    <Option>Tai Nghe</Option>
                </Select>
                </Filter>
            <Filter><FilterText>Sắp xếp theo:</FilterText>
            <Select>
                    <Option selected>Mới cập nhật</Option>
                    <Option>Giá cao nhất</Option>
                    <Option>Giá thấp nhất</Option>
                </Select>
                    </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>

)

}

export default ProductList

import styled from 'styled-components'
import { mobile } from '../responsive'
const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
${mobile({ fontSize: "10px"})}


`
const Announcement = ()=>{
    return (
        <Container>
            SIÊU HỜI!! MIÊN PHÍ VẬN CHUYỂN ĐỐI VỚI HÓA ĐƠN TRÊN MỘT TRIỆU ĐỒNG
        </Container>
    )
}

export default Announcement
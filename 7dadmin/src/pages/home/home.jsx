import React from "react";
import styled from 'styled-components'
import Chart from "../../components/chart";
import FeaturedInfor from "../../components/featuredInfor";
import WidgetLg from "../../components/widgetLg";
import WidgetSm from "../../components/widgetSm";
import { userData } from "../../dummyData";

const Container= styled.div`
    flex: 4;
`

const HomeWidget= styled.div`
    display: flex;
    margin: 20px;
`

const Home = ()=>{
    return (
       <Container>
        <FeaturedInfor/>
        <Chart data={userData} title="Thông kê người dùng" grid dataKey="Active User"/>
        <HomeWidget>
            <WidgetSm/>
            <WidgetLg/>
        </HomeWidget>
       </Container>
    )
}

export default Home
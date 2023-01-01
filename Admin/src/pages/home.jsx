import React, { useEffect, useMemo, useState } from "react";
import styled from 'styled-components'
import Chart from "../components/chart";
import FeaturedInfor from "../components/featuredInfor";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Topbar from "../components/topbar/Topbar.jsx";
import WidgetLg from "../components/widgetLg";
import WidgetSm from "../components/widgetSm";
import { userRequest } from "../resquestMethods";

const Container= styled.div`
    flex: 4;
    padding: 10px;
`

const Wrapper= styled.div`
    flex: 4;
`

const HomeWidget= styled.div`
    display: flex;
    margin: 20px;
`


const Home = ()=>{
    const [userStats,setUserStat] = useState([])
    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      );

      useEffect(() => {
        console.log('hi');
        const getStats = async () => {
          try {
            const res = await userRequest.get("user/stat");
            res.data.map((item) =>
            setUserStat((prev) => [
                ...prev,
                { name: MONTHS[item._id - 1], "Active User": item.total },
              ])
            );
          } catch(err) {
            console.log(err.message);
          }
        };
        getStats();
      }, [MONTHS]);
console.log(userStats);
    return (
     
       <Container>
        <FeaturedInfor/>
        <Chart data={userStats} title="Thông kê người dùng" grid dataKey="Active User"/>
        <HomeWidget>
            <WidgetSm/>
            <WidgetLg/>
        </HomeWidget>
       </Container>
     
   
    )
}

export default Home
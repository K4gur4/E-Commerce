import React, { useEffect, useMemo, useState } from "react";
import styled from 'styled-components'
import Chart from "../components/chart";
import FeaturedInfor from "../components/featuredInfor";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Topbar from "../components/topbar/Topbar.jsx";
import WidgetLg from "../components/widgetLg";
import WidgetSm from "../components/widgetSm";
import { userRequest } from "../resquestMethods";
//for checking
const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;
const ContainerHome= styled.div`
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
        const getStats = async () => {
          try {
            const res = await userRequest.get("user/stat");
            res.data.userStat.map((item) =>
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
    return (
      <>
      <Topbar/>
      <Container>
        <Sidebar/>
       <ContainerHome>
        <FeaturedInfor/>
        <Chart data={userStats} title="Thông kê người dùng" grid dataKey="Active User"/>
        <HomeWidget>
            <WidgetSm/>
            <WidgetLg/>
        </HomeWidget>
       </ContainerHome>
      </Container>
      </>
    )
}

export default Home
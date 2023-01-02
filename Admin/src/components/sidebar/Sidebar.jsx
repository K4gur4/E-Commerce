import React, { useState } from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import {
  Container,
  SidebarWrapper,
  SidebarMenu,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
} from "./sidebar";
import { Link, NavLink } from "react-router-dom";
//for checking
const Sidebar = () => {
    const activeLink= 'background-color: rgb(86, 89, 94) color: black color: white'
  return (
    <Container>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Chức năng</SidebarTitle>
          <SidebarList>
            <NavLink
              style={{ textDecoration: "none" }}
              to={"/"}
            >
              <SidebarListItem >
                <LineStyleIcon className="icon" />
                Trang chủ
              </SidebarListItem>
            </NavLink>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarList>
            <NavLink style={{ textDecoration: "none" }} to={"/users"}>
              <SidebarListItem>
                <PersonOutlineIcon className="icon" />
                Khách hàng
              </SidebarListItem>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to={"/products"}>
              <SidebarListItem>
                <StorefrontIcon className="icon" />
                Sản phẩm
              </SidebarListItem>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to={"/orderList"}>
              <SidebarListItem>
                <AttachMoneyIcon className="icon" />
                Đơn hàng
              </SidebarListItem>
            </NavLink>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;

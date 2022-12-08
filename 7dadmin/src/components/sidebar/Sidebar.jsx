import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Container,SidebarWrapper,SidebarMenu,SidebarTitle,SidebarList,SidebarListItem,SidebarListItemActive } from './sidebar'
const Sidebar= ()=>{
return (
   <Container>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarTitle>Dashboard</SidebarTitle>
                <SidebarList>
                    <SidebarListItemActive >
                        <LineStyleIcon className='icon'/>
                        Trang chủ
                    </SidebarListItemActive>
                    <SidebarListItem>
                        <TimelineIcon className='icon'/>
                        Thống Kê
                    </SidebarListItem>
                    <SidebarListItem>
                        <TrendingUpIcon className='icon'/>
                        Doanh thu
                    </SidebarListItem>
                </SidebarList>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarTitle>Quick Menu</SidebarTitle>
                <SidebarList>
                    <SidebarListItem >
                        <PersonOutlineIcon className='icon'/>
                        Khách hàng
                    </SidebarListItem>
                    <SidebarListItem>
                        <StorefrontIcon className='icon'/>
                        Sản phẩm
                    </SidebarListItem>
                    <SidebarListItem>
                        <AttachMoneyIcon className='icon'/>
                        Đơn hàng
                    </SidebarListItem>
                    <SidebarListItem>
                        <BarChartIcon className='icon'/>
                        Báo cáo
                    </SidebarListItem>
                </SidebarList>
            </SidebarMenu>
        </SidebarWrapper>
   </Container>
)

}


export default Sidebar
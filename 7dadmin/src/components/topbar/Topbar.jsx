import React from 'react'
import { Container,TopLeft,TopbRight,TopbarWrapper, Logo,Icon, IconItem, User } from './topbar'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar= ()=>{
    return(
        <Container>
            <TopbarWrapper>
                <TopLeft><Logo>7DECMBER. Admin</Logo></TopLeft>
                <TopbRight>
                        <Icon>
                            <User>Admin: admin2</User>
                        </Icon>
                        <Icon>
                            <NotificationsNoneIcon/>
                            <IconItem>2</IconItem>
                        </Icon>
                        <Icon>
                            <LanguageIcon/>
                            <IconItem>2</IconItem>
                        </Icon>
                        <Icon>
                            <SettingsIcon/>
                        </Icon>
                </TopbRight>
                
            </TopbarWrapper>
        </Container>
    )
}

export default Topbar



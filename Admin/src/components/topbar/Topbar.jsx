import React from 'react'
import { Container,TopLeft,TopbRight,TopbarWrapper, Logo,Icon, IconItem, User } from './topbar'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userRedux';
import { useNavigate } from 'react-router-dom';
//for checking
const Topbar= ()=>{
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const logOutUser= ()=>{
       dispatch(logout());
        alert('Về trang đăng nhập!!')
        navigate('/login')
        window.location.reload()
    }
    return(
        <Container>
            <TopbarWrapper>
                <TopLeft><Logo>7DECMBER. Admin</Logo></TopLeft>
                <TopbRight>
                        <Icon>
                            <User onClick={logOutUser}>Đăng xuất</User>
                        </Icon>
                        {/* <Icon>
                            <NotificationsNoneIcon/>
                            <IconItem>2</IconItem>
                        </Icon>
                        <Icon>
                            <LanguageIcon/>
                            <IconItem>2</IconItem>
                        </Icon>
                        <Icon>
                            <SettingsIcon/>
                        </Icon> */}
                </TopbRight>
            </TopbarWrapper>
        </Container>
    )
}

export default Topbar



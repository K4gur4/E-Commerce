import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const admin= useSelector(state=>state.user.currentUser?.dataLogin?.isAdmin)
    return(
        admin ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = () => {
    const admin= useSelector(state=>state.user.currentUser?.dataLogin?.isAdmin)
    return(
        !admin ? <Outlet/> : <Navigate to="/home"/>
    )
}

export default PublicRoutes
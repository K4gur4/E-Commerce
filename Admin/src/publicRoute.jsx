import { Outlet, Navigate } from 'react-router-dom'

const PublicRoutes = () => {
    let admin = JSON.parse(
        JSON.parse(localStorage.getItem("persist:root")).user
      )?.currentUser?.dataLogin?.isAdmin;
   
    return(
        !admin ? <Outlet/> : <Navigate to="/home"/>
    )
}

export default PublicRoutes
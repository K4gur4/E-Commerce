import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let admin = JSON.parse(
        JSON.parse(localStorage.getItem("persist:root")).user
      )?.currentUser?.dataLogin?.isAdmin;
   
    return(
        admin ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes
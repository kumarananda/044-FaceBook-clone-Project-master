
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom"
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import LogedOutUserRoute from "./LogedOutUserRoute";




// create Authenticate
const LogedInUserRoute = () => {
  const location = useLocation()

  // console.log(location.pathname);
  
  const { loginStatus } = useSelector(state => state.auth);

  if(Cookies.get('authToken')){
    // return loginStatus ?  <Outlet to={location.pathname} />  : <LogedOutUserRoute  /> ;
    return loginStatus ?  <Outlet />  : <Navigate to={'/'} /> ;
  }else{
    return <Navigate to={'/'} />
  }

}

export default LogedInUserRoute




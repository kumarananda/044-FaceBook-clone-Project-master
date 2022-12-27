
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom"
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import LogedInUserRoute from "./LogedInUserRoute";




// create Authenticate
const LogedOutUserRoute = () => {


  // const location = useLocation()

  const { loginStatus } = useSelector(state => state.auth);

  if(Cookies.get('authToken')){
    return loginStatus ? <Navigate to={'/'}/> : <Outlet  />  
    
  }else{
    return <Outlet  /> ;
  }


}

export default LogedOutUserRoute


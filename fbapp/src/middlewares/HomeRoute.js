
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom"
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";




// create Authenticate
const HomeRoute = ({children}) => {
    const { loginStatus } = useSelector(state => state.auth);
    if(Cookies.get('authToken')){

        return loginStatus ? <Home /> : <Auth/> ;
    }else{
        return <Auth/>
    }

    
}

export default HomeRoute;


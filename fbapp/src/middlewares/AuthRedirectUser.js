
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import Home from "../pages/Home/Home";




// create Authenticate
const AuthRedirectUser = ({children}) => {

    const { loginStatus } = useSelector(state => state.auth);
    return loginStatus ? <Home /> : children ;
}

export default AuthRedirectUser


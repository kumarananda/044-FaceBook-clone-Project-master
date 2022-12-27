
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";




// // create Authenticate
// const HomeRouteing = () => {

//   const { loginStatus } = useSelector(state => state.auth);

//   return loginStatus ? <Home/> : <Auth />
// }

// export default HomeRouteing


// create Authenticate
const AuthenticateUser = ({children}) => {

  const { loginStatus } = useSelector(state => state.auth);

  // return loginStatus ? children : <Navigate to='/login' />
  return loginStatus ? children : <Auth />
}

export default AuthenticateUser



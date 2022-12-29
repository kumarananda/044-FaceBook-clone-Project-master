import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Profile from './pages/Profile/Profile';
import './_assets/css/style.css'
import './_assets/css/stylecustom.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPass from './pages/Auth/ForgotPass/ForgotPass';
import FindAccount from './pages/Auth/FindAccount/FindAccount';
import ResetCodeMatch from './pages/Auth/ResetMatch/ResetCodeMatch';
import ResetLinkVrify from './pages/Auth/ResetMatch/ResetLinkVrify';
import Activation from './pages/Auth/Activation/Activation';
import LinkActivation from './pages/Auth/Activation/LinkActivation';
import ResetPassword from './pages/Auth/PasswordReset/ResetPasswore';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logedInUserData } from './redux/auth/authAction';
import AuthRedirectUser from './middlewares/AuthRedirectUser';
import AuthenticateUser from './middlewares/AuthenticateUser';
import LoadingBar from 'react-top-loading-bar'
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import { USER_LOGOUT } from './redux/auth/actionType';
import LogedOutUserRoute from './middlewares/LogedOutUserRoute';
import LogedInUserRoute from './middlewares/LogedInUserRoute';
import Friends from './pages/Friends/Friends';
import FindFriends from './pages/FindFriends/FindFriends';
import HomeRoute from './middlewares/HomeRoute';





function App() {

  // get login token
  const authToken = Cookies.get('authToken');
  // console.log(authToken);

  // use dispatch 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // use selector 
  const toploader = useSelector(state => state.toploader);



  useEffect(() => {

    if(authToken){
      dispatch(logedInUserData(authToken, navigate))
    }

  },[dispatch, authToken])

// console.log(user);
// console.log(toploader);



  
  return (
    <>
      <LoadingBar
        color='#1877f2'
        progress={toploader}
        onLoaderFinished={() => dispatch({type : "LOADER_END"})}
      />

      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      limit={1}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      style={{zIndex: 99999999999}}
      />
      
      <Routes> 

        <Route path="/" element={ <HomeRoute/>  }/>

        <Route element={<LogedInUserRoute/>}>
          <Route path="/find-friends" element={ <FindFriends/>  }/>
          <Route path="/friends" element={<Friends/>  }/>
          <Route path="/profile" element={<Profile/>  }/>
        </Route>

        <Route element={<LogedOutUserRoute/>}>
          <Route path="/login" element={ <LoginPage/> }/>
          <Route path="/register" element={ <RegisterPage/> }/>
          <Route path="/activation" element={<Activation/>}/>
          <Route path="/forgot-password" element={<ForgotPass/>}/>
          <Route path="/find-account" element={<FindAccount/>}/>
          <Route path="/reset-code-match" element={<ResetCodeMatch/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/act-link/:id/:token" element={ <LinkActivation /> }/>
          <Route path="/reset-link/:id/:token" element={ <ResetLinkVrify /> }/>
        </Route>

      </Routes>
    
    </>
  );
}

export default App;



{/* <Routes>
<Route path="/" element={<AuthenticateUser></AuthenticateUser> }/>
<Route path="/profie" element={<AuthenticateUser> <Profile/> </AuthenticateUser> }/>

<Route path="/login" element={<AuthRedirectUser> <LoginPage/> </AuthRedirectUser> }/>
<Route path="/register" element={<AuthRedirectUser> <RegisterPage/> </AuthRedirectUser> }/>

<Route path="/activation" element={<Activation/>}/>
<Route path="/forgot-password" element={<ForgotPass/>}/>
<Route path="/find-account" element={<FindAccount/>}/>
<Route path="/reset-code-match" element={<ResetCodeMatch/>}/>
<Route path="/reset-password" element={<ResetPassword/>}/>
<Route path="/act-link/:id/:token" element={ <LinkActivation /> }/>
<Route path="/reset-link/:id/:token" element={ <ResetLinkVrify /> }/>
</Routes> */}

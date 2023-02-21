import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import './_assets/css/style.css'
import './_assets/css/stylecustom.css'
import './_assets/css/bodyWraper.css'
import './_assets/css/utility.css'
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
import LoadingBar from 'react-top-loading-bar'
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import LogedOutUserRoute from './middlewares/LogedOutUserRoute';
import LogedInUserRoute from './middlewares/LogedInUserRoute';
import Friends from './pages/Friends/Friends';
import FindFriends from './pages/FindFriends/FindFriends';
import HomeRoute from './middlewares/HomeRoute';
import CorouselPage from './CorouselPage/CorouselPage';
import ProHomePosts from './pages/Profile/ProHomePosts/ProHomePosts';
import ProAbout from './pages/Profile/ProAbout/ProAbout';
import WorkEdu from './pages/Profile/ProAbout/WordEdu/WorkEdu.jsx';
import PlacesLived from './pages/Profile/ProAbout/PlacesLived/PlacesLived';
import ContactInfo from './pages/Profile/ProAbout/ContactInfo/ContactInfo';
import LifeEvents from './pages/Profile/ProAbout/LifeEvents/LifeEvents';
import Relationship from './pages/Profile/ProAbout/Relationship/Relationship';
import AboutYou from './pages/Profile/ProAbout/AboutYou/AboutYou';
import Overview from './pages/Profile/ProAbout/Overview/Overview';
import { SETPATHNAME } from './redux/auth/actionType';
import Category from './pages/Profile/ProAbout/Category/Category';
// import useAgeCal from './hooks/useTest';
// import useDataget from './hooks/useDataGet';






function App() {

  //
  const {pathname} = useLocation()

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
      dispatch({type: SETPATHNAME, payload : pathname})
    }

  },[dispatch, authToken,navigate])

  useEffect(() => {
    dispatch({type: SETPATHNAME, payload : pathname})
  },[pathname])


// hooks
// const [ageCal, setAgeCal] = useAgeCal(1992,)
// setAgeCal(50)
// console.log(ageCal);

// const [getdata] = useDataget('https://jsonplaceholder.typicode.com/todos')
// console.log(getdata);




  
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
      style={{zIndex: 999999999999999}}
      />
      
      <Routes> 

        <Route path="/" element={ <HomeRoute/>  }/>
        <Route path="/CorouselPage" element={ <CorouselPage/>  }/>



        {/* // Route for logedin user */}
        <Route element={<LogedInUserRoute/>}>
          <Route path="/find-friends" element={ <FindFriends/>  }/>
          <Route path="/friends" element={<Friends/>  }/>
          <Route path="/profile" element={<Profile/> }>
            <Route path="/profile" element={ <ProHomePosts/>}/>
            <Route path="/profile/about" element={ <ProAbout/>}>
              <Route path="/profile/about" element={ <Overview/>}/>
              <Route path="/profile/about/work-and-edu" element={ <WorkEdu/>}/>
              <Route path="/profile/about/places-lived" element={ <PlacesLived/>}/>
              <Route path="/profile/about/contact-info" element={ <ContactInfo/>}/>
              <Route path="/profile/about/relationship" element={ <Relationship/>}/>
              <Route path="/profile/about/about-you" element={ <AboutYou/>}/>
              <Route path="/profile/about/life-event" element={ <LifeEvents/>}/>
              <Route path="/profile/about/category" element={ <Category/>}/> 
              
            </Route>
          </Route>
            
        </Route>

        {/* // Route for logedout user */}
        <Route element={<LogedOutUserRoute/>}>
          <Route path="/login" element={ <LoginPage/> }/>
          <Route path="/register" element={ <RegisterPage/> }/>
          <Route path="/activation" element={<Activation/>}/>
          <Route path="/forgot-password" element={<ForgotPass/>}/>
          <Route path="/find-account" element={<FindAccount/>}/>
          <Route path="/reset-code-match" element={<ResetCodeMatch/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
        </Route>

        <Route path="/act-link/:id/:token" element={ <LinkActivation /> }/>
        <Route path="/reset-link/:id/:token" element={ <ResetLinkVrify /> }/>

      </Routes>
    
    </>
  );
}

export default App;


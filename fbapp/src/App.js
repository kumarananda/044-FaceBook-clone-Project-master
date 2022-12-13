import './App.css';
import { Route, Routes } from 'react-router-dom'
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





function App() {

  // createTost('This is a tast!', 'success');
  
  return (
    <>

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
        <Route path="/" element={<Home/> }/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/profie" element={<Profile/>}/>
        <Route path="/activation" element={<Activation/>}/>
        <Route path="/forgot-password" element={<ForgotPass/>}/>
        <Route path="/find-account" element={<FindAccount/>}/>
        <Route path="/reset-code-match" element={<ResetCodeMatch/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/act-link/:id/:token" element={ <LinkActivation /> }/>
        <Route path="/reset-link/:id/:token" element={ <ResetLinkVrify /> }/>
      </Routes>
    
    </>
  );
}

export default App;

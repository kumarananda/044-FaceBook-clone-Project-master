import axios from "axios"
import createTost from "../../utility/tost.js";
import Cookies from "js-cookie";
import { ACTIVATED, ACTIVATION_FAILED, ACTIVATION_SUCCESS, FIND_EMPTY, FIND_FAILED, FIND_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType";
import { setMonthShortName } from "../../utility/satvalus.js";
import { checkCode6, checkNumber } from "../../utility/validate.js";
// import { passwordValid } from "../../utility/validate.js";








// USER REGISTER 
export const userRegister = (data, setRegister , navigate, e, setInput) => async (dispatch) => {
    const date = new Date()
    try {
        dispatch({
            type: REGISTER_REQUEST
        })
        await axios.post('/api/v1/user/register', data )
        .then(res => {

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.message
            })
            console.log(res.data.message);
            
            setInput({
                fname: "",
                sname: "",
                emailorphone: "",
                password: "",
                day: date.getDate(),
                month: setMonthShortName(date.getMonth()),
                year: date.getFullYear(),
                gender: "",
                gender_custom: "",
                gender_pronoun: "",
            })
            e.target.reset()
            setRegister(false)
            createTost('Registration successful!', 'success')

            // cookie with cookie-parser on express server 
            // or js-cookie on frontend // expires: 1 day
            
            // Cookies.set('activRES', {
            //     auth: res.data.activeUser, 
            //     name : res.data.activeName
            // }, 
            // { 
            //     expires: 1 
            // })

  
            navigate('/activation') 

            
            
            
        })
        .catch(error => {
            createTost(error.response.data.message, )
            dispatch({
                type : REGISTER_FAILED,
                payload: error.response.data.message
            })
            console.log(error.response.data.message);
        })
        
    } catch (error) {
        createTost(error.response.data.message, )
        dispatch({
            type : REGISTER_FAILED,
            payload: error.response.data.message
        })

    }
}

// USER ACTIVATION  with code
export const codeActivation = (code, token, setErrBorder, navigate) => async (dispatch) => {
    
    try {
        dispatch({
            type: REGISTER_REQUEST
        })
        const bearer  = `Bearer `+token ;
        await axios.post('/api/v1/user/activation-code', {code}, {
            headers: {
                'Authorization': bearer
            }
        } )
        .then(res => {

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.message
            })

            console.log(res.data.message);

            createTost(res.data.message, 'success')
            setErrBorder(false)
         
            Cookies.remove('act_OTP') 

            setTimeout(()=> {
                navigate('/login') 
            },2000)
            
            
            
        })
        .catch(error => {
            setErrBorder(true)
            createTost(error.response.data.message )
            dispatch({
                type : ACTIVATION_FAILED,
                payload: error.response.data.message
            })
            console.log(error.response.data.message);
        })
        
    } catch (error) {
        setErrBorder(true)
        createTost(error.response.data.message, )
        dispatch({
            type : ACTIVATION_FAILED,
            payload: error.response.data.message
        })

    }
}
// USER ACTIVATION  code resend / ont get a code
export const codeResend = ({token, userType} ) => async (dispatch) => {
    
    try {

        const bearer  = `Bearer `+ token ;

        console.log(bearer);
        await axios.post('/api/v1/user/resend-code', { userType }, {
            headers: {
                'Authorization': bearer
            }
        } )
        .then(res => {

            createTost(res.data.message, 'success')
  
            
        })
        .catch(error => {
            createTost(error.response.data.message )
            // dispatch({
            //     type : ACTIVATION_FAILED,
            //     payload: error.response.data.message
            // })
            console.log(error.response.data.message);
        })
        
    } catch (error) {
        createTost(error.response.data.message, )
        // dispatch({
        //     type : ACTIVATION_FAILED,
        //     payload: error.response.data.message
        // })

    }
}

// account activation with link
export const linkActivation = ({token, userId },navigate) => async (dispatch) => {

    await axios
    .post(`/api/v1/user/link-activate/${token}`, {userId})
    .then(res => {
        if (res.data.action === 'info') {
            dispatch({
                type : ACTIVATED,
                payload: res.data.message
            })
            setTimeout(() => {
                navigate('/login') 
            }, 5000);

            // createTost(res.data.message, "info");
        } else if(res.data.action === 'success') {
            dispatch({
                type : ACTIVATION_SUCCESS,
                payload: res.data.message
            })

            // createTost(res.data.message, "success");

        }else {
            dispatch({
                type : ACTIVATION_FAILED,
                payload: res.data.message
            })
            setTimeout(() => {
                navigate('/login') 
            }, 5000);
        }

        
    })
    .catch(error => {
        setTimeout(() => {
            navigate('/login') 
        }, 5000);
        dispatch({
            type : ACTIVATION_FAILED,
            payload: error.response.data.message
        })
    })


}

// forgote pass user search 
export const findForgotUser = (search, setSearch, setErrorBorder, navigate) => async (dispatch) =>{
    if(!search){
        setErrorBorder(true);
        dispatch({
            type: FIND_EMPTY,
            payload : 'Please fill in at least one field'
        })
    }else{
        try {
            await axios.post('/api/v1/user/search-forgot-user', {recoverID:search})
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: FIND_SUCCESS,
                    payload : res.data.message
                })
                setErrorBorder(false);

                // require set cookies

                navigate('/find-account')

            })
            .catch(error => {
                
                dispatch({
                    type: FIND_FAILED,
                    payload : error.response.data.message
                })

                // console.log(error.response.data.message);
            })
        } catch (error) {
            dispatch({
                type: FIND_FAILED,
                payload : error.response.data.message
            })

            // console.log(error.response.data.message);
            
        }
    }
}


// check password reset code and handel req 
export const resetCodeMatch = (resetCode, resetToken, setErrBorder, navigate, setErrorMsg) => async (dispatch) => {
    try {
        
        if (!resetCode) {
            setErrorMsg({status:true, msg: 'Please enter a code.'});
            setErrBorder(true);
            createTost("Enter security code");
            return;
        }
        if (!checkNumber(resetCode)) {
            setErrorMsg({status:true, msg: 'It looks like you entered some letters. Your code is 6 numbers long.'});
            setErrBorder(true);
            createTost("Code will be six digit & [0-9]");
            return;
        }
        if (!checkCode6(resetCode)) {
            setErrorMsg({status:true, msg: 'Your code is 6 numbers long.'});
            setErrBorder(true);
            createTost("Code will be six digit & [0-9]");
            return;
        }

        const token = JSON.parse(resetToken).reset_token;

        const bearer  = `Bearer `+token ;
        await axios.post('/api/v1/user/reset-code-match', {code: resetCode}, {
            headers: {
                'Authorization': bearer
            }
        })
        .then(res => {

            setErrorMsg({status:false, msg : '' });
            setErrBorder(false);
            createTost(res.data.message, 'success');
            Cookies.remove("resetToken")
            navigate('/reset-password')
        })
        .catch(error => {
            setErrorMsg({status:true, msg : error.response.data.message });
            setErrBorder(true);
            createTost(error.response.data.message);
            console.log(error.response.data.message);
        })
  
    } catch (error) {
        setErrorMsg({status:true, msg : error.response.data.message });
        setErrBorder(true);
        createTost(error.response.data.message);
        console.log(error.response.data.message);
    }
}
// handle set new password 
export const handleSetNewPass = (pass, reset_vfy, setErrorMsg, setErrBorder, navigate) => async (dispatch) => {
    try {
        
        if (!pass) {
            setErrorMsg({status:true, msg: 'Please enter new password.'});
            setErrBorder(true);
            createTost("Enter new password.");
            return;
        }
        if (pass.length < 6 || pass.length > 16) {
            setErrorMsg({status:true, msg: 'Password must be 8-16 characters long'});
            setErrBorder(true);
            // createTost("Code will be six digit & [0-9]");
            return;
        }
        // if (!passwordValid(pass)) {
        //     setErrorMsg({status:true, msg: 'Password must be at least one special character (!@#$%^&*), one number, one (a-z or A-Z) and (?=.*) are not allword'});
        //     setErrBorder(true);
        //     // createTost("Code will be six digit & [0-9]");
        //     return;
        // }

        const bearer  = `Bearer `+reset_vfy ;
        await axios.post('/api/v1/user/reset-password', {password : pass}, {
            headers: {
                'Authorization': bearer
            }
        })
        .then(res => {

            setErrorMsg({status:false, msg : '' });
            setErrBorder(false);
            createTost(res.data.message, 'success');
            Cookies.remove("reset_vfy")
            Cookies.remove("find_OTP")
            Cookies.remove("resetToken")

            // navigate('/') 
            navigate('/login')

        })
        .catch(error => {
            setErrorMsg({status:true, msg : error.response.data.message });
            setErrBorder(true);
            createTost(error.response.data.message);
            console.log(error.response.data.message);
        })
  
    } catch (error) {
        setErrorMsg({status:true, msg : error.response.data.message });
        setErrBorder(true);
        createTost(error.response.data.message);
        console.log(error.response.data.message);
    }
}

// reset password with link
export const resetPassLinkVfy = (id, token, setMsg, navigate) => async(dispatch) => {
    try {


        const bearer  = `Bearer `+token ;
        axios.post('/api/v1/user/reset-link-vfy', {userId: id},{
            headers: {
                'Authorization': bearer
            }
        })
        .then(res => {

            setMsg({ 
                status: false,
                title: '', 
                type: "" 
            })
            createTost(res.data.message, 'success');
            navigate('/reset-password')
        })
        .catch(error => {
            setMsg({ 
                status: true,
                title: error.response.data.message, 
                type: "error" 
            })
            createTost(error.response.data.message);
            console.log(error.response.data.message);
        })
        
    } catch (error) {
        setMsg({ 
            status: true,
            title: error.response.data.message, 
            type: "error" 
        })
        createTost(error.response.data.message);
        console.log(error.response.data.message);
    }
}

// user login req.
export const handleLogin = (logIn, setErrBorder, setErrmsg) => (dispatch) => {
    const {emailOrPhone, password} = logIn;

    if(!emailOrPhone || !password){
        if(!emailOrPhone){setErrmsg(prev => ({...prev, emailOrPhone: true }))}
        // else if(emailOrPhone){setErrmsg(prev => ({...prev, emailOrPhone: false }))}
        if(!password){setErrmsg(prev => ({...prev, password: true }))}
        // else if(password){setErrmsg(prev => ({...prev, emailOrPhone: false }))}
        return;
    }else{
        setErrmsg({})
    }
    
    

    alert('done')


}


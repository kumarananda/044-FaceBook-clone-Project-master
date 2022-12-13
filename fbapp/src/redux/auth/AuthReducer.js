import { ACTIVATED, ACTIVATION_FAILED, ACTIVATION_SUCCESS, FIND_EMPTY, FIND_FAILED, FIND_SUCCESS, REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType";
import authInitial from "./initialState";



// create auth reducer 
const AuthReducer = (state = authInitial ,{type, payload}) => {
    switch (type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading : true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading : false,
                message: payload
            }
        case REGISTER_FAILED:
            return {
                ...state,
                loading : false,
                message: payload
            }
            
            ///
        case ACTIVATION_SUCCESS:
            return {
                ...state,
                actResult : 'success',
                message: payload
            }
        case ACTIVATED:
            return {
                ...state,
                actResult : 'info',
                message: payload
            }
        case ACTIVATION_FAILED:
            return {
                ...state,
                actResult : 'faild',
                message: payload
            }

            ///
        case FIND_SUCCESS:
            return {
                ...state,
                actResult : 'user_found',
                message: payload

            }
        case FIND_FAILED:
            return {
                ...state,
                actResult : 'not_found',
                message: payload

            }
        case FIND_EMPTY:
            return {
                ...state,
                actResult : 'filed_empty',
                message: payload

            }


            

        default:
            return state
    }
}

export default AuthReducer;
import { combineReducers } from "redux";
import AuthReducer from "./auth/AuthReducer";
import tostReducer from "./tost/tostReducer";




const rootReducer = combineReducers({
    auth : AuthReducer,
    tost : tostReducer,
    
})

export default rootReducer; 
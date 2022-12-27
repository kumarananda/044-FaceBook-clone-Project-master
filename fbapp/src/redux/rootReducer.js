import { combineReducers } from "redux";
import AuthReducer from "./auth/AuthReducer";
import topLodeReducer from "./topLoader/topLodeReducer";

import tostReducer from "./tost/tostReducer";




const rootReducer = combineReducers({
    auth : AuthReducer,
    tost : tostReducer,
    toploader: topLodeReducer
    
})

export default rootReducer; 

import loaderInitial from "./topLoaderInitial"
import { LOADER_END, LOADER_START,  } from "./topLoaderTyps"



// create auth reducer 
const topLodeReducer = (state = loaderInitial , {type, payload}) => {
    switch (type) {

         // for loder
        case LOADER_START :
            return 100;
        case LOADER_END :
            return 0;
        default:
            return state
    }
}

export default topLodeReducer;
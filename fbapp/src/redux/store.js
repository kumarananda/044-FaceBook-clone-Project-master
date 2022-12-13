import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const midleware = [thunk]



// create store
const store =  createStore(rootReducer, composeWithDevTools(applyMiddleware(...midleware)))

export default store;


import {combineReducers} from 'redux'
import postReducer from './postReducer'
import categoryReducer from './categoryReducer'
const rootReducer = combineReducers({postReducer,categoryReducer})
export default rootReducer
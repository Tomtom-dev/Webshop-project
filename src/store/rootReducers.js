import {combineReducers} from "redux";
import productReducer from '../store/reducer'


const reducer = combineReducers({
    products : productReducer,
})

export default reducer;
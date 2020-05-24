import {combineReducers} from "redux";
import productReducer from '../store/reducer'
import cartReducer from '../cart/reducer'


const reducer = combineReducers({
    products : productReducer,
    cart: cartReducer,
})

export default reducer;
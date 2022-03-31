import { combineReducers } from "redux";
import { addressReducer } from "./Address/address.reducer";
import { cartReducer } from "./Cart/cart.reducer";

export default combineReducers({
    cart : cartReducer,
    address : addressReducer
})
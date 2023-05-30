import { combineReducers } from "redux";
import itemCart from "./itemCart";
import bag from "./bag";
import Installments from "./Installments";

const rootReducers = () => combineReducers(  {
    itemCart,
    bag,
    Installments,
});

export default rootReducers;
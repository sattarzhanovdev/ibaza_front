import { createStore ,compose} from "redux";
import rootReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";



const initialState = {};

const composeFunc = process.env.NODE_ENV === 'devolopment' ? composeWithDevTools : compose;

const store = createStore(rootReducers(), initialState, composeFunc);


export default store;
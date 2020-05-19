import { createStore } from "redux";
import reducer from "./reducer"; //we didn't create this yet

const store = createStore(reducer);

export default store; 
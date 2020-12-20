//store ini digunakan untuk menyimpan seluruh data
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
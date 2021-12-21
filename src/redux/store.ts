import {applyMiddleware, combineReducers, createStore} from "redux";
import flowersReducer from "./reducers/flowers-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    flowersCatalog: flowersReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;




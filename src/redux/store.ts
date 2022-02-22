import {applyMiddleware, combineReducers, createStore} from "redux";
import flowersReducer from "./reducers/flowers-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    flowersCatalog: flowersReducer
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsType<T extends{[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;



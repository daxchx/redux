import {combineReducers, createStore} from "redux"
import { counterReducer, toggleReducer } from "./reducers"

const reducers = combineReducers({
    count: counterReducer,
    toggle: toggleReducer
})

const store = createStore(reducers)

export default store
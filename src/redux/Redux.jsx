import { Provider, useDispatch, useSelector } from "react-redux"
import store from "./store"

export default function Redux() {
    return (
        <Provider store={store}>
            <div>Redux</div>
            <CounterHandler />
            <CounterView />
        </Provider>
    )
}

function CounterHandler() {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type: "toggle"})}>Toggle</button>
        </div>
    )
}

function CounterView() {
    const { count } = useSelector(state => state.count)
    const { toggle } = useSelector(state => state.toggle)

    return (
        <div>
            <div>{count} {toggle ? "ON" : "OFF"}</div>
        </div>
    )
}
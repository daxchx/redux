import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { increment } from "./slice";

export default function ReduxToolkit() {

    return (
        <Provider store={store}>
            <div>Redux Toolkit</div>
            <CounterHandler />
            <CounterView />
        </Provider>
    )
}

function CounterHandler() {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

function CounterView() {
    const count = useSelector(state => state.counter.count)

    return (
        <div>
            <div>{count}</div>
        </div>
    )
}


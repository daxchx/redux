const initialState = {
    count: 0
}

export function counterReducer(state = initialState, action) {
    switch(action.type) {   
        case "increment" :
            return { count: state.count + 1 }
        case "decrement" :
            return { count: state.count - 1 }
        default:
            return state
    }
}

export function toggleReducer(state = {toggle: false}, action){
    if(action.type === "toggle") return {toggle: !state.toggle}
    else return state
}
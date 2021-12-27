import React, { useReducer } from 'react'

const types = {
    increment:'increment',
    decrement:'decrement',
    reset:'reset'
}

const initialState = 10;

const init = (value) =>{
    return value
}

const reducer = (state,action) =>{
    switch (action.type) {
        case types.increment:
            return state+1
        case types.decrement:
            return state-1    
        case types.reset:
            return init(initialState)
        default:
            return state
    }
}

function CounterApp() {
    
    const [counter, dispatch] = useReducer(reducer, initialState, init)

    return (
        <div>
            <h1>Clicks: {counter}</h1>
            <button onClick={()=>dispatch({type:types.increment})}>Increment</button>
            <button onClick={()=>dispatch({type:types.decrement})}>Decrement</button>
            <button onClick={()=>dispatch({type:types.reset})}>Reset</button>
        </div>
    )
}

export default CounterApp

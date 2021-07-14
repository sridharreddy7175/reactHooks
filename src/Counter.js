import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const [disabled,setDisabled]=useState(true)
    const increment = () => {
        setCount(count + 1)
        setDisabled(false)
    }
    const decrement = () => {
        setCount(count - 1)
        if(count==1){
            setDisabled(true)
        }
    }

    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} disabled={disabled}>Decrement</button>
        </div>
    )
}


export default Counter;
import React, { useState } from 'react';

// sfc - Arrow function
// shift + alt + f - выравнивание кода

const Counter = () => {

    let [likes, setLikes] = useState(0)
    let [value, setValues] = useState('Some text')

    let increment = () => {
        setLikes(likes += 1)
    }

    let decrement = () => {
        setLikes(likes -= 1)
    }

    return (
        <div>
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={e => setValues(e.target.value)}
            />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
import React, {useState} from 'react';

const Counter = () => {
    
    const [count, setCount] = useState(0);// It's hook

    function increment() {
        return setCount(count+1)
    }
    function decrement() {
        return setCount(count-1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
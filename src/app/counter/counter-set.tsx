"use client";

import { useState } from "react"

export default function CounterSet(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    );
}
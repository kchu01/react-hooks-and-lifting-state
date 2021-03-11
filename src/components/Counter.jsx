import { useState } from 'react'
// will retun an array of two things


export default function Counter() {
    // setState hook returns a state value and a fuction set the value
    const [count, setCount] = useState(1)

    // event handlers
    const handleIncreaseCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Hello from counter</h1>

            <h2>the count is {count} </h2>

            <button onClick={handleIncreaseCount}>Increase the count!</button>
        </div>
    )
}
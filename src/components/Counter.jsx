import { useState, useEffect } from 'react'
// will retun an array of two things


export default function Counter() {
    // useState hook returns a state value and a fuction set the value
    const [count, setCount] = useState(1)
    // example of having an object 
    const [user, setUser] = useState({ name: 'Kathy' })


    // use effect hook
    // use effect runs after ever render
    useEffect(() => {
        // console.log('after ever render')
        console.log(count)

        // return call back is invoked on unmount 
        // return () => {
        //     console.log('on every unmount')
        // }
    })

    // you can have more than one useEffect hooks
    // unless you pass it a variable in an array as a second arg
    // useEffect(() => {
    //     console.log('i only go when user changes')
    // }, [user])

    // useEffect(() => {
    //     console.log('I only run once')
    //     return () => {

    //     }
    // }, [])

    // event handlers
    const handleIncreaseCount = () => {
        // setCount is still asynce
        setCount(count + 1)
        // this code executes first
        console.log(count)
    }

    return (
        <div>
            <h1>Hello from counter</h1>

            <h2>the count is {count} </h2>

            <h3>Hello {user.name}: are you enjoying functional components?</h3>

            <button onClick={handleIncreaseCount}>Increase the count!</button>
        </div>
    )
}
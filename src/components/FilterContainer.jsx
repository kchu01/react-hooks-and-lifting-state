import { useState, useEffect } from 'react'

import FilterForm from './FilterForm'
import FruitList from './FruitList'

export default function FilterContainer() {
    // the shared state will live here
    const [fruits, setFruits] = useState([
        'pineapple',
        'mango',
        'banana',
        'apple',
        'kiwi',
        'pear',
        'strawberry'
    ])

    // add state value for input
    const [fruitInputValue, setFruitInputValue] = useState('')

    // debug to check that state is updating
    useEffect(() => {
        console.log(fruitInputValue)
        setFruitInputValue('')
    }, [fruits])


    // add submit eventHandler
    const handleFruitSubmit = e => {
        e.preventDefault()
        // only let fruits pass that do not equal the input value
        const filteredFruit = fruits.filter(fruit => {
            return fruit != fruitInputValue
        })
        setFruits(filteredFruit)
    }


    // add on change handler
    const handleFruitChange = e => {
        console.log(e.target.value)
    }

    return (
        <div className='container' >
            <FilterForm
                handleFruitChange={handleFruitChange}
                fruitInputValue={fruitInputValue}
                handleFruitSubmit={handleFruitSubmit}
            />
            <FruitList fruits={fruits} />

        </div>
    )
}
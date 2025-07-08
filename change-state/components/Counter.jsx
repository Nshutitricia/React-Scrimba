import React from "react"

export default function Counter(){
    const [count, setCount] = React.useState(0)
    function add(){
        setCount(prevCount => prevCount +1)
    }
    function substract(){
        setCount(prevCount => prevCount -1)
    }
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    function handleClick(){
        setIsGoingOut(prev => !prev)
    }

    return (
        <main className="container">
            <h1>Increment and Decrement</h1>
            <div className="counter">
                <button onClick={substract} className="minus">-</button>
                <h2 className="count">{count}</h2>
                <button onClick={add} className="plus">+</button>
            </div>

            <div className="toggle">
                <h1> Toggle this button</h1>
                <h2 onClick={handleClick} className="count">{isGoingOut ? "Yes" :"No"}</h2>
            </div>
        </main>
    )
}


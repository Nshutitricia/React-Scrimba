import { useState } from "react"
export default function Button(){
    const [count, setCount] = useState(0)
    function toggleCount(){
        setCount((prev)=> prev + 1)
    }
    return (
        <div className=" m-7 flex flex-col items-center">
            <p>Button has been clicked : {count} times</p>
            <button onClick={toggleCount} className="border-2 bg-gray-500 px-4 m-7">
                Click Me!
            </button>
        </div>
    )
}
import React from "react"
import { useState,useEffect } from "react"
export default function Header(){
    const [random, setRandom] = useState([])
    useEffect(()=>{
        handleClick()
    },[])
    const randomElements = random.map((random) => (
        <div className="mx-auto border-2 shadow-md border-gray-200 p-5 w-full flex flex-col">
            <img src={random.picture.large}alt="" />
            <h1 className="font-bold">{random.name.first} {random.name.last}</h1>
            <p>{random.name.title}</p>
        </div>
    ))
    function handleClick(){
       fetch("https://randomuser.me/api/?results=10")
        .then(data=> data.json())
        .then(data => setRandom(data.results))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <ul className="flex gap-2 justify-center mt-6 ">
                <li className="underline text-gray-400">Home</li>
                <li className="underline text-gray-400">Exercise2</li>
                <li className="underline text-gray-400">Exercise3</li>
                <li className="underline text-gray-400">Exercise4</li>
                <li className="underline text-gray-400">Exercise5</li>
                <li className="underline text-gray-400">Exercise6</li>
                <li className="underline text-gray-400">Exercise7</li>
                <li className="underline text-gray-400">Exercise8</li>
                <li className="underline text-gray-400">Exercise9</li>
            </ul>
            <button onClick={handleClick}  className="border-3 p-3 rounded-xl bg-[#f0003c] text-white font-bold flex mx-auto mt-10">Fetch Random</button>
            <div className="grid grid-cols-2 gap-4 mt-6">
                {randomElements}
            </div>
        </div>
    )
    
}
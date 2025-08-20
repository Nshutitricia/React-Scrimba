import React, { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

import VanDetails from "../VanDetails"
export default function VansDetail(){
    const [vanDescriptor, setVanDescriptor]= useState([])
    useEffect(()=>{
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVanDescriptor(data.vans))
            .catch(error => console.error('Error fetching vans:', error));
    },[])

    const vanComponent = vanDescriptor.map((van)=>(
        <Link to={van.id}>
            <div key={van.id} className="flex shadow-md p-4 " >
                <img src={van.imageUrl} alt="" className="w-20" />
                <div className="flex flex-col justify-center px-4">
                    <h1 className="font-bold">{van.name}</h1>
                    <p className="text-gray-400">${van.price}/day</p>
                </div>
            </div>
        
        </Link>
    ))
    return (
       <div className="flex flex-col  p-6 m-6 ">
            <h1 className="font-bold text-xl pb-4">Your Listed vans</h1>
            {vanDescriptor.length >0 ? (
                <div>
                    {vanComponent}
                </div>
            ) : <p>Loading...</p>}
       </div>
    )
}
import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function VanDetails(){
    const {id}= useParams()
    const [vanDetail, setVanDetail] = useState("")
    useEffect(()=>{
        fetch(`/api/vans/${id}`)
        .then((data)=> data.json())
        .then(data => setVanDetail(data.vans))
        .catch((err)=> console.log(err))           
    },[id])
        
    return (
        <div className="flex flex-col items-center gap-4 p-4">
           {vanDetail ? (
                <div className=" ">
                    <img src={vanDetail.imageUrl} alt="" className="w-full" />
                    <button className={` ${vanDetail.type.toLowerCase() === "simple" ? "bg-[#E17654]":
                            vanDetail.type.toLowerCase() === "luxury" ? "bg-black ": "bg-[#115E59] " }
                        p-2 rounded-lg px-4 mt-2 text-white font-bold`}>{vanDetail.type}</button>
                    <h1 className=" mt-4 font-bold text-[20px]">{vanDetail.name}</h1>
                    <span className=" mt-4 font-bold text-[20px]">${vanDetail.price} <span>/day</span></span>
                    <p className="mt-3">{vanDetail.description}</p>
                    <button className="bg-[#ff8c38] p-3 w-[90%] mt-10 font-bold mb-15 text-white">Rent this van</button>
                </div>
            ) : <p>Loading...</p>}
        </div>
    )
}
import { useEffect, useState } from "react"
import { Outlet, useParams,NavLink } from "react-router-dom"

export default function HostVanInfo(){
    const [vanInfo, setVanInfo] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        fetch(`/api/vans/${id}`)
        .then(res=> res.json())
        .then(data => setVanInfo(data.vans))
        .catch((err)=> console.log(err))  
    },[id])
    console.log(vanInfo)
    const linkStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    if(!vanInfo) {
        return <h1>Loading...</h1>
    }
    return (
      <div>
        <NavLink to=".." relative="path" >&larr; <span> Back to all vans</span></NavLink>
            <div className="flex p-10 ">
                <img src={vanInfo.imageUrl} className="w-40" />
                <div className="flex flex-col px-6 justify-center gap-3">
                    <button className={` ${vanInfo.type.toLowerCase() === "simple" ? "bg-[#E17654]":
                            vanInfo.type.toLowerCase() === "luxury" ? "bg-black ": "bg-[#115E59] " }
                        p-2 rounded-lg px-4 mt-2 text-white font-bold`}>{vanInfo.type}</button>
                    <h1 className="font-bold text-xl">{vanInfo.name}</h1> 
                    <p className="text-gray-400">${vanInfo.price}/day</p>
                </div>
            </div>
            <nav className="flex justify-between p-4 items-center" >
                    <ul className="flex gap-4">
                        <li>
                            <NavLink to="."
                            end
                            style={({isActive}) => isActive ? linkStyle : null }>
                                Details
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="pricing"
                            style={({isActive}) => isActive ? linkStyle : null }>
                                Pricing
                            </NavLink>
                        </li><li>
                            <NavLink to="photo"
                            style={({isActive}) => isActive ? linkStyle : null }>
                                Photo
                            </NavLink>
                        </li>
                    </ul>
            </nav>
            <main>

                <Outlet />
            </main>
       </div>
    )
}
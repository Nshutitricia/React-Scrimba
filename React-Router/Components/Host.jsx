import React from "react";
import {NavLink , Outlet } from "react-router-dom";

export default function Host(){
    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"

    }
    return (
       <div>
         <nav className="bg-[#FFF7ED] flex justify-between p-4 items-center">
                <ul className='flex gap-4'>
                    <li> 
                        <NavLink to="/host" end
                        style= {({isActive})=> (isActive ? activeLink : null)}
                    >
                        Dashboard
                        </NavLink>
                        </li>
                    <li> 
                        <NavLink to="/host/income"
                        style= {({isActive})=> (isActive ? activeLink : null)}
                        >Income
                        </NavLink>
                        </li>
                    <li> 
                        <NavLink to="/host/vans"
                        style= {({isActive})=> (isActive ? activeLink : null)}
                        >Vans
                        </NavLink>
                        </li>
                    <li
                    ><NavLink to="/host/reviews"
                        style= {({isActive})=> (isActive ? activeLink : null)}
                    >Reviews
                    </NavLink>
                    </li>
                </ul>
        </nav>
        <Outlet/>
       </div>
    )
}

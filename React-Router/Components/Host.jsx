import React from "react";
import { Link , Outlet } from "react-router";

export default function Host(){
    return (
       <>
         <nav className="bg-[#FFF7ED] flex justify-between p-4 items-center">
                <ul className='flex gap-4'>
                    <li> <Link to="/host">Dashboard</Link></li>
                    <li> <Link to="/host/income">Income</Link></li>
                    <li><Link to="/host/reviews">Reviews</Link></li>
                </ul>
        </nav>
        <Outlet />
       </>
    )
}
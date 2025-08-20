import {NavLink} from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Header() {
    const activeLink = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"

    }
    return (
        <>
            <nav className="bg-[#FFF7ED] flex justify-between p-4 items-center">
                <h1><NavLink to="/" className='font-bold'>#VANLIFE</NavLink></h1>
                <ul className='flex gap-4'>
                    <li> <NavLink to="/host"
                         style= {({isActive})=> (isActive ? activeLink : null)}
                    >Host</NavLink></li>
                    <li> <NavLink to="/about"
                         style= {({isActive})=> (isActive ? activeLink : null)}
                    >About</NavLink></li>
                    <li><NavLink to="/vans"
                         style= {({isActive})=> (isActive ? activeLink : null)}
                    >Vans</NavLink></li>
                </ul>
            </nav>
        </>
    )

}
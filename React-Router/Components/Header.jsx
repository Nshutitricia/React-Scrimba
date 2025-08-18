import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="bg-[#FFF7ED] flex justify-between p-4 items-center">
                <h1><Link to="/" className='font-bold'>#VANLIFE</Link></h1>
                <ul className='flex gap-4'>
                    <li> <Link to="/host">Host</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li><Link to="/vans">Vans</Link></li>
                </ul>
            </nav>
        </>
    )

}
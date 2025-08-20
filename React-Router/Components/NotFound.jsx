import React from 'react'
import { Link } from 'react-router'
const NotFound = () => {
    
  return (
    <div className='flex flex-col justify-center items-center p-6 h-screen'>
      <h1 className='font-bold text-xl'>Sorry, the page you were looking for was not found</h1>
      <Link to="/" className='border-2 bg-black text-white p-4 m-4'>Return to Home</Link>
    </div>
  )
}

export default NotFound

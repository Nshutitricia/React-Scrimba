import React, { useState } from 'react'

const Login = () => {
    const [loginFormData,setLoginFormData] = useState({email:"" ,password:""})
    function handleSubmit(e){
        e.preventDefault()
        console.log(loginFormData)
    }
    function handleChange(e){
        const {name,value} = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]:value
        }))
    }
  return (
    <div className='flex flex-col p-6 h-screen justify-center items-center'>
        <h1 className='font-bold text-2xl flex  justify-center'>Sign in to your account</h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-[50%] p-6 '>
            <input type="email" name="email"
            onChange={handleChange} 
            value ={loginFormData.email}placeholder='Email address' className='border-2 border-gray-200 p-2 focus:outline-none' />
            <input type="password" name="password" 
            onChange={handleChange}  value={loginFormData.password}placeholder='Password' className='border-2 border-gray-200 focus:outline-none p-2'/>
            <button className='bg-amber-500 p-4 m-5 text-white'>Login</button>

        </form>
        
    </div>
  )
}

export default Login

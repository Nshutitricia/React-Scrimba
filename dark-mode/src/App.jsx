import React from 'react'
import { useState} from 'react'

const App = () => {
  const [color, setColor] = useState(false)
  function handleClick(){
    setColor(prevColor => !prevColor )
  }
  return (
    <div className=' w-full text-center'>
      <div className={`${color ? "bg-black h-screen text-white" : "bg-white" }  ` } >
        <h1 className='font-bold text-[32px]'>Alex Zenith</h1>
        <button onClick = {handleClick} className='border-2 rounded-xl '> {color ? "☀️" : "🌙"}</button>
      </div>
    </div>
  )
}

export default App

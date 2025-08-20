import React from 'react'
import { useOutletContext } from 'react-router'
const HostVanPhoto = () => {
  const {vanInfo}= useOutletContext()
  return (
    <div className='p-4'>
      <img src={vanInfo.imageUrl} alt="" className='w-20' />
    </div>
  )
}

export default HostVanPhoto

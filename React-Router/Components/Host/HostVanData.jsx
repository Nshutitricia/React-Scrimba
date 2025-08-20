import React from 'react'
import { useOutletContext } from 'react-router'

const HostVanData = () => {
  const {vanInfo} = useOutletContext()
  return (
    <div className='flex flex-col gap-3 p-4'>
      <h1> <span className='font-bold'>Name:</span> {vanInfo.name}</h1>
      <h1> <span className='font-bold'>Category:</span> {vanInfo.name}</h1>
      <h1 className='max-w-[600px]'> <span className='font-bold :'>Description:</span> {vanInfo.description}</h1>
      <h1> <span className='font-bold'>Visibility:</span> Public</h1>
    </div>
  )
}

export default HostVanData

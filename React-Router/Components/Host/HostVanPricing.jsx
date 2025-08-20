import React from 'react'
import { useOutletContext } from 'react-router'

const HostVanPricing = () => {
  const {vanInfo} = useOutletContext()
  return (
    <div className='font-bold text-xl p-4'>
      <h1>${vanInfo.price}/day</h1>
    </div>
  )
}

export default HostVanPricing

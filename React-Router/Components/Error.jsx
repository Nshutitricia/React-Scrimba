import React from 'react'
import { useRouteError } from 'react-router'
const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <>
        <h1>{error.message}</h1>
        <pre>{error.status} -{error.statusText}</pre>
    </>
  )
}

export default Error

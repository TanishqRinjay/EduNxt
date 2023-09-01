import React from 'react'
import "./LoadingSpinner.css"

const LoadingSpinner = () => {
  return (
    <div className='w-full h-[50vh] flex items-center justify-center'>
        <div className="lds-dual-ring"></div>
    </div>
  )
}

export default LoadingSpinner
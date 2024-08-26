import React from 'react'

const LoadingBar = () => {
  return (
    <div className='fixed flex flex-col gap-5 text-3xl inset-0 bg-black items-center justify-center z-50'>
        LOADING...
        <div className='w-1/2 bg-gray-800 overflow-hidden'>
            <div className='h-10 bg-white animate-loading'></div>
        </div>
        PLEASE WAIT
    </div>
  )
}

export default LoadingBar
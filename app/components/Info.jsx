import React from 'react'

const Info = () => {
  return (
    <div className='w-[100%] h-20 md:h-40 flex justify-around items-center bg-gray-800 text-white'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>128k</h1>
        <p className='text-[10px] md:text-base'>Renters</p>
      </div>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>300+</h1>
        <p className='text-[10px] md:text-base'>Specialists</p>
      </div>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>78%</h1>
        <p className='text-[10px] md:text-base'>Year Growth</p>
      </div>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>10k+</h1>
        <p className='text-[10px] md:text-base'>Properties</p>
      </div>
    </div>
  )
}

export default Info

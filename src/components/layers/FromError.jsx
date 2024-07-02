import React from 'react'

const FromError = ({err}) => {
  return (
    <div>
        <p className='absolute top-full translate-y-[1px] text-red-500 text-[13px]'>{err}</p>
    </div>
  )
}

export default FromError
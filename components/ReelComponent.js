import React from 'react'

const ReelComponent = ({name,image=null,dp=null}) => {
  return (
    <div className='relative h-[200px] w-[150px] bg-white drop-shadow-lg rounded-lg hover:scale-110 transition duration-300'>
        {image ? <img src={image} className='overflow-hidden object-cover h-[200px] w-[150px] rounded-lg' />:null}
        <p className='absolute bottom-2 left-4 text-gray-300'>{name}</p>
        { dp? <img className='absolute h-8 w-8 rounded-full z-50 top-2 left-2 bg-gray-300 drop-shadow-lg object-cover' src={dp}/>:<div className='absolute h-8 w-8 rounded-full z-50 top-2 left-2 bg-gray-300 drop-shadow-lg'/>}
    </div>
  )
}

export default ReelComponent
import React from 'react';

const SideBarIcon = ({Icon,title}) => {
  return (
    <div className='pl-2 py-2 flex items-center hover:bg-slate-300 hover:bg-opacity-50 group cursor-pointer'>
        <Icon  size={25} className='text-gray-500 group-hover:text-blue-500'/>
        <p className='hidden sm:inline-flex pl-4 group-hover:text-blue-500'>{title}</p>
    </div>
  )
}

export default SideBarIcon
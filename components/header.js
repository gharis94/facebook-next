import React from 'react'
import {BsFacebook,BsSearch} from 'react-icons/bs';
import {AiOutlineHome,AiOutlinePlayCircle,AiOutlineShoppingCart} from 'react-icons/ai';
import {FiFlag} from 'react-icons/fi';
import {HiOutlineUserGroup} from 'react-icons/hi';
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Header = () => {
    const {data:{user}}=useSession()
   console.log(user)
  return (
    <div className=' bg-white drop-shadow-md p-2 flex'>
        {/* left */}
        <div className='flex ml-4 items-center space-x-4'>
            <BsFacebook className=' text-blue-500' size={40} />
            <div className='hidden sm:inline-flex bg-gray-100 px-2 x items-center rounded-full'>
                <BsSearch className='text-gray-500'/>
                <input type="text" placeholder='Search...' className='bg-transparent ml-2 flex-shrink' />
            </div>
        </div>
        {/* center */}
        <div className='flex flex-grow items-center sm:space-x-2 justify-center'>
            <HeaderIcon Icon={AiOutlineHome} active/>
            <HeaderIcon Icon={AiOutlinePlayCircle}/>
            <HeaderIcon Icon={AiOutlineShoppingCart}/>
            <HeaderIcon Icon={FiFlag}/>
            <HeaderIcon Icon={HiOutlineUserGroup}/>
        </div>
        {/* right */}
        <div className='flex items-center pr-4 space-x-2'>
            <p>{user?.name}</p>
            <img onClick={()=>signOut()} src={user?.image} width={40} height={40} className='rounded-full cursor-pointer'/>
        </div>
    </div>
  )
}

export default Header
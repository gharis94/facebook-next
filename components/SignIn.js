import React from 'react'
import {BsFacebook} from 'react-icons/bs';
import { signIn } from 'next-auth/react';


const SignIn = () => {
  return (
    <div className='grid place-items-center mt-20'>
        <BsFacebook className='text-blue-500' size={100}/>
        <p onClick={()=>signIn()} className='mt-10 py-1 px-4 bg-blue-500 rounded-full text-white hover:bg-blue-600 cursor-pointer'>Sign In With Facebook</p>
    </div>
  )
}

export default SignIn
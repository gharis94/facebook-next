import React from 'react';
import {RxAvatar} from 'react-icons/rx';

const ChatComponent=({name,src=null})=>{

    return(
        <div className='flex py-2 hover:bg-gray-200 cursor-pointer w-full p-2 rounded-lg' >
            {src? <img src={src}/>:<RxAvatar size={25}/> }
            <p className='pl-2'>{name}</p>
        </div>
    )
}
export default ChatComponent;
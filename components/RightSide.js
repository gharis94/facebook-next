import React,{useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {BiVideoPlus,BiDotsHorizontalRounded} from 'react-icons/bi';
import ChatComponent from './ChatComponent';

const arr=[
    {name:'adas'},
    {
        name: 'as'
    },
    {
        name: 'ad'
    },
    {
        name: 'as'
    },
]

const RightSide = () => {
    const [search,setsearch] =useState('');
    const [click,setClick] =useState(false);
  return (
    <div className='w-2/12 mt-4 hidden sm:visible sm:flex sm:flex-col'>
        <div className='flex justify-between px-2 items-center text-gray-500 border-b-2 pb-4'>
            <p>Contacts</p>
            <div className='flex justify-evenly space-x-2  cursor-pointer'>
                <BiVideoPlus className={`${click? 'hidden':null}`} size={20}/>
                <div className = {
                    `flex ${click? 'bg-white':''}  px-1 rounded-lg`
                } >
                    
                    <input 
                        placeholder='Search..' 
                        className={`${click? null:'hidden'} w-28 bg-transparent outline-none`} 
                        type='text'
                        onChange={(e)=>setsearch(e.target.value)}
                        />
                    <AiOutlineSearch onClick={()=>setClick(!click)} size={20}/>
                </div>
                
                <BiDotsHorizontalRounded className={`${click? 'hidden':null}`} size={20}/>
            </div>    
        </div>
        <div className='space-y-2 text-gray-500'>
            {    arr.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())).map(item=>(
                <ChatComponent key={item.name} name={item.name}/>
            ))
            }
        </div>
        
        
    </div>
  )
}

export default RightSide;
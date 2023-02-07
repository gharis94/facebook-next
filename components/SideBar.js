import React from 'react'
import {BiGroup} from 'react-icons/bi';
import {AiTwotoneCalendar} from 'react-icons/ai';
import {HiOutlineUserGroup} from 'react-icons/hi';
import SideBarIcon from './SideBarIcon';
import  {AiFillShop} from 'react-icons/ai';


const SideBar = () => {
  return (
    <div className='w-fit h-100 bg-slate-100 pr-4'>
        <SideBarIcon title='Friends' Icon={BiGroup}/>
        <SideBarIcon title='Most Recent'  Icon={AiTwotoneCalendar}/>
        <SideBarIcon title='Groups' Icon={HiOutlineUserGroup}/>
        <SideBarIcon title='Market Place' Icon={AiFillShop}/>
    </div>
  )
}

export default SideBar
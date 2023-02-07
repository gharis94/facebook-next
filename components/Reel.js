import React from 'react'
import ReelComponent from './ReelComponent'

const arr=[
    {
        name:'abc',
        image:'https://images.unsplash.com/photo-1675725564198-a33fceec9433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        dp: 'https://images.unsplash.com/photo-1675703819580-ff8351d1d663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name:'bcd'
    },
    {
        name:'hjfk'
    },
    {
        name:'ieorj'
    }
]

const Reel = () => {
  return (
    <div className='grid grid-cols-1 place-content-center'>
        <div className='flex space-x-3 overflow-x'>
        {arr.map(item=>(
            <ReelComponent key={item.name} name={item.name} {...item}/>
        ))}
    </div>
    </div>
    
  )
}

export default Reel
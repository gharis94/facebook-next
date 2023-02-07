import React,{useRef, useState} from 'react';
import { useSession } from 'next-auth/react';
import {BsFillCameraVideoFill} from 'react-icons/bs';
import {MdPhotoLibrary,MdTagFaces} from 'react-icons/md';


const FeedInputComponent = () => {
    const {data:{user}} =useSession();
    const [state,setState] = useState('');
    const [imageState,setImageState] =useState(null);
    const imageRef = useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(state)
        setState('')
    }
    const imageChange=(e)=>{
        const reader = new FileReader()
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload=(readerEvent)=>{
            setImageState(readerEvent.target.value)
        }
    }
  return (
    <div  className = 'mt-6 bg-white rounded-lg px-4 py-1 drop-shadow-xl ' >
        <div className='flex space-x-1 pb-4 border-b-2'>
            <img src={user?.image}  className='rounded-full ' alt="profile" />
            <form className='flex w-full' onSubmit={(e)=>handleSubmit(e)}>
                <input value={state} onChange={(e)=>setState(e.target.value)} className='bg-gray-100 rounded-full flex-1 pl-2 outline-none' placeholder={`Type here ${user?.name}`}/>
                <button hidden type='submit'>Submit</button>
            </form>
            {imageState && <div>
                <img src={imageState}/>
                <p>Remove</p>
            </div>}   
        </div>
        <div className='flex justify-around mt-2'>
            <div className='px-6 py-1 hover:bg-gray-100 hover:scale-110 rounded-lg'>
                <BsFillCameraVideoFill  size={20} className='text-red-500 '/>
            </div>
            <div onClick={()=>imageRef.current.click()} className = 'px-6 py-1 hover:scale-110 rounded-lg' >
                <MdPhotoLibrary className='text-green-500' size={20}/>
                <input ref={imageRef} onChange={(e)=>imageChange(e)} hidden type="file" />
            </div>
            <div className = 'px-6 py-1 hover:scale-110 rounded-lg' >
                <MdTagFaces className='text-yellow-500' size={20}/>
            </div>
                        
        </div>
        
    </div>
  )
}

export default FeedInputComponent
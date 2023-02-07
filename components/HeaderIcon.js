import React from "react";

const HeaderIcon =({Icon,active})=>{

    return(
        <div className="text-gray-500 px-4 md:px-6 hover:border-b-2 hover:border-blue-300 cursor-pointer group">
            <Icon size={25} className={`group-hover:text-blue-500 ${active && 'text-blue-500'}`}/>
        </div>
    )
}
export default HeaderIcon;
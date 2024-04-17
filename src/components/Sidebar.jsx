import React from 'react';
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';



const Sidebar = () => {
    const sidebarItem = [
        {
            icons: <GoHomeFill size={24} />,
            title: "Home",
            path: '/'
        },
        {
            icons: <SiYoutubeshorts size={24} />,
            title: "Shorts",
            path: '/'
        },
        {
            icons: <MdOutlineSubscriptions size={24} />,
            title: "Subscriptions",
            path: '/'
        },
    ]
    
    // const open = false;
    const open = useSelector((store)=>store.app.open);
    console.log(open);

    return (
        // <div className='container relative w-[15%] overflow-y-auto overflow-x-hidden l-0 h-[calc(100vh-3.6rem)] '>
        <div className={`"container relative overflow-y-auto overflow-x-hidden l-0 h-[calc(100vh-3.6rem)]" ${open ? "w-[15%] transition ease-in-out delay-300" : "w-[5%] transition ease-in-out"}` }>
            <div className='cursor-pointer items-center pl-4 pr-1   mt-3 '>
                {/* callback function implementation */}
                {
                    sidebarItem.map((item, index) => {
                        return (
                            // key={index} this is bad practice
                            // key={items.id} this is good practice... for now we don't have id, so using index
                            <div key={index} className='home icon flex gap-3 w-full px-3 py-2 bg-gray-100 text-sm font-bold rounded-lg'>
                                {item.icons}
                                <p className={`${open ? '' : "hidden"}`}>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='mt-1 pl-1 bg-red-800' />
            <div className='you'></div>
            <div className='subscription'></div>
        </div>
    )
}

export default Sidebar

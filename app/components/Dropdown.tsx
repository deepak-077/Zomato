"use client"
import { useState } from "react";

function Dropdown(){
    const [isOpen, setIsOpen]= useState(false);

    function onClickHandle(){
        console.log("hello")
        setIsOpen(prev =>!prev)
    }
    return(
        <div className="flex flex-row relative">
        <img className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px]" src="placeholder.png" alt="" />
        <input className=" pl-10  rounded-xl w-[180px] h-[40px] md:w-[238px] h-[52px]" type="text" placeholder="Location" onClick={onClickHandle}/>
        <img className={`absolute left-50 top-1/2 transform -translate-y-1/2  w-[12px] h-[12px]  ${isOpen ? "rotate-180": "rotate-0"}`}
        src="downward-arrow.png" alt=" "
        onClick={onClickHandle}
        />

        {isOpen && 
        (
            <div className="absolute top-full left-0 mt-1 w-[358px] h-[81px] bg-white border-white-50 rounded-sm shadow-lg z-20 ">
                <ul className="py-2 ">
                <li key="detect-location" className="relative pl-8 ">
                    <img className="absolute left-3 top-1/4 w-[14px] h-[14px]" src="target.png" alt="" />
                    Detect current location </li>
                <li key="gps" className="pl-8">Using GPS</li>
                </ul>
            </div>
            
        )}
                  
        </div>
    )

}
export default Dropdown;
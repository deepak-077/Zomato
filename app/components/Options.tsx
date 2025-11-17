"use client"

import { useState } from "react";
function Options(){
    const[active, setActive]= useState("dine");


    return (
        <>
        <div className="flex flex-row justify-start overflow-x-auto">

            {/* dine out */}
            <div className="flex flex-row relative m-2">

                <img className="absolute top-1/3 left-5 w-[30px] h-[30px]" src={active === 'dine'? "dinner.png" :"dine.png"} alt="" />
                
            <button className={` cursor-pointer px-[8px] py-[8px] mx-[10px] my-[3px] pl-10 text-xl h-[72px] w-[170px] md:w-[190px]
                ${active === 'dine'? "text-[rgb(239,79,95)]": "text-black" }`}
                onClick={() =>{
                    setActive('dine')
                }} > Dining Out</button>

            </div>

            {/* delivery */}

            <div className="flex flex-row relative m-2">

                <img className="absolute top-1/3 left-3 w-[30px] h-[30px]" src={active === 'delivery'? "food-delivery.png" :"food-delivery (1).png"} alt="" />
                
            <button className={` cursor-pointer px-[8px] py-[8px] mx-[10px] my-[3px] pl-10 text-xl w-[150px] h-[72px] md:w-[166px] 
                ${active === 'delivery'? "text-[rgb(239,79,95)]": "text-black" }`}
                onClick={() =>{
                    setActive('delivery')
                }} > Delivery</button>

            </div>

            {/* Nightlife */}
            <div className="flex flex-row relative m-2">

                <img className="absolute top-1/3 left-3 w-[30px] h-[30px]" src={active === 'night'? "beer2.png" :"beer.png"} alt="" />

                <button className={` cursor-pointer px-[8px] py-[8px] mx-[10px] my-[3px] pl-10 text-xl w-[152px] h-[72px] md:w-[168px] 
                ${active === 'night'? "text-[rgb(239,79,95)]": "text-black" }`}
                onClick={() =>{
                    setActive('night')
                }} > Nightlife</button>

            </div>
            
        </div>
        
        </>
    )

}

export default Options;
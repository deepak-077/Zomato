"use client"

import { useState } from "react";
import Dropdown from "./Dropdown";
import Login from "./Login";
import Signup from "./Signup";

function Navbar(){
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);

    function handleLogin(){
        setLogin(prev=>!prev)
    }

    function handleSignup(){
        setSignup(prev=>!prev)
    }
    function handleClose(){
        setLogin(false)
    }

    return(
        <nav className='flex flex-row justify-center items-center  w-full p-2 '>

        <div className="flex flex-row items-center w-full  ">
            <img className='flex-shrink-0 w-[120px] mr-2 md:w-[160px] h-[27px] md:mr-4' src="zomato.png" alt="logo" />

            <div className="hidden md:flex flex-row items-center flex-1 gap-4 shadow-lg"> 
                
                <div className="flex-shrink min-w-[150px] md:min-w-[180px]" >

               <Dropdown/>
                
                </div>   
            
            {/* search bar */}
            <div className='flex flex-row rounded-xl items-center flex-1 min-w-[200px]  '> |
            <img className=" w-[28px] h-[28px] m-2 flex-shrink-0" src='search.png'></img>
            <input className=" rounded-xl shadow-2x  w-[415px] h-[52px] text-ellipsis" type = 'text' placeholder="Search for restraurant, cuisine or a dish..."></input> 
            </div>
    
            </div>
            <div className="flex items-center gap-4 ml-4 whitespace-nowrap">
                <button className="w-full h-10 p-2 text-gray-500" onClick={handleLogin}>Log in</button>
                <button className="w-full h-10 p-2 text-gray-500" onClick={handleSignup}>Sign up</button>
            </div>
           

        </div> 

        {/* rendering signup component */}
        {signup && (
            <div className="fixed inset-0  bg-opacity-50 z-50 flex justify-center items-center">
                <div className="relative flex justify-center items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <Signup/>
                </div>
            </div>
        )}
        {/* rendering login component */}
        {login && (
            <div className="fixed inset-0 z-50 flex justify-center items-center">
                <div className="relative flex justify-center items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    <Login/>
                </div>
            </div>
        )}
        
        </nav>

    )
}

export default Navbar;
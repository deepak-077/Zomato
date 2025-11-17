"use client"

import { useState } from "react";

function Menu() {

  const [open, setOpen] = useState(false);

  function toggle(){
    setOpen(prev=>!prev);
  }

  return (
    <>
    <div className="flex flex-row justify-between mx-10 ">
    <button
        className="flex flex-col justify-center items-center w-10 h-10 relative z-50"
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-1 bg-black rounded transition-all duration-300
            ${open ? 'rotate-45 translate-y-2' : ''}
          `}
        ></span> 
         <span
          className={`block w-6 h-1 bg-black rounded transition-all duration-300 my-1
            ${open ? 'opacity-0' : ''}
          `}
        ></span>
        <span
          className={`block w-6 h-1 bg-black rounded transition-all duration-300
            ${open ? '-rotate-45 -translate-y-2' : ''}
          `}
        ></span>
        

      </button>


      <img className='border-2 self-end w-[200px] h-[35px] md:w-[160px] h-[27px] ' src="zomato.png" alt="" /> 

    </div>
      

      {open && 
      (
      <div className="flex flex-row md:hidden border-2 w-[150px] mx-4">

      <div className="flex flex-col">
      <button className="p-2 text-gray-500 w-[67px] h-[40px]">Log in</button>
      <button className="p-2 text-gray-500 ">Sign up</button>
      </div>    

      </div>
  )}
    </>
    );
  }
  




  export default Menu;
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Menu from './Components/Menu';
import DropDown from './Components/Dropdown';
import Opt from './Components/Opt';
import Card2 from './Components/Card';
import FilterButtons from './Components/FilterButtons';
import Banner from './Components/Banner';
import Restaurants from './Components/Restaurant';


function App() {


  return (
    <>
    {/* desktop navbar */}
    <div className='hidden mx-auto max-w-6xl px-4  md:flex flex-col justify-center'>
    <Navbar/>
   
    <Opt/>
    <div className='p-2'>
      <div className='text-3xl pb-7'>Collections</div>
      <div className='flex flex-row justify-between '>
        <div className='text-[18px]'>Explore curated lists of top restraurant,cafes, pubs, and bars in Agra, based on trends</div>
        <button className=' flex flex-row text-[rgb(224,53,70)] text-[16px]'>All collections in Agra 
        <img className=' transform translate-y-1/2 ml-[10px] w-[12px] h-[12px] -rotate-90  ' src="downward-arrow.png" alt="" />

        </button>
        
      </div>
    </div>

    {/* container */}
    <div className='flex flex-row '>
    <Card2/>
    </div>
    <FilterButtons/>
    <Banner/>

    <div className='text-[30px] mt-[10px] mb-[30px] '>Restaurants in Agra</div>
    <Restaurants/>

    
    </div>

    {/* hamburger icon */}
    <div className='md:hidden'>
      <Menu/>
      <Opt/>
      <div className='flex flex-row '>
    <Card2/>
    </div>

    <FilterButtons/>
    <Banner/>

    <div className='text-[30px] mt-[10px] mb-[30px] '>Restaurants in Agra</div>
    <Restaurants/>

    </div>

    </>
  );
}



export default App



  
import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import FilterButtons from "./components/FilterButtons";
import Menu from "./components/Menu";
import Restaurants from "./components/Restraurants";
import Options from "./components/Options";
import Signin from "./components/Signin";
import Signup from "./components/Signup";


export default function Home() {
  return (
    <>
    {/* desktop navbar */}
    <div className='hidden mx-auto max-w-6xl px-4  md:flex flex-col justify-center'>
    <Navbar/>
   
    <Options/>
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
    <Card/>
    </div>
    <FilterButtons/>
    <Banner/>

    <div className='text-[30px] mt-[10px] mb-[30px] '>Restaurants in Agra</div>
    <Restaurants/>

  
    </div>



    {/* mobile menu */}
    {/* hamburger icon */}
    <div className='md:hidden'>
      <Menu/>
      <Options/>
      <div className='flex flex-row '>
    <Card/>
    </div>

    <FilterButtons/>
    <Banner/>

    <div className='text-[30px] mt-[10px] mb-[30px] '>Restaurants in Agra</div>
    <Restaurants/>

    </div>
    </>

  );
}

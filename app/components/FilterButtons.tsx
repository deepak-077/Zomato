function FilterButtons(){
    return(
        <div className="flex flex-row pb-10 overflow-x-auto md:flex-wrap">

        <button className="cursor-pointer rounded-lg border h-[37px] w-[auto] p-2 m-2 text-[14px] text-gray-500 " > Filters </button>
        <button className="cursor-pointer rounded-lg border h-[37px] w-[auto] p-2 m-2 text-[14px] text-gray-500"> Offers </button>
        <button className="cursor-pointer rounded-lg border h-[37px] w-[auto] p-2 m-2 text-[14px] text-gray-500 whitespace-nowrap"> Rating: 4.5+ </button>
        <button className="cursor-pointer rounded-lg border h-[37px] w-[auto] p-2 m-2 text-[14px] text-gray-500 whitespace-nowrap"> Pet Friendly </button>
        <button className="cursor-pointer rounded-lg border h-[37px] w-[auto] p-2 m-2 text-[14px] text-gray-500 whitespace-nowrap"> Outdoor Seating </button>
        <button className="cursor-pointer rounded-lg border h-[37px] w-[auto] p-2 m-2 text-[14px] text-gray-500 whitespace-nowrap"> Serves Alcohol </button>
        <button className="cursor-pointer rounded-lg border h-[37px] w-[auto] p-2 m-2 text-[14px] text-gray-500 whitespace-nowrap"> Open Now </button>
        
        </div>
    )

}
export default FilterButtons;
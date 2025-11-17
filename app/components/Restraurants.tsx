const restrautant=[
    {
        img:"Salt cafe.jpg",
        name: "The Salt Cafe Kitchen & Bar",
        rating: 4.9,
        type: "North Indian, Continental, Chinese, Italian, Finger Food",
        price: "1800 for two",
        location: "Tajganj, Agra",
        open:"Opens at 12 Noon",
        distance: "3.8 km"

    },
    {
        img:"punjabi.jpg",
        name: "Punjabi By Nature",
        rating: 4.3,
        type: "North Indian, Biryani, Kebab, Fast Food, Asian",
        price: "1000 for two",
        location: "Tajganj, Agra",
        open:"Opens at 12 Noon",
        distance: "2.3 km"

    },
    {
        img:"unplugged courtyard.jpg",
        name: "Unplugged Courtyard",
        rating: 4.3,
        type: "Mediterranean, North Indian, Continental, Chinese, Mexican, Thai, Italian, Coffee",
        price: "1600 for two",
        location: "Tajganj, Agra",
        open:"Opens at 12 Noon",
        distance: "4.8 km"

    },
    {
        img:"london.jpg",
        name: "LONDON COFFEE CLUB",
        rating: 4.6,
        type: "Cafe, Coffee, Sandwich, Italian, Latin American, Turkish, Continental",
        price: "1500 for two",
        location: "Tajganj, Agra",
        open:"Opens at 12 Noon",
        distance: "4.4 km"

    },
    {
        img:"theobroma.jpg",
        name: "Theobroma",
        rating: 3.8,
        type: "Bakery, Desserts",
        price: "300 for two",
        location: "Khandari, Agra",
        open:"Opens at 12 Noon",
        distance: "3.2 km"

    },
    {
        img:"hichkee.jpg",
        name: "Hichkee",
        rating: 4.2,
        type: "Continental, North Indian, Chinese",
        price: "1700 for two",
        location: "Civil Lines, Agra",
        open:"Opens at 12 Noon",
        distance: "1.2 km"

    },
    {
        img:"qairo.jpg",
        name: "Qairo",
        rating: 4.5,
        type: "North Indian, Italian, Asian, Continental, Biryani, Chinese, Salad, Desserts",
        price: "1600 for two",
        location: "Tajganj, Agra",
        open:"Opens at 12 Noon",
        distance: "2.5 km"

    },
    {
        img:"molecular airbar.jpg",
        name: "Molecular Air Bar",
        rating: 4.5,
        type: "Mediterranean, North Indian, Continental, Chinese, Mexican, Thai, Italian, Coffee",
        price: "1700 for two",
        location: "Tajganj, Agra",
        open:"Opens at 12 Noon",
        distance: "4.8 km"

    },
    {
        img:"biryani by kilo.jpg",
        name: "Biryani By Kilo",
        rating: 4.3,
        type: "Mediterranean, North Indian, Continental, Chinese, Mexican, Thai, Italian, Coffee",
        price: "1000 for two",
        location: "Civil Lines, Agra",
        open:"Opens at 10am",
        distance: "3 km"

    }
]

function Restaurants() {
    return (
        <div className="grid grid-cols-3  gap-4 p-4">
            {restrautant.map((item, index) => (
                <div key={index} className="bg-white shadow w-full max-w-[350px] mx-auto">
                    <img
                        className="rounded-2xl w-full h-[248px] object-cover"
                        src={item.img}
                        alt=" "
                    />
                    <div className="p-2.5">
                        {/* Name and Rating */}
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-[17px] font-medium text-ellipsis whitespace-nowrap">{item.name}</span>
                            <span className="flex items-center gap-1 bg-[rgb(14,80,32)] rounded-md w-[48px] h-[24px] justify-center text-white font-bold text-sm">
                                {item.rating}
                                <img
                                    className="w-[8px] h-[8px]"
                                    src="star.png"
                                    alt=""
                                />
                            </span>
                        </div>

                        <div className="flex justify-between text-[14px] py-1">
                            <span className="w-[184px] h-[25px] overflow-hidden whitespace-nowrap text-ellipsis">
                                {item.type}
                            </span>
                            <span className="text-ellipsis whitespace-nowrap">{item.price}</span>
                        </div>


                        <div className="flex md:flex-col">
                            <div className="flex justify-between text-[14px] pb-1">
                            <span className="text-ellipsis whitespace-nowrap">{item.location}</span>
                        </div>

                        <div className="flex justify-between text-[14px]">
                            <span className="text-[rgb(171,0,13)] hidden md:block">{item.open}</span>
                            <span className=" mx-1.5 ">{item.distance}</span>
                        </div>

                        </div>

                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Restaurants;
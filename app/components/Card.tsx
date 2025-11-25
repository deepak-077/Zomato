"use client"
import { useRef, useState } from "react";
const menu= [
    {
        title:"Taj View Restraurants",
        places:"7 Places",
        img:"taj.png",
        arrow_img:"downward-arrow.png"

    },
    {
        title:"Local Favourite Places",
        places:"15 Places",
        img:"local.png",
        arrow_img:"downward-arrow.png"

    },
    {
        title:"Best Luxury Dining Places ",
        places:"17 Places",
        img:"luxury.png",
        arrow_img:"downward-arrow.png"

    },
    {
        title:"Best Mughal Places ",
        places:"6 Places",
        img:"mughal.png",
        arrow_img:"downward-arrow.png"

    },
    {
        title:"Blissful Breakfast Places ",
        places:"13 Places",
        img:"breakfast.jpg",
        arrow_img:"downward-arrow.png"

    },
    {
        title:"Serene Rooftop Places ",
        places:"13 Places",
        img:"rooftop.png",
        arrow_img:"downward-arrow.png"

    },
    {
        title:"Great Cafes ",
        places:"17 Places",
        img:"cafe.png",
        arrow_img:"downward-arrow.png"

    }
    
]

function Card() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setShowLeftArrow(true);
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setShowLeftArrow(false);
    }
  };

  return (
    <div className="relative w-full pb-10">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={handleScrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow"
        >
          <img
            className="w-[34px] h-[34px]"
            src="left-arrow.png"
            alt="Left Arrow"
          />
        </button>
      )}

      {/* Right Arrow */}
      <button
        onClick={handleScrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow"
      >
        <img
          className="w-[34px] h-[34px]"
          src="arrow-right.png"
          alt="Right Arrow"
        />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-4 px-4"
      >
        {menu.map((item, index) => (
          <div
            key={index}
            className="relative shrink-0 w-[180px] md:w-[260px] h-[320px] rounded-lg overflow-hidden"
          >
            <a href="#">
              <img
                className="rounded-lg w-[260px] h-[320px] object-cover"
                src={item.img}
                alt=""
              />
            </a>

            <div className="absolute bottom-[60px] left-0 w-full text-white">
              <div className="px-[16px] text-[18px]">{item.title}</div>
              <div className="px-[16px] flex flex-row items-center text-[18px]">
                {item.places}
                <img
                  className="pl-[4px] w-[20px] h-[20px] -rotate-90"
                  src={item.arrow_img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
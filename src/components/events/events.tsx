import Image from "next/image";
import React from "react";

const Events = () => {
  return (
    <div className="h-screen  flex justify-center items-center">
         
      <div className="h-56 flex justify-center items-center w-80 text-xl font-bold rounded-lg">
    
      <Image src={"/comingsoon.svg"} alt="coming soon" height={100} width={290}></Image>
      </div>
    </div>
  );
};

export default Events;

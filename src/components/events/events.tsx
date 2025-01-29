"use client"
import Image from "next/image";
import React from "react";
import SnowParticles from "../ParticlsJs/snowparticles";

const Events = () => {
  return (
    <div>
       <div className="absolute inset-0 -z-10">
        <SnowParticles id="particles-js" />
      </div>
      <div className="h-screen  flex justify-center items-center">
         
    <div className="h-56 flex justify-center items-center w-80 text-xl font-bold rounded-lg">
  
    <Image src={"/comingsoon.svg"} alt="coming soon" height={100} width={290}></Image>
    </div>
  </div></div>
  );
};

export default Events;

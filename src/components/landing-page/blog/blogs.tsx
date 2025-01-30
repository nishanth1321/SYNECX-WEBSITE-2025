"use client";
import SnowParticles from "@/components/ParticlsJs/snowparticles";
import Navbar from "@/layouts/navbar";
import React from "react";

const Blogs = () => {
  return (
   <div>
     <Navbar />
     <div className=" flex justify-center items-center h-screen">
      <div className="absolute inset-0 -z-10">
        <SnowParticles id="particles-js" />
      </div>
    </div>
   </div>
  );
};

export default Blogs;

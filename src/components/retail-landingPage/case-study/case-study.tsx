import SnowParticles from "@/components/ParticlsJs/snowparticles";
import RetailNavbar from "@/layouts/retailnavbar";
import React from "react";

const CaseStudy = () => {
  return (
   <div>
     <RetailNavbar />
     <div className="h-screen  flex justify-center items-center">
      <div className="absolute inset-0 -z-10">
        <SnowParticles id="particles-js" />
      </div>
    </div>
   </div>
  );
};

export default CaseStudy;

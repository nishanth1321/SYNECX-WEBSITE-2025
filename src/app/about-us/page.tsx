import AboutUs from "@/components/about-us/about-us-header";
import React from "react";
import { Metadata } from "next";
import Navbar from "@/layouts/navbar";
import ABoutUsWorks from "@/components/about-us/about-us-works";
import MissionVission from "@/components/about-us/mission-vission";
import AtSynecx from "@/components/about-us/at-synecx";
export const metadata = { title: "SYNECX | ABOUT US " } as Metadata;
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <AboutUs />
        <MissionVission />
        <AtSynecx />
        <ABoutUsWorks />
      </div>
    </div>
  );
};

export default page;

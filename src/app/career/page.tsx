import Whysycenx from "@/components/careers/why-synecx";
import React from "react";
import { Metadata } from "next";
import Navbar from "@/layouts/navbar";
import Openings from "@/components/careers/innovation-section";
import ApplyJob from "@/components/careers/apply-job";

export const metadata = { title: "Career | SynecX" } as Metadata;

const page = () => {
  return (
    <div >
      <Navbar />
      <div >
        <Whysycenx />
        <Openings />
        <ApplyJob />
      </div>
    </div>
  );
};

export default page;

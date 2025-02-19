import RetailHome from "@/components/retail-landingPage/retail-home";
import RetailNavbar from "@/layouts/retailnavbar";
import React from "react";
import { Metadata } from "next";
export const metadata = { title: "SYNECX | RETAIL | Fastest AI-Powered SelfCheckout " } as Metadata;
const page = () => {
  return (
    <div>
      <RetailNavbar />
      <div>
          <RetailHome />
        </div>
    </div>
  );
};

export default page;

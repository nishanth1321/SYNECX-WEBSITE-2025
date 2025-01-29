import Events from "@/components/events/events";
import Navbar from "@/layouts/navbar";
import React from "react";
import { Metadata } from "next";

export const metadata = { title: "Events | SynecX" } as Metadata;
const page = () => {
  return (
    <div>
      <Navbar />
      <Events />
    </div>
  );
};

export default page;

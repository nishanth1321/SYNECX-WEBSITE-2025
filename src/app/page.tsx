import Home from "@/components/landing-page";
import React from "react";
import WorksSection from "../components/landing-page/works";
import ClientSection from "../components/landing-page/testimonial";
import FAQSection from "../components/landing-page/faq";
import { Metadata } from "next";
import LatestBlog from "@/components/landing-page/blogs";
import Selfcheckout from "@/components/landing-page/products/product1";
import Manufacturing from "@/components/landing-page/products/product3";
import Logistics from "@/components/landing-page/products/product2";

export const metadata = { title: "SYNECX | HOME " } as Metadata;

const page = () => {
  return (
    <>
      <Home />
      <Selfcheckout />
      <Logistics />
      <Manufacturing />
      <WorksSection />
      <FAQSection />
      <LatestBlog />
      <ClientSection />
    </>
  );
};

export default page;

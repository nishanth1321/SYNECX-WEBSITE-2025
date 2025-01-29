import Home from "@/components/landing-page";
import React from "react";
import WorksSection from "../components/landing-page/works";
import ClientSection from "../components/landing-page/clients";
import FAQSection from "../components/landing-page/fre-que";
import { Metadata } from "next";
// import Service from "@/components/landing-page/services";
import LatestBlog from "@/components/landing-page/latest-news-blog";
import Selfcheckout from "@/components/landing-page/products/product1";
import Manufacturing from "@/components/landing-page/products/product2";
import Logistics from "@/components/landing-page/products/product3";

export const metadata = { title: "Home | SynecX" } as Metadata;

const page = () => {
  return (
    <>
      <Home />
      <Selfcheckout />
      <Manufacturing />
      <Logistics />
      <WorksSection />
      <FAQSection />
      <LatestBlog />
      <ClientSection />
    </>
  );
};

export default page;

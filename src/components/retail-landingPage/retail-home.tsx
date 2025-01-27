import React from "react";
import RetailPageServices from "./retail-services";
import RetailIndex from "./retail-index";
import WorkingPartners from "./workingPartners";
import HowRetailWorks from "./howRetail-works";
import RetailTestimonial from "./retail-testmonial";
import RetailLandingPageFAQ from "./retail-faq";

const RetailHome = () => {
  return (
    <div>
      <RetailIndex />
      <RetailPageServices />
      <HowRetailWorks />
      <RetailTestimonial />
      <RetailLandingPageFAQ />
    </div>
  );
};

export default RetailHome;

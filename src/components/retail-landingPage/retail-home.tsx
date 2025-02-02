import React from "react";
import RetailPageServices from "./retail-services";
import RetailIndex from "./retail-index";
import WorkingPartners from "./workingPartners";
import HowRetailWorks from "./howRetail-works";
import RetailTestimonial from "./retail-testmonial";
import RetailLandingPageFAQ from "./retail-faq";
import CaseStudy from "./case-study/case-study";
import FeaturesLanding from "./features-landing";

const RetailHome = () => {
  return (
    <div>
      <RetailIndex />
      <RetailPageServices />
      <HowRetailWorks />
      <FeaturesLanding />
      <RetailTestimonial />
      <CaseStudy />
      <RetailLandingPageFAQ />
    </div>
  );
};

export default RetailHome;

import React from "react";
import RetailPageServices from "./retail-services";
import RetailIndex from "./retail-index";
import HowRetailWorks from "./howRetail-works";
import RetailLandingPageFAQ from "./retail-faq";
import CaseStudy from "./case-study/case-study-landing";
import FeaturesLanding from "./features-landing";
import ContactInfo from "../support/contact";
import Vdo from "./vdo";

const RetailHome = () => {
  return (
    <div>
      <RetailIndex />
      <Vdo />
      <RetailPageServices />
      <HowRetailWorks />
      <FeaturesLanding />
      <CaseStudy />
      <RetailLandingPageFAQ />
      <ContactInfo />
    </div>
  );
};

export default RetailHome;

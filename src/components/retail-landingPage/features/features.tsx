import React from "react";
import FeatureOne from "./feature-1";
import RetailNavbar from "../../../layouts/retailnavbar";
import FeatureTweo from "./feature-2";
import FeatureThree from "./feature-3";
import FeaturesHeader from "./features-header";
import FAQFeatures from "./faq-features";
import FeatureFour from "./feature-4";

const Features = () => {
  return (
    <div>
      <RetailNavbar />
      <div>
        <FeaturesHeader />
        <FeatureOne />
        <FeatureTweo />
        <FeatureThree />
        <FAQFeatures />
      </div>
    </div>
  );
};

export default Features;

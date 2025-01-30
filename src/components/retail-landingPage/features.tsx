import React from "react";
import FeatureOne from "./features/feature-1";
import RetailNavbar from "../../layouts/retailnavbar";
import FeatureTweo from "./features/feature-2";
import FeatureThree from "./features/feature-3";
import FeaturesHeader from "./features/features-header";
import FAQFeatures from "./features/faq-features";
import FeatureFour from "./features/feature-4";

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

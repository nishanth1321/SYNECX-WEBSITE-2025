import CaseStudyIndividual from '@/components/retail-landingPage/case-study/case-study'
import React from 'react'
import { Metadata } from "next";
export const metadata = { title: "SYNECX | RETAIL | CASE STUDY " } as Metadata;

const page = () => {
  return (
    <div><CaseStudyIndividual /> </div>
  )
}

export default page
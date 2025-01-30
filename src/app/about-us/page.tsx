import AboutUs from '@/components/about-us/about-us'
import React from 'react'
import { Metadata } from "next";
import Navbar from '@/layouts/navbar';
export const metadata = { title: "SYNECX | ABOUT US " } as Metadata;
const page = () => {
    return (
     <div>
      <Navbar />
       <div  className='pt-20'>
      <AboutUs />
      </div>
     </div>
    )
  }
  
  export default page
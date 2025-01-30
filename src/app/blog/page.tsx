import Blogs from '@/components/landing-page/blog/blogs'
import React from 'react'
import { Metadata } from "next";
export const metadata = { title: "SYNECX | BLOGS " } as Metadata;
const page = () => {
  return (
    <div><Blogs /></div>
  )
}

export default page
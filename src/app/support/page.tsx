import DemoForm from '@/components/support/demo-form'
import QueryForm from '@/components/support/query-form'
import QuotationForm from '@/components/support/quotation'
import SupportHeader from '@/components/support/support-header'
import SupportSection from '@/components/support/support-provided'
import Navbar from '@/layouts/navbar'
import { Metadata } from 'next'
import React from 'react'


export const metadata = ({ title : "Support | SYCNEX"}) as Metadata


const page = () => {
  return (
   <div>
    <Navbar />
     <div className='pt-20'>
    <SupportHeader />
    <SupportSection />
    <DemoForm />
    <QuotationForm />
    <QueryForm />
    </div>
   </div>
  )
}

export default page
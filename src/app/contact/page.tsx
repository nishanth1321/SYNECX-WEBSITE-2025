import ContactInfo from '@/components/support/contact'
import DemoForm from '@/components/support/demo-form'
import QueryForm from '@/components/support/query-form'
// import QuotationForm from '@/components/support/quotation'
import SupportHeader from '@/components/support/support-header'
import SupportSection from '@/components/support/support-provided'
import Navbar from '@/layouts/navbar'

import React from 'react'
import { Metadata } from 'next'

export const metadata = ({ title : "SYNECX | CONTACT "}) as Metadata


const page = () => {
  return (
   <div>
    <Navbar />
     <div className='pt-20'>
    <SupportHeader />
    <SupportSection />
    <DemoForm />
    {/* <QuotationForm /> */}
    <QueryForm />
    <ContactInfo />
    </div>
   </div>
  )
}

export default page
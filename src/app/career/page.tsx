import Whysycenx from '@/components/careers/why-synecx'
import InnovationSection from '@/components/careers/innovation-section'
import React from 'react'
import SynecxDifference from '@/components/careers/synecx-diff'
import { Metadata } from 'next'

export const metadata = ({ title : "Career | SYCNEX"}) as Metadata



const page = () => {
  return (
    <div  className='pt-20'>
    <Whysycenx />
    <SynecxDifference />
    <InnovationSection />
    </div>
  )
}

export default page
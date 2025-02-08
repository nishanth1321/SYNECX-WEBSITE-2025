import { notFound } from "next/navigation";
import Navbar from "@/layouts/navbar";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const caseStudy = caseStudyData.find((study) => study.title === decodeURIComponent(params.title));

  if (!caseStudy) {
    return { title: "SYNECX | CASE STUDIES | Not Found" };
  }

  return { title: `SYNECX | CASE STUDIES | ${caseStudy.title}` };
}

const caseStudyData = [
  {
    title: "AI-Powered-Self-Checkout-Case-Study",
    content: `
# **AI-Powered Self-Checkout: A Case Study in Retail Transformation** 🛍️🤖

## **Overview**

Retailers worldwide are adopting **AI-powered self-checkout** systems to enhance customer experience and streamline operations. This case study explores the real-world impact of deploying **computer vision-based checkout solutions**.

---

## **Client Background**

A leading **supermarket chain** with over **500 stores** faced increasing customer complaints about long checkout times and inefficiencies in traditional POS systems.

---

## **Challenges Faced**

❌ **Long queues** leading to customer dissatisfaction  
❌ **High dependency on human cashiers**, leading to increased labor costs  
❌ **Manual errors** in scanning and pricing  
❌ **Theft and shrinkage** due to ineffective monitoring

---

## **Solution Implemented** 🚀

The supermarket implemented an **AI-powered self-checkout kiosk** that featured:

✔️ **Computer Vision** for real-time product recognition  
✔️ **Deep Learning Algorithms** to improve accuracy over time  
✔️ **Contactless Payment Integration** for faster transactions  
✔️ **Automated Theft Prevention** using behavior analysis

---

## **Implementation Process** 🔄

1️⃣ **Hardware Setup** – Installed **high-resolution cameras** at self-checkout stations  
2️⃣ **AI Model Training** – Deployed **pre-trained deep learning models** for product recognition  
3️⃣ **Pilot Testing** – Conducted trials in 10 stores before full rollout  
4️⃣ **Full Deployment** – Scaled across 500 locations with continuous AI model updates  

---

## **Results & Impact** 📊

✔️ **35% Reduction** in checkout time  
✔️ **20% Increase** in overall store revenue due to improved efficiency  
✔️ **50% Decrease** in manual errors and mis-scans  
✔️ **Enhanced Security** with real-time anomaly detection  

---

## **Conclusion** ✅

This case study highlights how AI-powered self-checkout solutions are **reshaping retail experiences**, reducing costs, and improving efficiency. The future of retail lies in **seamless automation and AI-driven innovation**.
    `,
    image: "/caseStudy1.svg",
  },
];

// Generate Static Params for Dynamic Routes
export async function generateStaticParams() {
  return caseStudyData.map((study) => ({
    title: study.title,
  }));
}

// Props Interface
interface CaseStudyPageProps {
  params: {
    title: string;
  };
}

const CaseStudyPost: React.FC<CaseStudyPageProps> = ({ params }) => {
  const caseStudy = caseStudyData.find(
    (study) => study.title === decodeURIComponent(params.title)
  );

  if (!caseStudy) {
    return notFound();
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center px-4">
        <div className="max-w-3xl w-full py-12">
          <img src={caseStudy.image} className="w-full rounded-lg pt-20 sm:pt-20" />
          <article className="prose prose-lg prose-blue max-w-none w-full mt-6 text-gray-800 text-justify px-3 sm:px-0">
            <ReactMarkdown>{caseStudy.content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPost;

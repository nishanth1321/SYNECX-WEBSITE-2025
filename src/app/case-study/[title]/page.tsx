import { notFound } from "next/navigation";
import Navbar from "@/layouts/navbar";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";
export function generateMetadata({ params }: studyPageProps): Metadata {
  const study = studyData.find((post) => post.title === decodeURIComponent(params.title));

  if (!study) {
    return { title: "SYNECX | CASE STUDY | Not Found" };
  }

  return { title: `SYNECX | CASE STUDY | ${study.title}` };
}
const studyData = [
  {
    title: "revolutionizing-retail",
   
    content: `
# **Revolutionizing Retail: A Self-Checkout Success Story at Cakes and Bakes** 🍰🛒  

In the age of **fast-paced lifestyles** and evolving customer expectations, businesses must **adapt** to provide **seamless, efficient, and delightful** shopping experiences.  

**Cakes and Bakes**, a beloved bakery chain renowned for its **delectable treats**, embraced **self-checkout technology**—leading to a **game-changing transformation** that redefined **customer satisfaction and operational excellence**. 🚀  

---

## **The Vision: Redefining the Cakes and Bakes Experience** 🎯  

The mission was clear: **enhance the shopping journey** while optimizing store operations.  

Cakes and Bakes partnered with us to achieve these objectives:  

✔️ **Minimize Customer Wait Times** ⏳: Deliver a **swift, hassle-free checkout experience** tailored to busy lifestyles.  
✔️ **Boost Operational Efficiency** ⚙️: Streamline workflows, enabling staff to focus on **delivering quality service**.  
✔️ **Elevate Customer Delight** 🎉: Introduce a **cutting-edge, user-friendly** system that adds **convenience and joy** to every interaction.  

This vision aligned perfectly with **Cakes and Bakes' commitment to excellence**—not just in their products, but in **every customer touchpoint**.  

---

## **The Implementation Journey: From Planning to Perfection** 🛠️  

The deployment of **self-checkout technology** followed a meticulous, step-by-step approach:  

### **1️⃣ Insightful Planning**  
📌 Conducted an **in-depth analysis** of operations to identify pain points and customize the system accordingly.  

### **2️⃣ Customization for Simplicity**  
📌 Integrated seamlessly with existing **inventory systems**, featuring a **sleek, intuitive interface** for both customers and staff.  

### **3️⃣ Effortless Installation**  
📌 Completed within **four weeks**, ensuring **zero disruption** to daily operations.  
📌 Rigorous **testing** validated system reliability and **user-friendliness**.  

### **4️⃣ Staff Empowerment**  
📌 Comprehensive **training sessions** transformed employees into **system advocates**, ensuring smooth adoption.  

---

## **Overcoming Challenges: Turning Obstacles into Opportunities** 💡  

### **🛍️ Customer Acceptance**  
📌 Organized **live demonstrations** and provided **on-site support**, converting first-time users into **loyal fans**.  

### **🔗 System Integration**  
📌 Advanced **middleware solutions** ensured **seamless compatibility** with legacy software for a **smooth transition**.  

---

## **The Results: Where Innovation Meets Impact** 📈  

🚀 **Faster Checkouts, Happier Customers**  
✔️ **Checkout times reduced by 45%** ⏳—eliminating long queues!  

🚀 **Higher Customer Satisfaction**  
✔️ **Satisfaction scores soared by 30%** 📊, with customers praising the **simplicity & speed**.  

🚀 **Enhanced Staff Efficiency**  
✔️ Employees reallocated **20% of their time** to **high-value tasks** like restocking & personalized service.  

---

## **What Customers and Team Members Say** 🗣️  

💬 **“We’ve always strived to offer the best to our customers, and this self-checkout system has taken our service to the next level. The feedback has been overwhelmingly positive!”**  
— **Cakes and Bakes Manager**  

💬 **“I love how quick and easy it is now! I can grab my favorites and be out the door in minutes. It’s amazing!”**  
— **A Satisfied Customer**  

---

## **A Blueprint for the Future of Retail** 🏪🔮  

The success at **Cakes and Bakes** proves that **self-checkout technology** is a **game-changer** for the retail industry.  

### **Here's why:**  
✔️ **Scalable Across Retail Environments** 🏬: From boutique stores to supermarkets, the tech adapts effortlessly.  
✔️ **Empowering Businesses** 💼: Automation enables staff to focus on **customer engagement & service quality**.  
✔️ **Continuous Innovation** 🔄: Insights from this deployment fuel **future advancements** to match evolving trends.  

---

## **Conclusion: Baking Innovation into Every Experience** 🍞✨  

The **self-checkout system** at Cakes and Bakes is **more than a technological upgrade**—it's a testament to how **innovation and collaboration** can **elevate customer experiences**.  

As Cakes and Bakes **continues to delight customers** with **delicious creations**, this solution ensures that **every visit** is **efficient, enjoyable, and unforgettable**.  

**The future of retail is bright, and with the right vision and technology, businesses can thrive like never before!** 🚀  
`,
    image: "/casestudypost.svg",
  },
 
 
];

export async function generateStaticParams() {
  return studyData.map((study) => ({
    title: study.title,
  }));
}
interface studyPageProps {
  params: {
    title: string;
  };
}

const CaseStudyPost: React.FC<studyPageProps> = ({ params }) => {
  const study = studyData.find(
    (post) => post.title === decodeURIComponent(params.title)
  );

  if (!study) {
    return notFound();
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center px-4">
        <div className="max-w-3xl w-full py-12">
          <img
            src={study.image}
            className="w-full rounded-lg pt-20 sm:pt-20"
          />
          <article className="prose prose-lg prose-blue max-w-none w-full mt-6 text-gray-800 text-justify px-3 sm:px-0">
            <ReactMarkdown>{study.content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPost;

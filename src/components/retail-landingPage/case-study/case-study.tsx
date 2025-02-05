import RetailNavbar from "@/layouts/retailnavbar";
import Image from "next/image";

export default function CaseStudyIndividual() {
  const testimonials = [
    {
      studyname: "Revolutionizing Retail",
      studyon: "Success Story at Cakes and Bakes",
      image: "/casestudy1.svg",
      text: " Cakes and Bakes, a cherished bakery chain renowned for its delectable treats, rose to this challenge by embracing self-checkout technology. ",
      pdf: "/cakes and bakes SynecX.pdf",
    },
  //   {
  //     studyname: "SmartMart Express",
  //     studyon: "Automated Grocery Checkout",
  //     image: "/casestudy2.svg",
  //     text: "SynecX AI Labs implemented an AI-driven self-checkout solution for SmartMart, minimizing errors and improving fraud detection by 30%. Customers enjoyed a seamless shopping experience with AI-powered object recognition and real-time billing.",
  //     pdf: "/pdfs/smartmart-case-study.pdf",
  //   },
  //   {
  //     studyname: "MetroTech Supermarkets",
  //     studyon: "Cashierless Checkout Innovation",
  //     image: "/casestudy2.svg",
  //     text: "Through AI and deep learning, SynecX AI Labs revolutionized MetroTech's self-checkout, eliminating the need for manual scanning. The solution improved transaction accuracy, reduced theft risk, and enhanced customer experience.",
  //     pdf: "/pdfs/metrotech-case-study.pdf",
  //   },
  //   {
  //     studyname: "AI Convenience Stores",
  //     studyon: "Smart Vision-Based Checkout",
  //     image: "/casestudy1.svg",
  //     text: "SynecX AI Labs developed a smart self-checkout system using AI vision technology, allowing customers to pick up items and walk out while payments were processed automatically. The solution increased operational efficiency and improved store revenue.",
  //     pdf: "/pdfs/ai-convenience-case-study.pdf",
  //   },
  ];

  return (
    <div>
      <RetailNavbar />
      <div className="py-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-semibold text-gray-900 text-center">
            Case Studies on{" "}
            <span className="text-red-500">AI Self-checkout</span>
          </h2>
          <p className="mt-4 text-center text-gray-600 text-[16px] font-semibold px-4 sm:px-16 lg:px-64">
            Discover how SynecX AI Labs revolutionized self-checkout technology
            with cutting-edge AI solutions.
          </p>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center text-black"
              >
                {/* Image taking 1/3 width on desktop, full width on mobile */}
                <div className="w-full sm:w-1/3 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.studyname}
                    width={120}
                    height={120}
                    className="object-cover rounded-lg w-full h-auto"
                  />
                </div>

                {/* Text taking 2/3 width on desktop, full width on mobile */}
                <div className="w-full sm:w-2/3 sm:pl-6 mt-4 sm:mt-0">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <p className="text-black font-semibold text-lg">
                        {testimonial.studyname}
                      </p>
                      <p className="text-gray-700 text-sm">
                        {testimonial.studyon}
                      </p>
                    </div>
                    {/* Download Button */}
                    <a
                      href={testimonial.pdf}
                      download
                      className="text-white bg-red-500 px-3 py-1 rounded-md text-sm mt-2 sm:mt-0  transition hover:scale-105 duration-200 ease-in-out"
                    >
                      Download
                    </a>
                  </div>
                  <p className="text-black mt-4 text-[15px] bg-gray-100/70 p-3 rounded-md">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

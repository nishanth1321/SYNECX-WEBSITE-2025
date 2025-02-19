import RetailNavbar from "@/layouts/retailnavbar";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudyIndividual() {
  const testimonials = [
    {
      studyname: "Revolutionizing Retail",
      studyon: "Success Story at Cakes and Bakes",
      image: "/casestudy1.svg",
      text: " Cakes and Bakes, a cherished bakery chain renowned for its delectable treats, rose to this challenge by embracing self-checkout technology. ",
    },
  
  ];

  return (
    <div>
      <RetailNavbar />
      <div className="py-16 pt-24">
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
                  </div>
                  <p className="text-black mt-4 text-[15px] bg-gray-100/70 p-3 rounded-md">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Learn More Button */}
          <div className="flex justify-center mt-12">
            <button className="text-white bg-red-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition">
              <Link href={"/retail/case-Study"}> Learn More</Link>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

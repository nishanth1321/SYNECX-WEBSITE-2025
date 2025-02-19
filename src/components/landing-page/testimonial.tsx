import Image from "next/image";

export default function ClientSection() {
  const testimonials = [
    {
      name: "Client 1",
      role: "Software Development",
      rating: 5,
      image: "/men.svg",
      text: "SynecX AI Labs completed the project on time. The vendor took their time to understand the client's business requirements, which the fintech company appreciated.",
    },
    {
      name: "Client 2",
      role: "Product Designer",
      rating: 4,
      image: "/women.svg",
      text: "SynecX AI Labs delivered ahead of schedule, diving deep into our needs and providing valuable insights. Communication was smooth via virtual meetings, messaging apps, and email, ensuring alignment throughout.",
    },
    {
      name: "Client 3",
      role: "App Developer",
      rating: 5,
      image: "/women.svg",
      text: "SynecX AI Labs delivered on time and solved issues proactively. Their deep understanding of our industry and clear communication kept the project on track and exceeded expectations.",
    },
    {
      name: "Client 4",
      role: "SEO Expert",
      rating: 4,
      image: "/men.svg",
      text: "SynecX AI Labs quickly understood our objectives and adapted to changes effortlessly. Regular updates and their strong support made for a smooth and successful project delivery.",
    },
  ];

  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-gray-900 text-center">
          What Client&apos;s Say
        </h2>
        <p className="mt-4 text-center text-gray-600 text-[16px] font-semibold px-4 sm:px-16 lg:px-64">
          Hear from our satisfied clients about how SynecX AI Labs tailored
          solutions and service have driven their success.
        </p>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg flex flex-col justify-between text-black"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden ">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-black font-semibold">{testimonial.name}</p>
                  <p className="text-black">{testimonial.role}</p>
                  <div className="flex mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-orange-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927C9.435 1.82 10.565 1.82 10.951 2.927l1.134 3.58a1 1 0 00.95.691h3.773c1.118 0 1.58 1.417.757 2.085l-3.061 2.235a1 1 0 00-.364 1.118l1.134 3.58c.386 1.107-.905 2.027-1.811 1.345l-3.061-2.235a1 1 0 00-1.176 0l-3.061 2.235c-.906.682-2.197-.238-1.811-1.345l1.134-3.58a1 1 0 00-.364-1.118L2.435 8.283c-.823-.668-.361-2.085.757-2.085h3.773a1 1 0 00.95-.691l1.134-3.58z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-auto w-full bg-gray-100/70 rounded-md mt-6"><p className="text-black my-4 mx-6 text-[15px]">{testimonial.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




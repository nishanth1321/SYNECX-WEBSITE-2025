import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="w-full mx-auto py-16 px-4 bg-white" id="lancontact">
     <div className="max-w-6xl mx-auto py-16 px-4 bg-white ">
     <h2 className="text-red-500 text-md font-semibold mb-2">Contact</h2>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in touch</h1>
      <p className="text-gray-600 mb-10">Our friendly team is always here to chat.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Email Section */}
        <div className="bg-gray-50  rounded-lg shadow-md flex flex-col items-start p-10">
          <FaEnvelope className="text-red-500 text-3xl mb-4" />
          <h3 className="text-lg font-semibold mb-2 mt-3 sm:mt-10">Send us a mail</h3>
          <p className="text-gray-600 mb-2">For general </p>
          <a href="mailto:info@synecxailabs.io" className="text-black font-semibold">info@synecxailabs.io</a>
          <p className="text-gray-600 mt-2">For Sales </p>
          <a href="mailto:sales@synecxailabs.io" className="text-black font-semibold ">sales@synecxailabs.io</a>
        </div>

        {/* Call Section */}
        <div className="bg-gray-50  rounded-lg shadow-md flex flex-col items-start p-10">
          <FaPhoneAlt className="text-red-500 text-3xl mb-4 " />
          <h3 className="text-lg font-semibold mb-2 mt-3 sm:mt-10">Call us</h3>
          <p className="text-gray-600 mb-2 ">Mon-Fri from 9am to 6pm.</p>
          <p className="text-black font-semibold">0422 2212342</p>
        </div>

        {/* Address Section */}
        <div className="bg-gray-50  rounded-lg shadow-md flex flex-col items-start p-10">
          <FaMapMarkerAlt className="text-red-500 text-3xl mb-4 " />
          <h3 className="text-lg font-semibold mb-2 mt-3 sm:mt-10">Meet us</h3>
          <p className="text-gray-600 mb-2">Visit our Office</p>
          <p className="text-black font-semibold">Kanuvai , Coimbatore 641108</p>
        </div>
      </div>
     </div>
    </div>
  );
}

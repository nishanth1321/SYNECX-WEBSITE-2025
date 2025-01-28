import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="mx-auto px-4 py-16 mt-20">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 h-96 md:ml-40">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.360703282096!2d76.94401937479508!3d11.01154035481348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591e736d17b9%3A0x9f6c6b2459d194e8!2s53%2C%20Venkatasamy%20Rd%20W%2C%20West%2C%20R.S.%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641002!5e0!3m2!1sen!2sin!4v1729237872657!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        <div className="w-full md:w-1/2 p-6 flex justify-center items-center md:mr-20">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">Keep In Touch</h2>
            <hr className="mb-6" />

            <div className="mb-5">
              <FaPhoneAlt className="inline-block text-blue-500 mr-2" />
              <span className="font-semibold">Mobile</span>
              <p className="text-gray-400">+43456734567</p>
            </div>

            <div className="mb-4">
              <FaEnvelope className="inline-block text-blue-500 mr-2" />
              <span className="font-semibold">Email</span>
              <p className="text-gray-400">
                <a href="mailto:info@agico.com" className="hover:underline">
                sales@synecxailabs.io
                </a>
              </p>
            </div>

            <div>
              <FaMapMarkerAlt className="inline-block text-blue-500 mr-2" />
              <span className="font-semibold">Address</span>
              <p className="text-gray-400">
              inttha street that intha orru tha intha state tha 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

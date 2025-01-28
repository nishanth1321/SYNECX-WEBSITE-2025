// "use client";

// import React, { useState } from "react";

// const ApplyJob: React.FC = () => {
//   const [formData, setFormData] = useState<{
//     fullName: string;
//     emailId: string;
//     phoneNumber: string;
//     experience: string;
//     collegeName: string;
//     role: string;
//     uploadCV: File | null;
//   }>({
//     fullName: "",
//     emailId: "",
//     phoneNumber: "",
//     experience: "",
//     collegeName: "",
//     role: "",
//     uploadCV: null,
//   });

//   // Handle input changes
//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle file input change
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setFormData((prev) => ({
//       ...prev,
//       uploadCV: file,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Application Form Data Submitted:", formData);
//   };

//   return (
//     <div className="max-w-7xl mx-4 flex flex-col lg:flex-row items-start gap-12 mt-24 sm:mx-auto bg-white/70 backdrop-blur-sm">
//       {/* Left Section - Form */}
//       <div className="lg:w-1/2 order-1 lg:order-1">
//         <div className="h-auto flex justify-center items-center p-6">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white shadow-lg rounded px-8 pt-6 pb-8 w-full max-w-lg shadow-indigo-200"
//           >
//             <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
//               Submit Your Application
//             </h2>

//             {/* Full Name */}
//             <div className="mb-4">
//               <label
//                 htmlFor="fullName"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
//               />
//             </div>

//             {/* Email and Phone Number - Grouped */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="mb-4">
//                 <label
//                   htmlFor="emailId"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="emailId"
//                   name="emailId"
//                   value={formData.emailId}
//                   onChange={handleChange}
//                   required
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="phoneNumber"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
//                 />
//               </div>
//             </div>

//             {/* Experience and College Name */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="mb-4">
//                 <label
//                   htmlFor="experience"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Experience
//                 </label>
//                 <select
//                   id="experience"
//                   name="experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   required
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
//                 >
//                   <option value="" disabled>
//                     Select Experience
//                   </option>
//                   <option value="Student">Student</option>
//                   <option value="Experienced">Experienced</option>
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="collegeName"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   College Name (optional)
//                 </label>
//                 <input
//                   type="text"
//                   id="collegeName"
//                   name="collegeName"
//                   value={formData.collegeName}
//                   onChange={handleChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
//                 />
//               </div>
//             </div>

//             {/* Role and CV Upload */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="mb-4">
//                 <label
//                   htmlFor="role"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Role
//                 </label>
//                 <select
//                   id="role"
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   required
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
//                 >
//                   <option value="" disabled>
//                     Select Role
//                   </option>
//                   <option value="Role 1">Role 1</option>
//                   <option value="Role 2">Role 2</option>
//                   <option value="Role 3">Role 3</option>
//                   <option value="Role 4">Role 4</option>
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="uploadCV"
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                 >
//                   Upload CV
//                 </label>
//                 <input
//                   type="file"
//                   id="uploadCV"
//                   name="uploadCV"
//                   onChange={handleFileChange}
//                   accept=".pdf,.doc,.docx"
//                   required
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="flex items-center justify-center">
//               <button
//                 type="submit"
//                 className="bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-100"
//               >
//                 Submit Application
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="lg:w-1/2 order-2 lg:order-2 hidden lg:block">
//         <div className="text-left">
//           <h1 className="text-blue-600 font-medium">Career UpSkilling</h1>
//           <h2 className="text-3xl font-semibold text-gray-900">
//             Your Career Starts Here
//           </h2>
//           <p className="mt-4 text-gray-600">
//             Our demo section offers quick answers to common questions about
//             Sycnex AI Labs&apos; services and processes, providing the essential
//             information you need for a seamless experience.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplyJob;
"use client";

import React, { useState } from "react";

const ApplyJob: React.FC = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    emailId: string;
    phoneNumber: string;
    experience: string;
    collegeName: string;
    role: string;
    uploadCV: File | null;
  }>({
    fullName: "",
    emailId: "",
    phoneNumber: "",
    experience: "",
    collegeName: "",
    role: "",
    uploadCV: null,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      // Add file validation here (optional)
      const isValidFile = file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      if (!isValidFile) {
        setResponseMessage("Invalid file type. Please upload a .pdf, .doc, or .docx file.");
        return;
      }

      setFormData((prev) => ({
        ...prev,
        uploadCV: file,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    const formDataToSend = new FormData();
    
    // Append form fields
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("emailId", formData.emailId);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("collegeName", formData.collegeName || "");  // Ensure it's not undefined
    formDataToSend.append("role", formData.role);
  
    // Append file if exists
    if (formData.uploadCV) {
      formDataToSend.append("cv", formData.uploadCV);
    }
  
    try {
      const response = await fetch("/api/recruitment", {
        method: "POST",
        body: formDataToSend,
      });
  console.log("fordata",formDataToSend)
      const result = await response.json();
      setResponseMessage(result.message);
  
      if (response.ok) {
        // Reset the form after successful submission
        setFormData({
          fullName: "",
          emailId: "",
          phoneNumber: "",
          experience: "",
          collegeName: "",
          role: "",
          uploadCV: null,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="max-w-7xl mx-4 flex flex-col lg:flex-row items-start gap-12 mt-24 sm:mx-auto bg-white/70 backdrop-blur-sm">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 order-1 lg:order-1">
        <div className="h-auto flex justify-center items-center p-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded px-8 pt-6 pb-8 w-full max-w-lg shadow-indigo-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
              Submit Your Application
            </h2>

            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
              />
            </div>

            {/* Email and Phone Number - Grouped */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="emailId"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailId"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Experience and College Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="experience"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
                >
                  <option value="" disabled>
                    Select Experience
                  </option>
                  <option value="Student">Student</option>
                  <option value="Experienced">Experienced</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="collegeName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  College Name (optional)
                </label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Role and CV Upload */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="role"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="FULLSTACK_WEB_DEVELOPER">Fullstack Web Developer</option>
                  <option value="SALES_EXECUTIVE">Sales Executive</option>
                  <option value="COMPUTER_VISION_ENGINEER">Computer Vision Engineer</option>
                  <option value="DEEP_LEARNING">Deep Learning</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="uploadCV"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Upload CV
                </label>
                <input
                  type="file"
                  id="uploadCV"
                  name="uploadCV"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-indigo-400 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>

            {/* Display response message */}
            {responseMessage && (
              <div className="mt-4 text-center text-sm text-gray-700">
                {responseMessage}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 order-2 lg:order-2 hidden lg:block">
        <div className="text-left">
          <h1 className="text-blue-600 font-medium">Career UpSkilling</h1>
          <h2 className="text-3xl font-semibold text-gray-900">
            Your Career Starts Here
          </h2>
          <p className="mt-4 text-gray-600">
            Our demo section offers quick answers to common questions about
            Sycnex AI Labs&apos; services and processes, providing the essential
            information you need for a seamless experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;

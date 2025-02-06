// import React from 'react';

// interface VdoProps {
//   videoSrc?: string;
// }

// const Vdo: React.FC<VdoProps> = ({ 
//   videoSrc = "/vdo.mp4"
// }) => {
//   return (
//     <div className="h-[550px] w-full relative overflow-hidden">
//       <video 
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm rounded-lg text-white max-w-md p-10">
//         <p className="text-gray-300 mb-2">Most convenient self-checkout experience</p>
//         <h2 className="text-3xl font-bold mb-2">Place, Scan, Pay</h2>
//         <h3 className="text-xl mb-6">- in 3 seconds</h3>
        
//         <div className="space-y-3 mb-6">
//           <div className="flex items-center gap-3">
//             <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
//               <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
//               </svg>
//             </div>
//             <p>Place your items</p>
//           </div>
          
//           <div className="flex items-center gap-3">
//             <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
//               <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
//               </svg>
//             </div>
//             <p>Instant recognition of all items</p>
//           </div>
          
//           <div className="flex items-center gap-3">
//             <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
//               <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
//               </svg>
//             </div>
//             <p>Tap to pay - done!</p>
//           </div>
//         </div>
        
//         <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors">
//          <a href='/retail/features'> Go to Features</a>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Vdo;import React from 'react';

interface VdoProps {
    videoSrc?: string;
  }
  
  const Vdo: React.FC<VdoProps> = ({ 
    videoSrc = "/vdo1.mp4"
  }) => {
    return (
      <div className="h-[550px] w-full relative overflow-hidden">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Desktop Version */}
        <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm rounded-lg text-white max-w-md p-10">
          <p className="text-gray-300 mb-2">Most convenient self-checkout experience</p>
          <h2 className="text-3xl font-bold mb-2">Place, Scan, Pay</h2>
          <h3 className="text-xl mb-6">- in 3 seconds</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <p>Place your items</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <p>Instant recognition of all items</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
              <p>Tap to pay - done!</p>
            </div>
          </div>
          
          <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition-colors">
            <a href='/retail/features'>Go to Features</a>
          </button>
        </div>
  
        {/* Mobile Version */}
        <div className="md:hidden absolute bottom-10 left-1/2 -translate-x-1/2 text-center bg-black/30 backdrop-blur-sm rounded-lg text-white p-6 w-[90%]">
          <p className="text-gray-300 mb-2">Most convenient self-checkout experience</p>
          <h2 className="text-3xl font-bold mb-2">Place, Scan, Pay</h2>
          <h3 className="text-xl">- in 3 seconds</h3>
        </div>
      </div>
    );
  };
  
  export default Vdo;
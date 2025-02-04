import React from "react";

const AtSynecx = () => {
  return (
    <div className="bg-white sm:mt-10 mt-0 flex flex-col justify-center items-center w-full h-full py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        Life at <span className="text-red-500">SynecX</span>
      </h2>

      {/* Content Section */}
      <p className="text-lg sm:text-xl text-gray-700 max-w-4xl">
        At SynecX, we believe in innovation, collaboration, and impact. 
        Our workplace fosters creativity and growth, empowering individuals  
        to push boundaries in AI-driven solutions. Whether its cutting-edge  
        research, team collaboration, or problem-solving, SynecX is where  
        talent thrives, and ideas come to life.  
      </p>

      {/* Additional Info */}
      <div className="mt-8 text-gray-700 text-lg">
        🚀 Empowering AI Solutions | 💡 Innovative Culture | 🤝 Collaborative Teamwork 
      </div>
    </div>
  );
};

export default AtSynecx;

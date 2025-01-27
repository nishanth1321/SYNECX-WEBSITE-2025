"use client";

import React from "react";

const SynecxDifference = () => {
  const cards = [
    {
      title: "Our research and innovation",
      description: "We believe in the power of collective knowledge",
      linkText: "Discover more",
      imageUrl: "/xylo-diff1.png",
    },
    {
      title: "Our inclusive workplaces",
      description: "We believe in a world where we can be, belong, become",
      linkText: "Read more",
      imageUrl: "/xylo-diff2.png",
    },
    {
      title: "Our investment in innovation",
      description: "We believe in nurturing fresh talent",
      linkText: "About CodeVita",
      imageUrl: "/xylo-diff3.png",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-40">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left">
          The Synecx difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-64 md:h-96 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 p-6 md:p-8 flex flex-col justify-end transition-opacity duration-500 group-hover:bg-opacity-70">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4">
                  {card.title}
                </h3>
                <p className="text-sm md:text-lg text-white mb-2 md:mb-4">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="text-white text-sm md:text-base font-medium underline"
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SynecxDifference;

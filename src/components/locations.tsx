// import { useState } from "react";
import ImageValley from "../assets/happy-valley.jpg";
import ImageRY from "../assets/ry-fitness.jpg";

const Locations = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8 max-w-6xl mx-auto">
      <section className="bg-white text-black py-12 px-8 text-center w-full md:w-1/2">
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Locations</h2>
          <p className="text-3xl md:text-3xl font-bold mt-8 ">
            Happy Valley Location
          </p>
          <img
            src={ImageValley}
            alt="Happy Valley Location"
            className="w-full h-auto mt-4"
          />
        </div>
      </section>

      <section className="bg-white text-black py-12 px-8 text-center w-full md:w-1/2">
        <div className="max-w-7xl mx-auto p-6">
          <p className="text-3xl md:text-3xl font-bold mt-8">
            RY Fitness 17/F, Sun King Building, 56 Yee Wo Street, Causeway Bay,
            Hong Kong SAR
          </p>
          <img
            src={ImageRY}
            alt="Happy Valley Location"
            className="w-full h-auto mt-4"
          />
        </div>
      </section>
    </div>
  );
};

export default Locations;

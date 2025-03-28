// import { useState } from "react";
import ImageValley from "../assets/happy-valley.jpg";
import ImageRY from "../assets/ry-fitness.jpg";

const Locations = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto mt-6 mb-10 flex items-center justify-center p-8">
      <section className="bg-white text-black py-12 px-8 text-center w-full md:w-1/2">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="w-16 h-16 bg-[#EBE8DE]"></div>
            <div className="w-5 h-16 bg-[#EBE8DE]"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Locations</h2>
          </div>
          {/* <h2 className="text-3xl md:text-4xl font-bold">Our Locations</h2> */}
          <p className="text-3xl md:text-3xl font-bold mt-10">
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

      <section className="bg-white text-black py-12 px-8 text-center w-full md:w-1/2">
        <div className="max-w-7xl mx-auto p-6">
          <p className="text-3xl md:text-3xl font-bold mt-20 md:mt-20 mb-9">
            Happy Valley Recreation Ground Location, The Hong Kong Jockey Club
            Headquarters, Sports Rd, Happy Valley, Hong Kong
          </p>
          <img
            src={ImageValley}
            alt="Happy Valley Location"
            className="w-100 h-auto mt-4"
          />
        </div>
      </section>
    </div>
  );
};

export default Locations;

// import { useState } from "react";
import ImageValley from "../assets/happy-valley.jpg";
// import ImageRY from "../assets/ry-fitness.jpg";

const Locations = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8 max-w-6xl mx-auto">
      <section className="bg-white text-black py-12 px-8 text-center w-full md:w-1/2">
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Locations</h2>
          <p className="text-3xl md:text-3xl font-bold mt-10">
            Happy Valley Recreation Ground Location, The Hong Kong Jockey Club
            Headquarters, Sports Rd, Happy Valley, Hong Kong
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
          <p className="text-3xl md:text-3xl font-bold mt-16 md:mt-20 mb-9">
            RY Fitness 17/F, Sun King Building, 56 Yee Wo Street, Causeway Bay,
            Hong Kong SAR
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.960529717415!2d114.18341141171337!3d22.279484943563396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400fe187d75cf%3A0x1c2bf7df77309566!2zUlkgRml0bmVzc-WBpei6q-S4reW_gw!5e0!3m2!1sen!2sph!4v1743132484338!5m2!1sen!2sph"
            width="600"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Locations;

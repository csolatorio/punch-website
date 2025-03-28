// import React, { useState } from 'react';
import HeroPage from "../components/hero-page";
// import OfferPage from "../components/offer-page";
import WelcomePage from "./welcome-section";
import Footer from "./footer"; // Ensure Footer is a valid React component
// import CorporateWellness from "./corporate-wellness";
// import AboutUs from "./about-us";
// import CTABanner from "./ctabanner";
import PromoPage from "./promo-page";
// import ContactGym from "./contact-gym";
import Locations from "./locations";

import { FaWhatsapp } from "react-icons/fa";
import BoxingPromo from "./we-love-boxing";

const HomePage = () => {
  return (
    <div className="min-h-[50vh] bg-white">
      <HeroPage />
      <WelcomePage />
      <BoxingPromo />
      <PromoPage />
      <Locations />
      {/* <ContactGym /> */}
      {/* /* <OfferPage />
      <CorporateWellness />
      <AboutUs />
      <CTABanner />
      
       */}
      <Footer />

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/85294338092"
        className="fixed bottom-15 right-15 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={60} className="text-white" />
      </a>
    </div>
  );
};

export default HomePage;

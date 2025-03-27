// import React, { useState } from 'react';
import HeroPage from "../components/hero-page";
import OfferPage from "../components/offer-page";
import WelcomePage from "./welcome-section";
import Footer from "./footer";
import CorporateWellness from "./corporate-wellness";
import AboutUs from "./about-us";
import CTABanner from "./ctabanner";
import PromoPage from "./promo-page";
import ContactGym from "./contact-gym";

import { FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-[50vh] bg-white">
      <HeroPage />
      <WelcomePage />
      <OfferPage />
      <CorporateWellness />
      <AboutUs />
      <CTABanner />
      <PromoPage />
      <ContactGym />
      <Footer />

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/85294338092"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default HomePage;

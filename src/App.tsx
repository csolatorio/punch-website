import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/home-page";
import Navbar from "./components/navbar";
import OfferPage from "./components/offer-page";
import Footer from "./components/footer";
import CorporateWellness from "./components/corporate-wellness";
import AboutUs from "./components/about-us";
import CTABanner from "./components/ctabanner";
import PromoPage from "./components/promo-page";
import ContactGym from "./components/contact-gym";
import PersonalTraining from "./components/personal-training";
import Locations from "./components/locations";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/offer-page" element={<OfferPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/corporate-wellness" element={<CorporateWellness />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cta-banner" element={<CTABanner />} />
          <Route path="/promo-page" element={<PromoPage />} />
          <Route path="/contact-gym" element={<ContactGym />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

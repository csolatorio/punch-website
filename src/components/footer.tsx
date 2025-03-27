import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#EAE6DC] text-black py-10 px-8 flex flex-col md:flex-row justify-between items-center md:items-start text-sm">
      <div className="md:w-1/3 mb-6 md:mb-0">
        <img className="h-15 w-auto" src={Logo} alt="Logo" />
        <p>
          RY Fitness 17/F, Sun King Building, 56 Yee Wo Street, Causeway Bay,
          Hong Kong SAR
        </p>
        <p className="text-xs mt-4">
          &copy;2025 PUNCH Boxing Academy HK. All rights reserved
        </p>
      </div>

      <div className="md:w-1/3 mb-6 md:mb-0">
        <h2 className="font-bold mb-2">Quick Links:</h2>
        <ul>
          <li className="font-bold">Home</li>
          <li className="font-bold">Personal Training</li>
          <li className="font-bold">Classes</li>
          <li className="font-bold">Our Team</li>
        </ul>
      </div>

      <div className="md:w-1/3 text-center md:text-right">
        <h2 className="font-bold mb-2">Contact Us:</h2>
        <p>+852 9433 8092</p>
        <p>info@punchboxingacademy.com</p>
        <h2 className="font-bold mt-4">Social Media:</h2>
        <div className="flex justify-center md:justify-end gap-3 mt-2">
          <FaFacebook className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaWhatsapp className="text-2xl" />
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-[#EBE8DE] shadow-lg px-4 md:px-6 lg:px-8">
      <div className="flex items-center justify-between h-24">
        {/* Logo */}
        <Link to="/">
          <a href="" className="flex-shrink-0 flex items-center">
            <img className="h-20 w-auto" src={Logo} alt="Logo" />
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 justify-end flex-grow">
          <Link to="/">
            <a className="p-3 xl:p-6" onClick={() => navigate("/")}>
              <span>Home</span>
            </a>
          </Link>
          <Link to="/personal-training">
            <a className="p-3 xl:p-6">
              <span>Personal Training</span>
            </a>
          </Link>

          <div className="relative group">
            <a className="p-3 xl:p-6 cursor-pointer">
              <span>Classes ▾</span>
            </a>
            <div className="absolute z-10 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/group-classes">
                <a className="block px-4 py-2 hover:bg-gray-100">
                  Group Classes
                </a>
              </Link>
              <Link to="/corporate-wellness">
                <a className="block px-4 py-2 hover:bg-gray-100">
                  Corporate Classes
                </a>
              </Link>
            </div>
          </div>
          <Link to="/contact-us">
            <a className="p-3 xl:p-6">
              <span>Contact Us</span>
            </a>
          </Link>

          <div className="flex items-center px-4 lg:px-6 xl:px-8">
            <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
              Book Now
            </button>
          </div>
        </ul>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-6 px-4 text-center">
          <Link to="/">
            <a
              className="block"
              onClick={() => {
                setIsOpen(false);
                navigate("/");
              }}
            >
              Home
            </a>
          </Link>
          <Link to="/personal-training">
            <a className="block" onClick={() => setIsOpen(false)}>
              Personal Training
            </a>
          </Link>
          <div className="flex flex-col items-center">
            <span
              className="block font-semibold cursor-pointer text-black"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Classes ▾
            </span>
            {isDropdownOpen && (
              <div className="mt-2 space-y-2">
                <Link to="/group-classes">
                  <a className="block px-4 py-2 hover:bg-gray-100">
                    Group Classes
                  </a>
                </Link>
                <Link to="/corporate-wellness">
                  <a className="block" onClick={() => setIsOpen(false)}>
                    Corporate Classes
                  </a>
                </Link>
              </div>
            )}
          </div>
          <a className="block" onClick={() => setIsOpen(false)}>
            Contact Us
          </a>
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold px-4 py-2 rounded mb-10"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </button>
        </ul>
      )}
    </header>
  );
};

export default Navbar;

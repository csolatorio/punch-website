import { useState } from "react";
import Logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#EBE8DE] shadow-lg h-24 flex items-center px-4 md:px-6 lg:px-8">
      {/* Logo */}
      <a href="" className="flex-shrink-0 flex items-center">
        <img className="h-30 w-auto" src={Logo} alt="Logo" />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 justify-end flex-grow">
        <a className="p-3 xl:p-6 active" href="">
          <span>Home</span>
        </a>
        <a className="p-3 xl:p-6" href="">
          <span>Personal Training</span>
        </a>
        <div className="relative group">
          <a className="p-3 xl:p-6 cursor-pointer">
            <span>Corporate Classes ▾</span>
          </a>
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href="" className="block px-4 py-2 hover:bg-gray-100">
              Group Classes
            </a>
            <a href="" className="block px-4 py-2 hover:bg-gray-100">
              Corporate Classes
            </a>
            <a href="" className="block px-4 py-2 hover:bg-gray-100">
              Team Building
            </a>
            <a href="" className="block px-4 py-2 hover:bg-gray-100">
              Small Group Training
            </a>
          </div>
        </div>
        <a className="p-3 xl:p-6" href="">
          <span>About</span>
        </a>
        <a className="p-3 xl:p-6" href="">
          <span>Contact Us</span>
        </a>
        <div className="flex items-center px-4 lg:px-6 xl:px-8">
          <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
            Book Now
          </button>
        </div>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden ml-auto text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#EBE8DE] shadow-md md:hidden flex flex-col items-center space-y-4 py-6">
          <a className="p-3" href="">
            Home
          </a>
          <a className="p-3" href="">
            Personal Training
          </a>
          <div className="relative group">
            <a className="p-3 cursor-pointer">Corporate Classes ▾</a>
            <div className="mt-2 w-48 bg-white shadow-lg rounded-lg">
              <a href="" className="block px-4 py-2 hover:bg-gray-100">
                Option 1
              </a>
              <a href="" className="block px-4 py-2 hover:bg-gray-100">
                Option 2
              </a>
              <a href="" className="block px-4 py-2 hover:bg-gray-100">
                Option 3
              </a>
            </div>
          </div>
          <a className="p-3" href="">
            About
          </a>
          <a className="p-3" href="">
            Contact Us
          </a>
          <button className="bg-black hover:bg-gray-700 text-white font-bold px-6 py-3 rounded">
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

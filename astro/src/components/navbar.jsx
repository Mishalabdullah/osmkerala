import { useState } from "react";
// import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div>
        <div className="m-2 p-2 container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <img src="/osmkerala.png" alt="logo" width={100} />
              </div>
              <div className="text-3xl font-bold">OSM Kerala</div>
            </div>
            <div className="hidden text-[#656d78] font-semibold md:flex space-x-4">
              {/* Add your navigation links here */}
              <a>HOME</a>
              <a>ABOUT US</a>
              <a>COMMUNITY</a>
              <a>SUBSCRIBE</a>
              <a>MAINTAINERS</a>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleNavbar}
                className="text-[#2C3136] hover:text-gray-300"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="text-[#656d78]">
            {/* Add your mobile navigation links here */} <a>HOME</a>
            <a>ABOUT US</a>
            <a>COMMUNITY</a>
            <a>SUBSCRIBE</a>
            <a>MAINTAINERS</a>
          </div>
        )}
      </div>
    </nav>
  );
}

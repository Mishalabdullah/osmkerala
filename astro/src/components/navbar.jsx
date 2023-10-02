import { useState } from "react";
// import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="border-2  border-[#E6E9ED];">
        <div className="m-2 p-2 container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <img src="/osmkerala.png" alt="logo" width={100} />
              </div>
              <div className="text-3xl font-bold">OSM Kerala</div>
            </div>
            <div className="hidden text-[#2b2b2b] font-semibold md:flex space-x-4">
              {/* Add your navigation links here */}
              <a className=" hover:bg-[#1a1d20] rounded-lg hover:text-white  active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 p-2">
                HOME
              </a>
              <a className=" hover:bg-[#1a1d20] rounded-lg hover:text-white  active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 p-2">
                ABOUT US
              </a>
              <a className=" hover:bg-[#1a1d20] rounded-lg hover:text-white  active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 p-2">
                COMMUNITY
              </a>
              <a className=" hover:bg-[#1a1d20] rounded-lg hover:text-white  active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 p-2">
                SUBSCRIBE
              </a>
              <a className=" hover:bg-[#1a1d20] rounded-lg hover:text-white  active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 p-2">
                MAINTAINERS
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleNavbar}
                className="text-[#2C3136] p-2 m-2 hover:text-gray-300"
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
                    className="h-6 w-6 text-black "
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
          <div className="absolute top-13 right-5  text-semiblod flex-col text-right w-fit justify-self-end rounded-lg bg-[#1a1d20] text-[#ffffff]">
            {/* Add your mobile navigation links here */}
            <div className="m-2 p-2 mr-8">
              <a className="bg-[#1a1d20] hover:bg-white rounded-lg hover:text-[#1a1d20]  active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 p-2">
                HOME
              </a>
            </div>
            <div className="m-2 p-2 mr-8">
              <a className="bg-[#1a1d20] hover:bg-white rounded-lg hover:text-[#1a1d20]  active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 p-2">
                ABOUT US
              </a>
            </div>
            <div className="m-2 p-2 mr-8">
              <a className="bg-[#1a1d20] hover:bg-white rounded-lg hover:text-[#1a1d20]  active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 p-2">
                SUBSCRIBE
              </a>
            </div>
            <div className="m-2 p-2 mr-8">
              <a className="bg-[#1a1d20] hover:bg-white rounded-lg hover:text-[#1a1d20]  active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 p-2">
                COMMUNITY
              </a>
            </div>
            <div className="m-2 p-2 mr-8">
              <a className="bg-[#1a1d20] hover:bg-white rounded-lg hover:text-[#1a1d20]  active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 p-2">
                MAINTAINERS
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

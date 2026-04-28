import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaLanguage } from "react-icons/fa";

export default function Navbar() {
    const [language, setLanguage] = useState("English");

    return (

        <nav className="flex justify-between items-center px-4 md:px-12 py-3 md:py-4 absolute w-full z-50">
            {/* Logo */}
            <h2 className="text-red-600 font-bold text-2xl md:text-4xl tracking-wide">
                NETFLIX
            </h2>

            {/* Right Section */}
            <div className="flex items-center gap-2 md:gap-4">

                {/* Language Dropdown */}
                <Dropdown autoClose="true">
                    <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="border border-gray-400 px-2 md:px-4 py-1 text-xs md:text-sm bg-black/50 text-white flex items-center gap-1 md:gap-2 rounded-md"
                    >
                        <FaLanguage />
                        <span className="hidden sm:inline">{language}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-black text-white border border-gray-700 flex flex-col">
                        <Dropdown.Item
                            onClick={() => setLanguage("English")}
                            className="text-white hover:bg-gray-800"
                        >
                            English
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setLanguage("Hindi")}
                            className="text-white hover:bg-gray-800"
                        >
                            Hindi
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/* Sign In Button */}
                <button className="bg-red-600 hover:bg-red-700 text-white px-3 md:px-4 py-1 rounded-md font-semibold text-xs md:text-sm whitespace-nowrap">
                    Sign In
                </button>

            </div>
        </nav>
    );
}
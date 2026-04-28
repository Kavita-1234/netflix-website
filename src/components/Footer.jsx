import { useState } from "react";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaLanguage } from "react-icons/fa6";


export default function Footer() {
    const [language, setLanguage] = useState("English");
    return (
        <footer className="bg-black text-white py-12 text-center">

            <div className="max-w-7xl mx-auto px-6">

                {/* Top Line */}
                <p className="text-gray-400 mb-8 text-start pl-20">
                    Questions? Call{" "}
                    <span className="underline cursor-pointer">
                        000-800-919-1743
                    </span>
                </p>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300 justify-items-center">

                    {/* Column 1 */}
                    <ul className="space-y-2 text-start">
                        <li className="hover:text-white cursor-pointer underline">FAQ</li>
                        <li className="hover:text-white cursor-pointer underline">Investor Relations</li>
                        <li className="hover:text-white cursor-pointer underline">Privacy</li>
                        <li className="hover:text-white cursor-pointer underline">Speed Test</li>
                    </ul>

                    {/* Column 2 */}
                    <ul className="space-y-2 text-start">
                        <li className="hover:text-white cursor-pointer underline">Help Centre</li>
                        <li className="hover:text-white cursor-pointer underline">Jobs</li>
                        <li className="hover:text-white cursor-pointer underline">Cookie Preferences</li>
                        <li className="hover:text-white cursor-pointer underline">Legal Notices</li>
                    </ul>

                    {/* Column 3 */}
                    <ul className="space-y-2 text-start">
                        <li className="hover:text-white cursor-pointer underline">Account</li>
                        <li className="hover:text-white cursor-pointer underline">Ways to Watch</li>
                        <li className="hover:text-white cursor-pointer underline">Corporate Information</li>
                        <li className="hover:text-white cursor-pointer underline">Only on Netflix</li>
                    </ul>

                    {/* Column 4 */}
                    <ul className="space-y-2 text-start">
                        <li className="hover:text-white cursor-pointer underline">Media Centre</li>
                        <li className="hover:text-white cursor-pointer underline">Terms of Use</li>
                        <li className="hover:text-white cursor-pointer underline">Contact Us</li>
                    </ul>

                </div>

                <div className=" text-start pl-20 mt-10">

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

                </div>

                <p className="text-start pl-20 mt-14">Netflix India</p>
                <p className="text-gray-400 text-base text-start mt-12 pl-20">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>


            </div>
        </footer>
    );
}
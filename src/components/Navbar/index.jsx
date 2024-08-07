import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Dropdown from "../../utils/Dropdown";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all h-28 duration-300 ${
                isScrolled
                    ? "bg-[#F7EDE8]/50 backdrop-blur-lg  text-white shadow-md"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-28 sm:h-28 md:h-28">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-20 sm:h-20 md:h-24"
                            />
                        </Link>
                        <ul className="hidden items-center md:flex ml-6 lg:ml-10 space-x-4 lg:space-x-8">
                            <li className="px-px-2">
                                <Link
                                    to="/episodes"
                                    className="font-semibold text-xl inline-block lg:text-xl  text-black hover:bg-gray-200 rounded-md p-3 transition-colors duration-300"
                                >
                                    Episodes
                                </Link>
                            </li>
                            <li className="px-2">
                                <Link
                                    to="/about"
                                    className="font-semibold text-xl inline-block lg:text-xl  text-black hover:bg-gray-200 rounded-md p-3 transition-colors duration-300"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="px-2">
                                <Dropdown />
                            </li>
                        </ul>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-4 py-2 bg-transparent font-semibold text-black rounded-md hover:bg-black transition-all duration-300 border-2 border-black hover:text-white text-sm lg:text-base">
                            RECENT EPISODES
                        </button>
                        <button className="px-4 py-2 font-semibold text-white rounded-md hover:bg-transparent bg-black transition-all duration-300 border-2 border-black hover:text-black text-sm lg:text-base">
                            SUBSCRIBE
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-4xl flex justify-center items-center p-2 sm:text-3xl text-black  hover:text-gray-700 transition-colors duration-300"
                        >
                            {isMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed top-28 border-t-2 inset-0 bg-white h-[400px] z-40 transform transition-transform duration-300 ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col h-[400px] justify-center items-center space-y-8">
                    <Link
                        to="/episodes"
                        onClick={toggleMenu}
                        className="font-semibold text-xl text-black hover:text-gray-700"
                    >
                        Episodes
                    </Link>
                    <Link
                        to="/about"
                        onClick={toggleMenu}
                        className="font-semibold text-xl text-black hover:text-gray-700"
                    >
                        About
                    </Link>
                    <Dropdown />
                    <div className="flex flex-col items-center space-y-4 mt-8">
                        <button
                            onClick={toggleMenu}
                            className="px-6 py-3 bg-transparent font-semibold text-black rounded-md hover:bg-black transition-all duration-300 border-2 border-black hover:text-white"
                        >
                            RECENT EPISODES
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="px-6 py-3 bg-black text-white rounded-md hover:bg-transparent transition-all duration-300 border-2 border-black hover:text-black font-semibold"
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

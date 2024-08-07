import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);
    const navigate = useNavigate();

    const handleParentClick = () => {
        navigate("/parent-page");
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 500); // 500ms kechikish
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className="relative inline-block text-left"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-center items-center w-full border-none px-4 py-2 text-xl font-semibold text-black focus:outline-none outline-none"
                >
                    More
                    <svg
                        className={`-mr-1 ml-2 h-5 w-5 transform ${
                            isOpen ? "rotate-180" : ""
                        } transition-transform duration-200`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <a
                            href="/child-page-1"
                            className="block px-4 py-4 text-xl text-black hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            Child Item 1
                        </a>
                        <a
                            href="/child-page-2"
                            className="block px-4 py-4 text-xl text-black hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            Child Item 2
                        </a>
                        <a
                            href="/child-page-3"
                            className="block px-4 py-4 text-xl text-black hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            Child Item 3
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

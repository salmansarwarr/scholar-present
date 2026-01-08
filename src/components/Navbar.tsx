import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
                <div className="max-w-7xl py-6 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex items-center hidden justify-between h-20">
                        <div className="shrink-0">
                            <img
                                src="/logo.png"
                                alt="Scholar Present"
                                className="h-[82px] w-[103px]"
                            />
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-8 relative">
                            <a
                                href="/"
                                className={`${
                                    pathname === "/"
                                        ? "font-extrabold text-gray-900"
                                        : "font-medium text-gray-900 hover:text-gray-600"
                                }`}
                            >
                                Home
                            </a>

                            {/* Solutions Dropdown */}
                            <div className="relative group">
                                <button
                                    className={`${
                                        pathname === "/solutions"
                                            ? "font-extrabold"
                                            : "font-medium"
                                    } text-gray-900 hover:text-gray-600 flex items-center`}
                                >
                                    Solutions
                                    <svg
                                        className="ml-1 h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <a
                                        href="/solutions"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Messaging Module
                                    </a>
                                    <a
                                        href="/solutions"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Collections Module
                                    </a>
                                    <a
                                        href="/solutions"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Finance Module
                                    </a>
                                    <a
                                        href="/solutions"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Attendance Solution
                                    </a>
                                    <a
                                        href="/solutions"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Calendar Solution
                                    </a>
                                    <a
                                        href="/solutions"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    >
                                        Documents Solution
                                    </a>
                                </div>
                            </div>

                            <a
                                href="/pricing"
                                className={`${
                                    pathname === "/pricing"
                                        ? "font-extrabold text-gray-900"
                                        : "font-medium text-gray-900 hover:text-gray-600"
                                }`}
                            >
                                Pricing
                            </a>

                            <a
                                href="/about-us"
                                className={`${
                                    pathname === "/about-us"
                                        ? "font-extrabold text-gray-900"
                                        : "font-medium text-gray-900 hover:text-gray-600"
                                }`}
                            >
                                About
                            </a>

                            <a
                                href="dev.scholarpresent.com/channels"
                                target="_blank"
                                className="text-gray-900 hover:text-gray-600 font-medium"
                            >
                                Channels
                            </a>
                        </div>

                        {/* Right side buttons */}
                        <div className="flex items-center space-x-6">
                            <a
                                href="/join"
                                className={`${
                                    pathname === "/join"
                                        ? "font-extrabold"
                                        : "font-medium"
                                } text-gray-900 hover:text-gray-600`}
                            >
                                Join My School
                            </a>
                            <a
                                href="/"
                                className="bg-green-600 hover:bg-green-700 text-white font-medium px-9 py-3 rounded-full transition-colors duration-200"
                            >
                                Sign In
                            </a>
                        </div>
                    </div>

                    {/* Mobile Header */}
                    <div className="lg:hidden flex items-center justify-between h-16">
                        <div className="shrink-0">
                            <img
                                src="/logo.png"
                                alt="Scholar Present"
                                className="h-12 w-auto"
                            />
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-green-600 hover:text-green-700 focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Full Screen Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-gradient-to-b from-[#6AB04C] to-[#8BC34A] z-40 overflow-y-auto">
                    <div className="flex flex-col min-h-screen px-6 py-8">
                        {/* Close Button */}
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="bg-white text-gray-900 p-2 rounded-lg shadow-md"
                                aria-label="Close menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Logo and Brand */}
                        <div className="mb-8">
                            <h1 className="text-white text-3xl font-bold">
                                Scholar Present
                            </h1>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col space-y-4 flex-1">
                            <a
                                href="/"
                                className="text-white font-medium text-lg py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>

                            {/* Solutions Dropdown */}
                            <div>
                                <button
                                    onClick={() =>
                                        setIsSolutionsOpen(!isSolutionsOpen)
                                    }
                                    className={`${
                                        isSolutionsOpen &&
                                        "bg-[rgba(102,183,114,0.2)]"
                                    } ${
                                        pathname === "/solutions"
                                            ? "font-extrabold"
                                            : "font-medium"
                                    } w-full text-left text-white text-lg py-3 px-4 border border-white/40 rounded-lg flex items-center justify-between`}
                                >
                                    Solutions
                                    <svg
                                        className={`h-5 w-5 transition-transform ${
                                            isSolutionsOpen ? "rotate-180" : ""
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {/* Solutions Submenu */}
                                {isSolutionsOpen && (
                                    <div className="mt-3 ml-6 space-y-3">
                                        <a
                                            href="/solutions"
                                            className="block text-white text-base py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Messaging Module
                                        </a>
                                        <a
                                            href="/solutions"
                                            className="block text-white text-base py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Collections Module
                                        </a>
                                        <a
                                            href="/solutions"
                                            className="block text-white text-base py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Finance Module
                                        </a>
                                        <a
                                            href="/solutions"
                                            className="block text-white text-base py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Attendance Solution
                                        </a>
                                        <a
                                            href="/solutions"
                                            className="block text-white text-base py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Calendar Solution
                                        </a>
                                        <a
                                            href="/solutions"
                                            className="block text-white text-base py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Documents Solution
                                        </a>
                                    </div>
                                )}
                            </div>
<a
                            
                                href="/pricing"
                                className={`${
                                    pathname === "/pricing"
                                        ? "font-bold"
                                        : "font-medium"
                                } text-white text-lg py-2`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </a>

                            <a
                                href="/about-us"
                                className={`${
                                    pathname === "/about-us"
                                        ? "font-bold"
                                        : "font-medium"
                                } text-white text-lg py-2`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="dev.scholarpresent.com/channels"
                                target="_blank"
                                className="text-white font-medium text-lg py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Channels
                            </a>
                        </div>

                        {/* Bottom Buttons */}
                        <div className="space-y-4 mt-14 mb-8">
                            <a
                                href="/"
                                className="block w-full bg-[#2D7A3E] hover:bg-[#246530] text-white font-medium px-8 py-4 rounded-full text-center transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sign In
                            </a>
                            <a
                                href="/join"
                                className={`${
                                    pathname === "/join"
                                        ? "font-extrabold"
                                        : "font-medium"
                                } block w-full bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-center transition-colors duration-200`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Join My School
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
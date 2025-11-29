import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-transparent lg:block">
        <div className="max-w-7xl py-6 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center hidden justify-between h-20">
            {/* Logo */}
            <div className="shrink-0">
              <img 
                src="/logo.png"
                alt="Scholar Present" 
                className="h-[82px] w-[103px]"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-gray-600 font-bold">
                Home
              </a>
              <div className="relative group">
                <button className="text-gray-900 hover:text-gray-600 font-medium flex items-center">
                  Solutions
                  <svg 
                    className="ml-1 h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <a href="#pricing" className="text-gray-900 hover:text-gray-600 font-medium">
                Pricing
              </a>
              <a href="#about" className="text-gray-900 hover:text-gray-600 font-medium">
                About
              </a>
              <a href="#blog" className="text-gray-900 hover:text-gray-600 font-medium">
                Blog
              </a>
              <a href="#contact" className="text-gray-900 hover:text-gray-600 font-medium">
                Contact
              </a>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-6">
              <a 
                href="#join" 
                className="text-gray-900 hover:text-gray-600 font-medium"
              >
                Join My School
              </a>
              <a 
                href="#signin" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-9 py-3 rounded-full transition-colors duration-200"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Button - Fixed Position */}
      <div className="lg:hidden fixed top-16 right-4 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-900 hover:text-gray-600 focus:outline-none bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-md"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // Close icon (X)
            <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto">
          <div className="flex flex-col items-center justify-center min-h-screen px-8 py-20">
            {/* Logo at the top */}
            <div className="mb-12">
              <img 
                src="/logo.png"
                alt="Scholar Present" 
                className="h-[82px] w-[103px]"
              />
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center space-y-6 w-full">
              <a 
                href="#home" 
                className="text-gray-900 hover:text-gray-600 font-bold text-xl py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <button className="text-gray-900 hover:text-gray-600 font-medium text-xl flex items-center py-2">
                Solutions
                <svg 
                  className="ml-1 h-5 w-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <a 
                href="#pricing" 
                className="text-gray-900 hover:text-gray-600 font-medium text-xl py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-gray-900 hover:text-gray-600 font-medium text-xl py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#blog" 
                className="text-gray-900 hover:text-gray-600 font-medium text-xl py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a 
                href="#contact" 
                className="text-gray-900 hover:text-gray-600 font-medium text-xl py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#join" 
                className="text-gray-900 hover:text-gray-600 font-medium text-xl py-2 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Join My School
              </a>
              <a 
                href="#signin" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-12 py-4 rounded-full transition-colors duration-200 text-xl mt-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
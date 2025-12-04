import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Upwork() {
  return (
      <div className="w-full bg-black">
          {/* Live Ticker */}
          <div className="bg-yellow-400 text-black py-1 font-bold text-sm flex items-center justify-center">
              <ArrowLeft/>
              <span className="tracking-widest">$MEMEMINER LIVE</span>
              <ArrowRight/>
          </div>

          {/* Main Header */}
          <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                  {/* Left Social Icons */}
                  <div className="flex items-center space-x-3 order-1 md:order-1">
                      <a className="w-9 h-9 rounded-md border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                          <span className="text-white text-lg">𝕏</span>
                      </a>

                      <a className="w-9 h-9 rounded-md border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                          <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                          >
                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                          </svg>
                      </a>

                      <a className="w-9 h-9 rounded-md border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                          <svg
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                          >
                              <circle
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                              />
                              <circle cx="12" cy="12" r="3" fill="currentColor" />
                          </svg>
                      </a>
                  </div>

                  {/* Center Logo */}
                  <div className="text-center leading-none -mt-2 order-2 md:order-2">
                      <h1 className="text-4xl md:text-5xl font-black text-yellow-400 drop-shadow-md">
                          MEME
                      </h1>
                      <div className="relative inline-block mt-[-8px]">
                          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 drop-shadow-md tracking-tight">
                              MINERS
                          </h2>

                          {/* Gold Coin With Star */}
                          {/* <div className="absolute -right-5 -top-1 w-8 h-8">
                              <svg viewBox="0 0 40 40" className="w-full h-full">
                                  <circle
                                      cx="20"
                                      cy="20"
                                      r="18"
                                      fill="#FCD34D"
                                      stroke="#F59E0B"
                                      strokeWidth="2"
                                  />
                                  <path
                                      d="M20 8 L22 16 L30 16 L24 21 L26 29 L20 24 L14 29 L16 21 L10 16 L18 16 Z"
                                      fill="#F59E0B"
                                  />
                              </svg>
                          </div> */}
                      </div>
                  </div>

                  {/* Buy Button */}
                  <button className="bg-yellow-400 text-black font-bold px-5 py-2.5 rounded-md border border-yellow-600 shadow hover:bg-yellow-500 transition w-full md:w-auto order-3 md:order-3">
                      BUY $MEMEMINER
                  </button>
              </div>

              {/* Navigation */}
              <nav className="flex flex-wrap justify-center gap-2 md:gap-0 md:space-x-5 mt-6">
                  {["TOKEN", "LAUNCHPAD", "ABOUT", "AIRDROP", "TEAM"].map(
                      (item) => (
                          <a
                              key={item}
                              href="#"
                              className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded font-bold transition hover:bg-yellow-400 hover:text-black"
                          >
                              {item}
                          </a>
                      )
                  )}
              </nav>
          </div>

          {/* Bottom Border */}
          <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
      </div>
  );
}
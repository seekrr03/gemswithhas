// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    window.open("https://wa.me/94777752858?text=Hi,%20I%20have%20a%20question%20about%20Gems%20with%20Has.", "_blank");
  };

  return (
    <nav className="border-b border-gray-100 sticky top-0 bg-white/95 z-40 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="text-xl sm:text-2xl font-serif font-bold tracking-widest text-black">
          GEMS WITH HAS
        </div>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-500">
          <Link href="/#collection" className="hover:text-black transition">SAPPHIRES</Link>
          <Link href="/#collection" className="hover:text-black transition">RUBIES</Link>
          <Link href="/#collection" className="hover:text-black transition">SPINELS</Link>
          <Link href="/#collection" className="hover:text-black transition">ALL GEMS</Link>
        </div>

        {/* DESKTOP CONTACT BUTTON */}
        <div className="hidden md:block">
          <button 
            onClick={openWhatsApp}
            className="text-sm font-bold border border-black px-6 py-2 hover:bg-black hover:text-white transition"
          >
            CONTACT US
          </button>
        </div>

        {/* MOBILE MENU BUTTON (Hamburger) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black p-2 focus:outline-none"
        >
          {isOpen ? (
            // Close Icon (X)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            // Menu Icon (Hamburger)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col p-6 gap-4 text-center font-medium text-gray-600">
            <Link href="/#collection" onClick={() => setIsOpen(false)} className="hover:text-black py-2 border-b border-gray-50">SAPPHIRES</Link>
            <Link href="/#collection" onClick={() => setIsOpen(false)} className="hover:text-black py-2 border-b border-gray-50">RUBIES</Link>
            <Link href="/#collection" onClick={() => setIsOpen(false)} className="hover:text-black py-2 border-b border-gray-50">SPINELS</Link>
            <Link href="/#collection" onClick={() => setIsOpen(false)} className="hover:text-black py-2 border-b border-gray-50">ALL GEMS</Link>
            <button 
              onClick={openWhatsApp}
              className="mt-2 bg-black text-white py-3 px-6 font-bold uppercase text-sm rounded"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

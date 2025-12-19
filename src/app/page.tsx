// src/app/page.tsx
"use client";

import Link from "next/link";
import GoogleReviews from "../components/GoogleReviews";
import { gems } from "@/data/gems"; // <--- Importing shared data from your new file

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* 1. NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100 sticky top-0 bg-white/95 z-50">
        <div className="text-2xl font-serif font-bold tracking-widest text-black">
          GEMS WITH HAS
        </div>
        
        {/* Simple Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-500">
          <a href="#" className="hover:text-black transition">SAPPHIRES</a>
          <a href="#" className="hover:text-black transition">RUBIES</a>
          <a href="#" className="hover:text-black transition">SPINELS</a>
          <a href="#" className="hover:text-black transition">ALL GEMS</a>
        </div>

        <button className="text-sm font-bold border border-black px-6 py-2 hover:bg-black hover:text-white transition">
          CONTACT US
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Your Background Image */}
        <img 
          src="/hero-bg.jpeg" 
          alt="Luxury Gems Background"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        />
        
        <div className="relative z-10 max-w-3xl text-white">
          <p className="text-xs md:text-sm tracking-[0.3em] mb-4 uppercase text-gray-300 font-bold">
            Direct from the Mines
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Investment Grade <br /> Gemstones
          </h1>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
            We specialize in unheated Sapphires, Rubies, and rare Spinels sourced ethically from Sri Lanka and Africa.
          </p>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="py-20 px-4 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-4">
          <h2 className="text-3xl font-serif text-gray-900">New Acquisitions</h2>
          <span className="text-sm text-gray-500 font-medium">{gems.length} Stones Available</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {gems.map((gem) => (
            // This Link tag makes the whole card clickable to the next page
            <Link key={gem.id} href={`/product/${gem.id}`}>
              <div className="group cursor-pointer bg-white rounded-lg hover:shadow-2xl transition duration-300 border border-gray-100 overflow-hidden">
                
                {/* Image Container */}
                <div className="h-64 relative bg-gray-50 overflow-hidden">
                  {gem.status === "Sold" && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase rounded z-10 shadow-sm">
                      Sold
                    </div>
                  )}
                  <img 
                    src={gem.image} 
                    alt={gem.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${gem.status === 'Sold' ? 'grayscale opacity-80' : ''}`}
                  />
                </div>

                {/* Details Container */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {gem.origin}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 border border-gray-200 px-2 py-1 rounded">
                      {gem.shape}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-medium text-gray-900 mb-4 group-hover:text-blue-800 transition line-clamp-2">
                    {gem.title}
                  </h3>

                  <div className="border-t border-dashed border-gray-200 pt-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">Weight</p>
                      <p className="text-sm font-medium text-gray-800">{gem.carats} ct</p>
                    </div>
                    <div className="text-right">
                       {gem.status === "Sold" ? (
                         <span className="text-red-500 font-bold text-sm">Sold Out</span>
                       ) : (
                         <>
                           <p className="text-xs text-gray-400 uppercase font-bold">Price</p>
                           <p className="text-lg font-bold text-gray-900">${gem.price.toLocaleString()}</p>
                         </>
                       )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border-b-2 border-black pb-1 text-sm font-bold hover:text-gray-600 hover:border-gray-600 transition tracking-widest uppercase">
            View All Inventory
          </button>
        </div>
      </section>

      {/* 4. TRUST & REVIEWS SECTION */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6 text-gray-900">The "Gems with Has" Promise</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Buying gemstones online requires trust. We provide high-resolution video, laboratory reports, 
              and a transparent return policy for every stone we sell.
            </p>
            <ul className="space-y-4 text-sm text-gray-800 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span> 
                Certified Natural (GIA/GRS Available)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span> 
                14-Day Inspection Period
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span> 
                Free Insured Global Shipping
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <GoogleReviews />
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-black text-white py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-serif font-bold tracking-widest mb-2">GEMS WITH HAS</h2>
            <p className="text-xs text-gray-500">Colombo, Sri Lanka • Worldwide Shipping</p>
          </div>
          
          <div className="flex gap-8 text-xs font-bold tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition">INSTAGRAM</a>
            <a href="#" className="hover:text-white transition">WHATSAPP</a>
            <a href="#" className="hover:text-white transition">EMAIL</a>
          </div>
        </div>
        <div className="text-center mt-10 text-[10px] text-gray-600">
          © 2025 Gems with Has. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

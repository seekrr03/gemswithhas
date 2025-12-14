// src/app/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import GoogleReviews from "../components/GoogleReviews";

// --- Mock Data for Categories (Top Row) ---
const categories = [
  { name: "Sapphire", count: 120, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc5e?auto=format&fit=crop&w=150&q=80" },
  { name: "Ruby", count: 45, image: "https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?auto=format&fit=crop&w=150&q=80" },
  { name: "Emerald", count: 32, image: "https://images.unsplash.com/photo-1599643476740-4c489154f2a4?auto=format&fit=crop&w=150&q=80" },
  { name: "Spinel", count: 18, image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=150&q=80" },
  { name: "Tourmaline", count: 64, image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=150&q=80" },
  { name: "Garnet", count: 27, image: "https://images.unsplash.com/photo-1608537593258-00c73229b11e?auto=format&fit=crop&w=150&q=80" },
];

// --- Mock Data for Products (The "New Gems" Grid) ---
const products = [
  {
    id: 1,
    title: "Cornflower Blue Sapphire",
    carats: "3.50 carats",
    cut: "Cushion cut",
    origin: "Sri Lanka",
    price: 2255,
    pricePerCt: 644,
    shipping: "Free worldwide shipping",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
    status: "Available"
  },
  {
    id: 2,
    title: "Vivid Red Ruby (Unheated)",
    carats: "1.82 carats",
    cut: "Oval cut",
    origin: "Mozambique",
    price: 5400,
    pricePerCt: 2967,
    shipping: "Free worldwide shipping",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
    status: "Available"
  },
  {
    id: 3,
    title: "Neon Blue Paraiba Tourmaline",
    carats: "4.02 carats",
    cut: "Pear cut",
    origin: "Nigeria",
    price: 18500,
    pricePerCt: 4600,
    shipping: "Free worldwide shipping",
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=600&q=80",
    status: "Sold" // Example of a sold item
  },
  {
    id: 4,
    title: "Royal Blue Sapphire",
    carats: "5.10 carats",
    cut: "Octagon cut",
    origin: "Madagascar",
    price: 12500,
    pricePerCt: 2450,
    shipping: "Free worldwide shipping",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
    status: "Available"
  },
  {
    id: 5,
    title: "Teal Green Sapphire",
    carats: "2.45 carats",
    cut: "Round cut",
    origin: "Sri Lanka",
    price: 1800,
    pricePerCt: 734,
    shipping: "Free worldwide shipping",
    image: "https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?auto=format&fit=crop&w=600&q=80",
    status: "Available"
  },
  {
    id: 6,
    title: "Pink Spinel",
    carats: "3.15 carats",
    cut: "Cushion cut",
    origin: "Tanzania",
    price: 4200,
    pricePerCt: 1333,
    shipping: "Free worldwide shipping",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80",
    status: "Available"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans text-sm">
      
      {/* 1. TOP HEADER (Utility Bar) */}
      <header className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center font-bold rounded-sm">G</div>
            <span className="text-xl font-bold tracking-tight text-gray-900">GEMS WITH HAS</span>
          </div>

          {/* Search Bar (Hidden on mobile) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <input 
              type="text" 
              placeholder="Search for Emerald, Sapphire, etc..." 
              className="w-full border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-900 text-white px-6 py-2 rounded-r font-medium hover:bg-blue-800">
              Search
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6 font-medium text-gray-600">
            <span className="cursor-pointer hover:text-blue-900">Sign in</span>
            <span className="cursor-pointer hover:text-blue-900 flex items-center gap-1">
              Cart (0)
            </span>
            <span className="border border-gray-300 px-2 py-1 rounded text-xs">USD $</span>
          </div>
        </div>
      </header>

      {/* 2. CATEGORY NAVIGATION (Visual) */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {categories.map((cat) => (
              <div key={cat.name} className="group cursor-pointer">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden border-2 border-white shadow-sm group-hover:border-blue-500 transition mb-3">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-900">{cat.name}</h3>
                <p className="text-xs text-gray-500">{cat.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FILTER BAR (Shapes & Price) */}
      <section className="py-4 border-b border-gray-200 sticky top-0 bg-white z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-600">
            <span className="px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100 hover:text-blue-800">Cushion</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100 hover:text-blue-800">Pear</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100 hover:text-blue-800">Heart</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100 hover:text-blue-800">Octagon</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100 hover:text-blue-800">Oval</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-100 hover:text-blue-800">Radiant</span>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-600">
            <span className="px-3 py-1 border border-gray-200 rounded cursor-pointer hover:border-blue-500">&lt; $1,000</span>
            <span className="px-3 py-1 border border-gray-200 rounded cursor-pointer hover:border-blue-500">$1k - $2k</span>
            <span className="px-3 py-1 border border-gray-200 rounded cursor-pointer hover:border-blue-500">$2k - $5k</span>
            <span className="px-3 py-1 border border-gray-200 rounded cursor-pointer hover:border-blue-500">$5k+</span>
          </div>
        </div>
      </section>

      {/* 4. MAIN PRODUCT GRID (New Gems) */}
      <main className="max-w-[1400px] mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">New Gems</h2>
          <span className="text-blue-800 cursor-pointer font-medium hover:underline">View All &rarr;</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg p-3 hover:shadow-lg transition bg-white relative">
              
              {/* Sold Badge */}
              {product.status === "Sold" && (
                <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase z-10">
                  Sold
                </div>
              )}

              {/* Image */}
              <div className="h-56 overflow-hidden rounded mb-3 bg-gray-100 relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className={`w-full h-full object-cover hover:scale-105 transition duration-500 ${product.status === 'Sold' ? 'opacity-70 grayscale' : ''}`}
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 leading-snug min-h-[40px]">
                  {product.title} <span className="text-gray-500 font-normal">in {product.cut}</span>
                </h3>
                
                {/* Specs */}
                <div className="text-xs text-gray-600 space-y-1">
                   <div className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                     <span>Weight:</span>
                     <span className="font-medium text-gray-900">{product.carats}</span>
                   </div>
                   <div className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                     <span>Origin:</span>
                     <span className="font-medium text-gray-900">{product.origin}</span>
                   </div>
                </div>

                {/* Price */}
                <div className="pt-2">
                   {product.status === "Sold" ? (
                     <p className="text-red-600 font-bold text-lg">Item is sold</p>
                   ) : (
                     <div>
                       <div className="flex items-end gap-2">
                         <span className="text-xl font-bold text-blue-900">${product.price.toLocaleString()}</span>
                         <span className="text-xs text-gray-400 mb-1">${product.pricePerCt}/ct</span>
                       </div>
                       <p className="text-[10px] text-green-600 font-medium mt-1 flex items-center gap-1">
                         ✓ {product.shipping}
                       </p>
                     </div>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 5. TRUST & REVIEWS SECTION */}
      <section className="bg-gray-100 py-16 mt-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
           <div className="flex-1">
             <h3 className="text-2xl font-bold mb-4">Why Buy From Gems with Has?</h3>
             <ul className="space-y-3 text-gray-700">
               <li className="flex gap-3">
                 <span className="text-blue-600">✓</span> 
                 Direct from Sri Lankan Mines (Ratnapura)
               </li>
               <li className="flex gap-3">
                 <span className="text-blue-600">✓</span> 
                 Unheated & Natural Stone Certification
               </li>
               <li className="flex gap-3">
                 <span className="text-blue-600">✓</span> 
                 14-Day Return Policy
               </li>
             </ul>
           </div>
           
           {/* Re-using your Google Review Component */}
           <div className="flex-1 flex justify-center">
             <GoogleReviews />
           </div>
        </div>
      </section>

      {/* 6. MEGA FOOTER (SEO Style) */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-xs border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Gemstones</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Alexandrite</li>
              <li className="hover:text-white cursor-pointer">Amethyst</li>
              <li className="hover:text-white cursor-pointer">Aquamarine</li>
              <li className="hover:text-white cursor-pointer">Emerald</li>
              <li className="hover:text-white cursor-pointer">Garnet</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Sapphires</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Blue Sapphire</li>
              <li className="hover:text-white cursor-pointer">Cornflower Blue</li>
              <li className="hover:text-white cursor-pointer">Royal Blue</li>
              <li className="hover:text-white cursor-pointer">Padparadscha</li>
              <li className="hover:text-white cursor-pointer">Teal Sapphire</li>
            </ul>
          </div>

           {/* Column 3 */}
           <div>
            <h4 className="text-white font-bold mb-4 uppercase">Spinel</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Cobalt Blue</li>
              <li className="hover:text-white cursor-pointer">Vivid Red</li>
              <li className="hover:text-white cursor-pointer">Mahenge</li>
              <li className="hover:text-white cursor-pointer">Lavender</li>
              <li className="hover:text-white cursor-pointer">Grey Spinel</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Company</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Wholesale Terms</li>
              <li className="hover:text-white cursor-pointer">Gem Certification</li>
              <li className="hover:text-white cursor-pointer">Ethical Sourcing</li>
            </ul>
          </div>

          {/* Column 5 & 6 (Wide) */}
          <div className="col-span-2">
            <h4 className="text-white font-bold mb-4 uppercase">GEMS WITH HAS</h4>
            <p className="mb-4 leading-relaxed">
              We specialize in rare, investment-grade gemstones. Our team sources rough stones directly from mines in Sri Lanka, Tanzania, and Madagascar to cut out the middlemen.
            </p>
            <p>
              Colombo, Sri Lanka<br />
              +94 77 123 4567<br />
              hello@gemswithhas.com
            </p>
          </div>

        </div>
        <div className="max-w-[1400px] mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center">
          &copy; 2025 Gems with Has. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
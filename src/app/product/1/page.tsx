// src/app/product/1/page.tsx
"use client";

import { gems } from "../../../data/gems"; 
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const gem = gems.find((g) => g.id.toString() === unwrappedParams.id);

  if (!gem) return notFound();

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans pb-20">
      
      {/* 1. TOP NAVIGATION (Breadcrumbs style) */}
      <nav className="border-b border-gray-200 px-6 py-4 flex items-center gap-2 text-xs md:text-sm uppercase tracking-wide text-gray-500">
        <Link href="/" className="hover:text-black">gemswithhas.com</Link> 
        <span>/</span>
        <Link href="/" className="hover:text-black">Gemstones</Link>
        <span>/</span>
        <span className="text-black font-bold truncate">{gem.title}</span>
      </nav>

      <main className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid md:grid-cols-12 gap-10">
          
          {/* LEFT: GALLERY (Takes up 7 columns) */}
          <div className="md:col-span-7">
            <div className="bg-gray-50 rounded-sm overflow-hidden border border-gray-100 mb-4 sticky top-4">
              <img 
                src={gem.image} 
                alt={gem.title} 
                className="w-full h-auto object-cover hover:scale-105 transition duration-700 cursor-zoom-in"
              />
            </div>
            
            {/* Certificate Preview (Mock Images) */}
            <div className="mt-8">
              <h3 className="text-xl font-serif text-gray-900 mb-4 border-b pb-2">Certificate</h3>
              <div className="flex gap-4">
                <div className="w-32 h-40 bg-gray-100 border border-gray-300 flex items-center justify-center text-xs text-gray-400">
                    CERTIFICATE PREVIEW
                </div>
                <div className="w-32 h-40 bg-gray-100 border border-gray-300 flex items-center justify-center text-xs text-gray-400">
                   {gem.certificate} REPORT
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILS (Takes up 5 columns) */}
          <div className="md:col-span-5">
            
            {/* Title & SKU */}
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h1 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight mb-2">
                {gem.title}
              </h1>
              <p className="text-sm text-gray-400 font-medium">ID {gem.sku}</p>
            </div>

            {/* Price Area */}
            <div className="mb-8">
              {gem.status === "Sold" ? (
                 <div className="text-3xl font-bold text-red-600">SOLD OUT</div>
              ) : (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">${gem.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">USD</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium mt-1 flex items-center gap-1">
                     <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                     Available • Worldwide Shipping
                  </div>
                </>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="space-y-3 mb-8">
              {/* WhatsApp Button (Green like Gemstock) */}
              <button className="w-full bg-[#25d366] hover:bg-[#20b85c] text-white py-4 px-6 rounded font-bold text-lg flex items-center justify-center gap-2 transition shadow-sm">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Chat on WhatsApp
              </button>

              <button className="w-full bg-black text-white py-4 px-6 rounded font-bold text-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm text-blue-800 font-medium mb-10">
              <a href="#" className="hover:underline">Fast free shipping</a>
              <a href="#" className="hover:underline">14 day return policy</a>
            </div>

            {/* GEMSTONE DETAILS TABLE */}
            <div className="bg-gray-50 border border-gray-200 rounded p-6">
              <h2 className="font-serif text-xl mb-6 text-gray-900">Gemstone details</h2>
              
              <dl className="space-y-4 text-sm">
                <div className="grid grid-cols-2 border-b border-gray-200 pb-2">
                  <dt className="text-gray-500">Weight</dt>
                  <dd className="font-bold text-gray-900">{gem.carats} ct</dd>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 pb-2">
                  <dt className="text-gray-500">Shape</dt>
                  <dd className="font-bold text-gray-900">{gem.shape}</dd>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 pb-2">
                  <dt className="text-gray-500">Origin</dt>
                  <dd className="font-bold text-gray-900">{gem.origin}</dd>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 pb-2">
                  <dt className="text-gray-500">Dimensions</dt>
                  <dd className="font-bold text-gray-900">{gem.dimensions}</dd>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 pb-2">
                  <dt className="text-gray-500">Treatment</dt>
                  <dd className="font-bold text-gray-900">{gem.treatment}</dd>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 pb-2">
                  <dt className="text-gray-500">Clarity</dt>
                  <dd className="font-bold text-gray-900">{gem.clarity}</dd>
                </div>
                <div className="grid grid-cols-2">
                  <dt className="text-gray-500">Certificate</dt>
                  <dd className="font-bold text-blue-700 underline cursor-pointer">{gem.certificate}</dd>
                </div>
              </dl>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

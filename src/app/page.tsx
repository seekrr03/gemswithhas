// src/app/page.tsx
import Image from "next/image";
import GoogleReviews from "../components/GoogleReviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. Navbar (Simple Luxury Style) */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100 sticky top-0 bg-white/95 z-50">
        <div className="text-2xl font-serif font-bold tracking-widest text-black">
          GEMS WITH HAS
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-600">
          <li className="hover:text-black cursor-pointer">HOME</li>
          <li className="hover:text-black cursor-pointer">RINGS</li>
          <li className="hover:text-black cursor-pointer">PENDANTS</li>
          <li className="hover:text-black cursor-pointer">CUSTOM</li>
        </ul>
        <div className="flex gap-4 text-sm">
          <button className="hover:text-blue-600">Search</button>
          <button className="hover:text-blue-600">Cart (0)</button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-50 text-center px-4">
        {/* Background Hint (You can replace bg-gray-50 with an actual Image component later) */}
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-gray-500 mb-4 uppercase">
            Handcrafted in Sri Lanka
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
            Timeless Elegance <br /> for Every Occasion
          </h1>
          <button className="bg-black text-white px-8 py-3 text-sm tracking-widest hover:bg-gray-800 transition">
            SHOP COLLECTION
          </button>
        </div>
      </section>

      {/* 3. Featured Products Grid (Similar to TashLK) */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">New Arrivals</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product Card 1 */}
          <ProductCard 
            title="Blue Sapphire Halo Ring" 
            price="Rs 125,000" 
            category="Rings"
            color="bg-blue-50" // Placeholder color
          />
          {/* Product Card 2 */}
          <ProductCard 
            title="Amethyst Silver Pendant" 
            price="Rs 18,500" 
            category="Pendants"
            color="bg-purple-50"
          />
          {/* Product Card 3 */}
          <ProductCard 
            title="Ruby Gold Studs" 
            price="Rs 45,000" 
            category="Earrings"
            color="bg-red-50"
          />
          {/* Product Card 4 */}
          <ProductCard 
            title="Custom Engagement Band" 
            price="Rs 85,000" 
            category="Wedding"
            color="bg-gray-100"
          />
        </div>
      </section>

      {/* 4. Split Section: Story & Reviews */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl font-serif mb-6">Why Choose Gems with Has?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in custom-made jewelry using authentic gemstones sourced directly from Sri Lankan mines. 
              Share your design ideas with us, and our experts will bring them to life with fine craftsmanship.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-gray-700">
              <li>✓ Certified Authentic Gemstones</li>
              <li>✓ Custom Design Services</li>
              <li>✓ Island-wide Delivery</li>
            </ul>
          </div>

          {/* Right: The Random Google Review Widget */}
          <div className="flex justify-center">
            <GoogleReviews />
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-black text-white py-12 px-8 text-center text-sm">
        <p className="mb-4 text-gray-400">© 2025 Gems with Has. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 text-gray-500">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>WhatsApp</span>
        </div>
      </footer>
    </div>
  );
}

// Simple internal component for Product Cards to keep code clean
function ProductCard({ title, price, category, color }: { title: string, price: string, category: string, color: string }) {
  return (
    <div className="group cursor-pointer">
      <div className={`h-64 ${color} mb-4 relative overflow-hidden`}>
        {/* Placeholder for Product Image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs tracking-widest">
          IMAGE PLACEHOLDER
        </div>
      </div>
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{category}</p>
      <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-800 transition">{title}</h3>
      <p className="text-gray-700 mt-1 font-semibold">{price}</p>
    </div>
  );
}
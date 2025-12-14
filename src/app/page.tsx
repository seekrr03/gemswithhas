// src/app/page.tsx
import GoogleReviews from "../components/GoogleReviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100 sticky top-0 bg-white/95 z-50 backdrop-blur-sm">
        <div className="text-2xl font-serif font-bold tracking-widest text-black">
          GEMS WITH HAS
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-600">
          <li className="hover:text-black cursor-pointer transition">HOME</li>
          <li className="hover:text-black cursor-pointer transition">RINGS</li>
          <li className="hover:text-black cursor-pointer transition">PENDANTS</li>
          <li className="hover:text-black cursor-pointer transition">CUSTOM</li>
        </ul>
        <div className="flex gap-4 text-sm">
          <button className="hover:text-blue-600 transition">Search</button>
          <button className="hover:text-blue-600 transition">Cart (0)</button>
        </div>
      </nav>

      {/* 2. Hero Section with Background Image */}
      <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image - UPDATED HERE */}
        <img 
          src="/hero-bg.jpeg" 
          alt="Luxury Gems Background"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        />
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-3xl text-white">
          <p className="text-sm tracking-[0.3em] mb-4 uppercase text-gray-200">
            Authentic Sri Lankan Gemstones
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
            Discover the Soul <br /> of the Earth
          </h1>
          <button className="bg-white text-black px-10 py-4 text-sm tracking-widest hover:bg-gray-200 transition font-bold">
            VIEW COLLECTION
          </button>
        </div>
      </section>

      {/* 3. Featured Products Grid */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-16">New Arrivals</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* Blue Sapphire Ring */}
          <ProductCard 
            title="Royal Blue Sapphire Ring" 
            price="Rs 125,000" 
            category="Rings"
            image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80"
          />
          {/* Amethyst Pendant */}
          <ProductCard 
            title="Amethyst Silver Pendant" 
            price="Rs 18,500" 
            category="Pendants"
            image="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=500&q=80"
          />
          {/* Ruby Earrings */}
          <ProductCard 
            title="Classic Ruby Studs" 
            price="Rs 45,000" 
            category="Earrings"
            image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80"
          />
          {/* Wedding Band */}
          <ProductCard 
            title="Eternity Gold Band" 
            price="Rs 85,000" 
            category="Wedding"
            image="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=500&q=80"
          />
        </div>
      </section>

      {/* 4. Split Section: Story & Reviews */}
      <section className="bg-gray-50 py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-4xl font-serif mb-6 text-gray-900">Crafted with Passion</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              "Gems with Has" isn't just a store; it's a journey from the mines of Sri Lanka to your jewelry box. 
              We handpick every sapphire, ruby, and emerald to ensure you get the brilliant sparkle you deserve.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">💎</span>
                    <span className="text-sm font-semibold text-gray-700">Certified Gems</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🔨</span>
                    <span className="text-sm font-semibold text-gray-700">Handcrafted</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-2xl">🚚</span>
                    <span className="text-sm font-semibold text-gray-700">Island-wide Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    <span className="text-sm font-semibold text-gray-700">Lifetime Polish</span>
                </div>
            </div>
          </div>

          {/* Right: The Random Google Review Widget */}
          <div className="flex justify-center relative">
            {/* Decorative circle behind review */}
            <div className="absolute top-0 right-10 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
            <GoogleReviews />
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-black text-white py-16 px-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl font-serif font-bold tracking-widest mb-6">GEMS WITH HAS</h2>
          <div className="flex gap-8 text-sm text-gray-400 mb-8">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">WhatsApp</a>
          </div>
          <p className="text-xs text-gray-600">© 2025 Gems with Has. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Updated Product Card to accept an Image URL
function ProductCard({ title, price, category, image }: { title: string, price: string, category: string, image: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="h-80 w-full mb-4 relative overflow-hidden bg-gray-100 rounded-sm">
        {/* Product Image */}
        <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Quick Add Button (Appears on Hover) */}
        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-medium text-sm">
            ADD TO CART
        </button>
      </div>
      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{category}</p>
      <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-800 transition">{title}</h3>
      <p className="text-gray-700 mt-1 font-semibold">{price}</p>
    </div>
  );
}
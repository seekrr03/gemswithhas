// src/components/GoogleReviews.tsx
"use client"; // This tells Next.js this component uses interactivity

import { useState, useEffect } from "react";

// Mock Data: Replace these with real reviews later
const reviews = [
  { id: 1, name: "Sarah J.", rating: 5, text: "Absolutely stunning gems! The sapphire ring I bought is perfection.", date: "2 days ago" },
  { id: 2, name: "Malik A.", rating: 5, text: "Great service and fast delivery in Colombo. Will buy again.", date: "1 week ago" },
  { id: 3, name: "Priya D.", rating: 4, text: "Beautiful collection, exactly like the photos on the website.", date: "3 weeks ago" },
  { id: 4, name: "John Doe", rating: 5, text: "The custom design process was so easy. Gems with Has is the best!", date: "1 month ago" },
];

export default function GoogleReviews() {
  const [randomReview, setRandomReview] = useState(reviews[0]);

  // Pick a random review on first load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setRandomReview(reviews[randomIndex]);
  }, []);

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-100 max-w-sm mx-auto mt-10">
      <div className="flex items-center gap-2 mb-4">
        {/* Google G Logo Icon */}
        <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center p-1">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
            alt="Google" 
            className="w-full h-full"
          />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-sm">Google Reviews</h3>
          <div className="flex text-yellow-400 text-xs">
            {"★".repeat(5)} <span className="text-gray-400 ml-1">(4.9)</span>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
            {randomReview.name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-sm text-gray-900">{randomReview.name}</p>
            <p className="text-xs text-gray-500">{randomReview.date}</p>
          </div>
        </div>
        <div className="text-yellow-400 text-sm mb-2">
            {"★".repeat(randomReview.rating)}
            {"☆".repeat(5 - randomReview.rating)}
        </div>
        <p className="text-gray-600 text-sm italic">"{randomReview.text}"</p>
      </div>
    </div>
  );
}
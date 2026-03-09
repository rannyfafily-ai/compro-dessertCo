"use client"

import { HiStar } from "react-icons/hi"

export default function Testimonials() {
  const reviews = [
    { name: "Sarah", text: "The best pudding dessert I've ever tasted!", rating: 5 },
    { name: "Michael", text: "Amazing texture and flavor. Highly recommended.", rating: 4 },
    { name: "Jessica", text: "Perfect dessert gift for friends and family.", rating: 5 },
    { name: "David", text: "Delicious and beautifully presented.", rating: 4 },
    { name: "Emma", text: "I love the variety and quality of desserts.", rating: 5 },
  ]

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center"
            >
              {/* Rating stars */}
              <div className="flex mb-3">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <HiStar key={idx} className="text-yellow-400 mr-1" size={20} />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 mb-4">"{r.text}"</p>

              {/* Customer name */}
              <p className="font-semibold">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
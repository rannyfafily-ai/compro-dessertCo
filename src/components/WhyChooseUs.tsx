"use client"

import { HiOutlineCheckCircle, HiOutlineLightBulb, HiOutlineHeart } from "react-icons/hi"

export default function WhyChooseUs() {
  const features = [
    { title: "Premium Ingredients", desc: "Only the best ingredients are used.", icon: <HiOutlineCheckCircle size={28} className="text-pink-500 mb-2" /> },
    { title: "Unique Recipes", desc: "Innovative dessert creations.", icon: <HiOutlineLightBulb size={28} className="text-pink-500 mb-2" /> },
    { title: "Loved By Customers", desc: "Thousands of happy customers.", icon: <HiOutlineHeart size={28} className="text-pink-500 mb-2" /> },
  ]

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

        {/* Flex container with wrapping */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex-1 min-w-[220px] max-w-xs bg-white rounded-xl shadow p-6 text-center"
            >
              {f.icon}
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
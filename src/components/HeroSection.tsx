"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import Image from "next/image"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function HeroSection() {
  const slides = [
    { image: "/hero/hero1-update.jpg", alt: "Puyo Eid Hampers Promo" },
    { image: "/hero/hero2-update.jpg", alt: "Puyo Fresh Desserts" },
    { image: "/hero/hero3-update.jpg", alt: "Puyo Fresh Desserts" }
  ]

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        autoHeight={true} // Swiper akan menyesuaikan tinggi berdasarkan konten di dalamnya
        className="w-full rounded-2xl md:rounded-3xl shadow-lg overflow-hidden"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* MENGHILANGKAN SPACE:
              1. Pakai tag <img> standar atau Image Next.js tanpa 'fill'.
              2. 'w-full h-auto' memastikan gambar mengikuti lebar container dan tingginya proporsional.
              3. 'display: block' menghilangkan gap kecil di bawah gambar (whitespace bug).
            */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-auto block object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}


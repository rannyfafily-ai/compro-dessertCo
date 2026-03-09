"use client"

import Link from "next/link"
import Backendless from "@/lib/backendless"
import { useEffect, useState } from "react"

export default function Navbar() {

  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const currentUser = Backendless.UserService.getCurrentUser()
    setUser(currentUser)
  }, [])

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Teams", href: "/teams" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <header className="w-full sticky top-0 z-50 bg-purple-600 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white flex items-center gap-2 flex-shrink-0">
          <span className="inline-block w-6 h-6 bg-purple-400 rounded-full" />
          DessertCo
        </h1>

        {/* Navigation */}
        <div className="flex flex-1 ml-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex-1 text-center text-white font-medium py-2 hover:text-purple-200 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Create Blog Link */}
          {user && (
            <Link
              href="/blog/create"
              className="flex-1 text-center text-white font-medium py-2 hover:text-purple-200 transition"
            >
              Create Blog
            </Link>
          )}
        </div>

        {/* Right Buttons */}
        <div className="ml-6 flex-shrink-0 flex gap-3">

          {!user && (
            <Link
              href="/login"
              className="px-5 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-100 transition"
            >
              Login
            </Link>
          )}

        </div>

      </div>
    </header>
  )
}
"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Backendless from "@/lib/backendless"

export default function BlogDetailPage() {
  const { id } = useParams()
  const [blog, setBlog] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // cek dulu kalau id ada
    if (!id) return

    setLoading(true)

    Backendless.Data.of("blogs")
      .findById(id as string) // pakai type assertion supaya TypeScript happy
      .then((data) => setBlog(data))
      .catch((err) => {
        console.error("Failed to fetch blog:", err)
        setBlog(null)
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="p-10">Loading...</p>
  if (!blog) return <p className="p-10 text-red-500">Blog not found</p>

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-6">By {blog.author}</p>
      <div className="text-lg leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  )
}
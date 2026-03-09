"use client"

import { useEffect, useState } from "react"
import Backendless from "@/lib/backendless"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BlogPage() {

  const router = useRouter()
  const [blogs, setBlogs] = useState<any[]>([])

  // Check login when clicking Create Blog
  const handleCreateBlog = () => {

    const user = Backendless.UserService.getCurrentUser()

    if (!user) {
      router.push("/login")
    } else {
      router.push("/blog/create")
    }

  }

  // Fetch blog list
  useEffect(() => {

    Backendless.Data.of("blogs")
      .find()
      .then((data) => setBlogs(data))

  }, [])

  return (
    <div className="max-w-6xl mx-auto p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Blog
        </h1>

        {/* Create Blog Button */}
        <button
          onClick={handleCreateBlog}
          className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
        >
          Create Blog
        </button>

      </div>

      {/* Blog List */}
      <div className="grid md:grid-cols-3 gap-6">

        {blogs.map((blog) => (

          <Link key={blog.objectId} href={`/blog/${blog.objectId}`}>

            <div className="border rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer">

              <h2 className="text-xl font-semibold mb-2">
                {blog.title}
              </h2>

              <p className="text-gray-600 line-clamp-3 mb-4">
                {blog.content}
              </p>

              <p className="text-sm text-gray-500">
                By {blog.author}
              </p>

              <span className="text-purple-600 font-semibold">
                Read More →
              </span>

            </div>

          </Link>

        ))}

      </div>

    </div>
  )
}
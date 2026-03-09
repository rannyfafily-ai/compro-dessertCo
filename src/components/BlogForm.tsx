"use client"

import { useState } from "react"
import { createBlog } from "@/lib/blog"
import { useRouter } from "next/navigation"

export default function BlogForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const [loading, setLoading] = useState(false) 
  const router = useRouter()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    
    if (!title || !content) return alert("Please fill all fields")

    setLoading(true)
    try {
      await createBlog({
        title,
        content,
        author: "Admin"
      })

      alert("Blog created!")
      
    
      setTitle("")
      setContent("")
      
     
      router.push("/blog") 
      router.refresh() 
    } catch (error) {
      console.error("Error creating blog:", error)
      alert("Failed to create blog. Check console for details.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4 max-w-xl">
      <input
        className="border p-3 w-full rounded-lg"
        placeholder="Title"
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
      />
      <input
        className="border p-3 w-full rounded-lg"
        placeholder="Author"
        value={title} 
        onChange={(e) => setAuthor(e.target.value)}
        disabled={loading}
      />

      <textarea
        className="border p-3 w-full rounded-lg"
        placeholder="Content"
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={loading}
      />

      <button 
        type="submit"
        disabled={loading}
        className={`text-white px-6 py-3 rounded-lg font-semibold transition-all ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-600 shadow-md"
        }`}
      >
        {loading ? "Publishing..." : "Publish Blog"}
      </button>
    </form>
  )
}



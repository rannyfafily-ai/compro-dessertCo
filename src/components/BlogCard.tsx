import Link from "next/link"

export default function BlogCard({ blog }: any) {


  
  return (

    <Link href={`/blog/${blog.objectId}`}>
  <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">

    <h2 className="text-xl font-semibold mb-2">
      {blog.title}
    </h2>

    <p className="text-gray-600 line-clamp-3">
      {blog.content}
    </p>

    <p className="text-sm text-gray-400 mt-4">
      {blog.author}
    </p>

  </div>
</Link>


  )
}
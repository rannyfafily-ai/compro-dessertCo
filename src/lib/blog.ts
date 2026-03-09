import Backendless from "./backendless"

const Blog = Backendless.Data.of("Blogs")

export async function getBlogs() {
  return await Blog.find()
}

export async function getBlogById(id: string) {
  return await Blog.findById(id)
}

export async function createBlog(data: {
  title: string
  content: string
  author?: string
}) {
  return await Blog.save(data)
}
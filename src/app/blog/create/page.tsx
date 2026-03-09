"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser } from "@/lib/users"
import { createBlog } from "@/lib/blog"

export default function CreateBlogPage() {

const router = useRouter()

const [title, setTitle] = useState("")
const [content, setContent] = useState("")
const [loading, setLoading] = useState(true)
const [submitting, setSubmitting] = useState(false)

useEffect(() => {

async function checkUser() {

const user = await getCurrentUser()

if (!user) {
router.push("/login")
} else {
setLoading(false)
}

}

checkUser()

}, [router])


const handleSubmit = async (e: React.FormEvent) => {

e.preventDefault()

if (!title || !content) {
alert("Please fill all fields")
return
}

try {

setSubmitting(true)

await createBlog({
title,
content
})

router.push("/blog")

} catch (error) {

console.error(error)
alert("Failed to create blog")

} finally {

setSubmitting(false)

}

}


if (loading) {
return (
<div className="flex justify-center items-center min-h-screen">
Checking authentication...
</div>
)
}


return (

<div className="max-w-3xl mx-auto p-10">

<h1 className="text-3xl font-bold mb-6">
Create Blog
</h1>

<form
onSubmit={handleSubmit}
className="space-y-4"
>

<input
type="text"
placeholder="Blog Title"
className="w-full border p-3 rounded"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<textarea
placeholder="Blog Content"
className="w-full border p-3 rounded h-40"
value={content}
onChange={(e)=>setContent(e.target.value)}
/>

<button
type="submit"
disabled={submitting}
className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 disabled:opacity-50"
>
{submitting ? "Publishing..." : "Publish Blog"}
</button>

</form>

</div>

)
}
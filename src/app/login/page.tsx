"use client"

import { useState } from "react"
import { loginUser } from "@/lib/users"
import { useRouter } from "next/navigation"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {

    e.preventDefault()

    setError("")

    if (!email || !password) {
      setError("Please enter email and password")
      return
    }

    try {

      setLoading(true)

      await loginUser(email.trim(), password)

      router.push("/blog/create")

    } catch (err: any) {

      setError(err.message || "Login failed")

    } finally {

      setLoading(false)

    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-lg rounded-lg space-y-4 w-80"
      >

        <h1 className="text-2xl font-bold text-center">
          Login
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-3 rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>
  )
}
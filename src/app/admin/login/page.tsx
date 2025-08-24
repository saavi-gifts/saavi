"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Container } from "@/components/Container"

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if already logged in
    const isLoggedIn = localStorage.getItem('admin_logged_in')
    if (isLoggedIn === 'true') {
      router.push("/admin/gifts")
    }
  }, [router])

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simple static authentication
      if (credentials.username === "admin" && credentials.password === "Admin@123") {
        localStorage.setItem('admin_logged_in', 'true')
        localStorage.setItem('admin_user', JSON.stringify({
          id: "1",
          name: "Admin",
          email: "admin@saavi.com",
        }))
        router.push("/admin/gifts")
      } else {
        setError("Invalid username or password")
      }
    } catch (error) {
      console.error("Sign in error:", error)
      setError("Sign-in failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Admin Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Access the gift management system
            </p>
          </div>
          
          <form onSubmit={handleCredentialsSignIn} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  required
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Enter username"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-saavi-gold focus:border-saavi-gold dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Enter password"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-saavi-gold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saavi-gold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Default credentials:</p>
            <p><strong>Username:</strong> admin</p>
            <p><strong>Password:</strong> Admin@123</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
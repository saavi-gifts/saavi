"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Container } from "@/components/Container"

export default function AdminGifts() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-lg">Loading...</div>
        </div>
      </Container>
    )
  }

  if (!session) {
    return null
  }

  return (
    <Container>
      <div className="min-h-screen py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-playfair">
              Gift Items Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Welcome, {session.user?.name}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
        
        <div className="text-center text-gray-500">
          <p>Admin functionality will be available in the full version.</p>
          <p className="mt-2">This is a static preview for GitHub Pages.</p>
        </div>
      </div>
    </Container>
  )
}
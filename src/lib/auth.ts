import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

const authType = process.env.AUTH_TYPE || "credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    ...(authType === "google" ? [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      }),
    ] : []),
    ...(authType === "credentials" ? [
      CredentialsProvider({
        name: "Admin Login",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          if (
            credentials?.username === process.env.ADMIN_USERNAME &&
            credentials?.password === process.env.ADMIN_PASSWORD
          ) {
            return {
              id: "1",
              name: "Admin",
              email: "admin@saavi.com",
            }
          }
          return null
        },
      }),
    ] : []),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, user }) {
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export { authType }
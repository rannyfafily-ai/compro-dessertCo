import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { AuthProvider } from "@/context/AuthContext"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen w-full m-0 p-0">
        <AuthProvider>

          
          <Navbar />

          
          <main className="w-full min-h-screen">
            {children}
          </main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
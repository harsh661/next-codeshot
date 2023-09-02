import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "../components/ui/toaster"
import { PreferenceContextProvider } from "./contexts/PreferenceContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodeShot - Code Screenshot Editor with Instant Sharing",
  description: "CodeShot is the ultimate code screenshot editor that lets you capture, edit, and instantly share your code as stunning screenshots. Effortlessly annotate, highlight, and customize your code, then share it via a link or download. Enhance your code sharing with CodeShot today!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PreferenceContextProvider>
          {children}
          <Toaster />
        </PreferenceContextProvider>
      </body>
    </html>
  )
}

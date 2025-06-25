import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CleverCat - Turn Your Videos Into Revenue Engines",
  description: "CleverCat helps you monetize your videos with no code, no friction, and all performance.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      {/* <script src="http://34.194.154.4:5000/static/widget/widget.js" data-user-id="aad4c151-a54c-44d0-959c-5b04d9a18f52" data-request-id="cmbt2ljft000bpdldi0jaq398" defer></script> */}
    </html>
  )
}

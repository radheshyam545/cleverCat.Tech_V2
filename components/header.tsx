"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Scan Competitor Site", href: "/website-audit" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              // src="/logo/main_logo.png"
              src="/logo/clevercat_logo_withname.webp"
              alt="Jugnoo Logo"
              width={200}
              height={200}
              priority
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-purple-400" : "text-white hover:text-purple-300"
                }`}
              >
                {item.name}
              </Link>
            ))} */}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost" className="text-white hover:text-purple-300 hover:bg-purple-500/10">
              <Link href="/website-audit">Scan Competitor Site</Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:text-purple-300 hover:bg-purple-500/10">
              <Link href="/more-info">Get in Touch</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
            >
              <Link href="/book-meeting">Book Meeting</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium py-2 ${isActive(item.href) ? "text-purple-400" : "text-white hover:text-purple-300"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <Button
                  asChild
                  variant="ghost"
                  className="text-white hover:text-purple-300 hover:bg-purple-500/10 justify-center"
                >
                  <Link href="/more-info" onClick={() => setIsMenuOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white justify-center"
                >
                  <Link href="/book-meeting" onClick={() => setIsMenuOpen(false)}>
                    Book Meeting
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

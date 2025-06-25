import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 border-t border-purple-500/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                // src="/logo/main_logo.png"
                src="/logo/clevercat_logo_withname.webp"
                alt="Jugnoo Logo"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Let our AI Chatbot answer, recommend, and convert — all while you focus on growing your business.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
          </div>

          {/* Support */}
          <div>

          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest updates and tips delivered to your inbox.</p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800/50 border-purple-500/30 text-white placeholder:text-gray-500"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 CleverCat. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

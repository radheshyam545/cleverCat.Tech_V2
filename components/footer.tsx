"use client"
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
                priority
                className="rounded-full"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Turn every scroll into a sale with interactive shoppable videos.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                onClick={() => {
                  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_LINK || "https://facebook.com/clevercat";
                  window.open(facebook, "_blank");
                }}
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              {/* <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                onClick={() => {
                  const twitter = process.env.NEXT_PUBLIC_TWITTER_LINK || "https://twitter.com/clevercat";
                  window.open(twitter, "_blank");
                }}
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Button> */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                onClick={() => {
                  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_LINK || "https://instagram.com/clevercat";
                  window.open(instagram, "_blank");
                }}
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              {/* <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                onClick={() => {
                  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_LINK || "https://linkedin.com/company/clevercat";
                  window.open(linkedin, "_blank");
                }}
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button> */}
              {/* <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                onClick={() => {
                  const github = process.env.NEXT_PUBLIC_GITHUB_LINK || "https://github.com/clevercat";
                  window.open(github, "_blank");
                }}
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
          </div>

          {/* Support */}
          <div>

          </div>

          {/* Newsletter */}
          {/* <div>
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
          </div> */}
        </div>

       

        <div className="border-t border-purple-500/30 pt-8 pb-6">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 <span className="text-purple-400 font-semibold">CleverCat</span>. All rights reserved.
            </p>
          </div>

          {/* Divider Line + Center Text */}
          <div className="border-t border-purple-500/20 mt-6 pt-4 text-center px-4">
            <p className="text-xs md:text-sm text-white font-medium">
              This website is owned and operated by{" "}
              <span className="font-bold text-yellow-300">Invictus Alpha LLP</span>.
              <br />
              <span className="font-semibold text-purple-400">clevercat.ai</span> is a property of{" "}
              <span className="font-bold text-yellow-300">Invictus Alpha LLP</span>.
            </p>
          </div>
        </div>




      </div>
    </footer>
  )
}

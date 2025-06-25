"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { submitContactForm } from "@/services/apiService"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    storeName: "",
    websiteUrl: "",
    mobile: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitContactForm(formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
        storeName: "",
        websiteUrl: "",
        mobile: "",
      });
    } catch (error) {
      setIsSubmitting(false);
      console.error("Form submission failed:", error);
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">

      {/* Launch Offer Section */}
      <section className="py-16 px-4 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Side - Offer Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Launch Offer</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">Hurry to get your free installation!</p>

              {/* Illustration */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <Image
                    src="https://i0.wp.com/clevercat.tech/wp-content/uploads/2025/05/purple-illustration-icon-3d-character-with-chat-message-speech-bubble-ui-ux-design.png?resize=768%2C814&ssl=1"
                    alt="Illustration"
                    width={320}
                    height={400}
                    className="w-[500px] h-[500px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div>
              <Card className="bg-slate-800/90 border-slate-700 backdrop-blur-md shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-white text-center">
                    Register Now To Use App For Free
                  </CardTitle>
                  <p className="text-sm text-gray-400 text-center">
                    Fields marked with an <span className="text-red-400">*</span> are required
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white text-sm font-medium">
                      First Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      className="mt-1 bg-slate-700/70 border-slate-600 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-white text-sm font-medium">
                      Last Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      className="mt-1 bg-slate-700/70 border-slate-600 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white text-sm font-medium">
                      Email <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-1 bg-slate-700/70 border-slate-600 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="shopifyStore" className="text-white text-sm font-medium">
                      Shopify Store Name / Website <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="shopifyStore"
                      className="mt-1 bg-slate-700/70 border-slate-600 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-md"
                      placeholder="yourstore.myshopify.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white text-sm font-medium">
                      Phone <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="mt-1 bg-slate-700/70 border-slate-600 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-md"
                      required
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 text-lg font-semibold rounded-full transition-all duration-300">
                    Install Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
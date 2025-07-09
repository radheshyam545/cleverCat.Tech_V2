"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { submitContactForm } from "@/services/apiService"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { useToast } from "@/hooks/useToast"

import { toast } from "sonner" // make sure this is imported

interface FormData {
  first_name: string
  last_name: string
  email: string
  shopify_store: string
  phone: string
}

export default function ContactPage() {

  const { showToast } = useToast()

  const [formState, setFormState] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    shopify_store: "",
    phone: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      // Allow only digits (0–9)
      const numericValue = value.replace(/\D/g, "")
      setFormState((prev) => ({ ...prev, [name]: numericValue }))
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await submitContactForm(formState)


      if (response.success) {
        toast.success("🎉 Submitted Successfully!", {
          description: "Our team will get in touch with you shortly.",
          duration: 5000,
        })

        setIsSubmitted(true)
        setFormState({
          first_name: "",
          last_name: "",
          email: "",
          shopify_store: "",
          phone: "",
        })

        // Open the Shopify App link in a new tab
        setTimeout(() => {
          window.open("https://apps.shopify.com/clevercat-shoppable-videos", "_blank")
        }, 500) // optional delay

      } else {
        toast.error("Submission Failed", {
          description: response?.message || "Please try again later.",
          duration: 5000,
        })
      }


    } catch (error: any) {
      console.error("Form submission failed:", error)
      toast.error("Something went wrong", {
        description: error?.message || "Please check your internet connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="py-16 px-4 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Launch Offer</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Hurry to get your free installation!
              </p>
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

            {/* Right Section - Form */}
            <div>
              <form onSubmit={handleSubmit}>
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
                      <Label htmlFor="first_name" className="text-white text-sm font-medium">
                        First Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="first_name"
                        name="first_name"
                        value={formState.first_name}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-slate-700/70 border-slate-600 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="last_name" className="text-white text-sm font-medium">
                        Last Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="last_name"
                        name="last_name"
                        value={formState.last_name}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-slate-700/70 border-slate-600 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white text-sm font-medium">
                        Email <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-slate-700/70 border-slate-600 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="shopify_store" className="text-white text-sm font-medium">
                        Shopify Store Name / Website <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="shopify_store"
                        name="shopify_store"
                        value={formState.shopify_store}
                        onChange={handleChange}
                        required
                        placeholder="yourstore.myshopify.com"
                        className="mt-1 bg-slate-700/70 border-slate-600 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white text-sm font-medium">
                        Phone <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter 10-digit phone number"
                        className="mt-1 bg-slate-700/70 border-slate-600 text-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 text-lg font-semibold rounded-full transition-all duration-300"
                    >
                      {isSubmitting ? "Submitting..." : "Install Now"}
                    </Button>
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

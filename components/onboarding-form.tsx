"use client"

import type React from "react"
import { forwardRef, useImperativeHandle, useRef } from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle, DollarSign, Users, Zap, Gift } from "lucide-react"
import { submitCashbackLead } from "@/services/apiService"
import { useToast } from "@/hooks/useToast"

const OnboardingForm = forwardRef(function OnboardingForm(props, ref) {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validation: all fields required, phone must be numeric
    if (!formData.name || !formData.email || !formData.phone || !formData.website) {
      showToast("error", "All fields are required.");
      return;
    }
    if (!/^[0-9]+$/.test(formData.phone)) {
      showToast("error", "Phone number must contain only numbers.");
      return;
    }
    setIsSubmitting(true);
    try {
      await submitCashbackLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
      });
      setIsSuccess(true);
      showToast("success", "Registration successful! We will contact you soon.");
    } catch (error: any) {
      showToast("error", error?.message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const resetForm = () => {
    setIsSuccess(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
    })
  }

  if (isSuccess) {
    return (
      <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30">
        <CardContent className="p-6 sm:p-8 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">🎉 Registration Successful!</h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Thank you for registering! We will contact you soon.
          </p>

          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 sm:p-6 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">What's Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">
                  Personalized call to brief on app functionality
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">Free Demo</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">Free premium setup and configuration</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">30-day priority support and Consultancy</span>
              </div>
            </div>
          </div>

          <Button
            onClick={resetForm}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-full"
          >
            Register Another User
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 text-sm">
            Limited Time Offer
          </Badge>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          🚀 What You Get:
        </h2>
      </CardHeader>

      <CardContent className="p-6 sm:p-8">
        {/* Benefits Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-8">
          <div className="flex flex-col items-center">
            <DollarSign className="w-8 h-8 text-green-400 mb-2" />
            <span className="text-green-300 font-semibold text-sm sm:text-base">
              Free Trial + Cashback On Two Months App Fee
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 text-blue-400 mb-2" />
            <span className="text-blue-300 font-semibold text-sm sm:text-base">VIP Onboarding</span>
            <span className="text-gray-400 text-xs sm:text-sm">Dedicated Account Manager</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-8 h-8 text-purple-400 mb-2" />
            <span className="text-purple-300 font-semibold text-sm sm:text-base">
              Free Consultancy and App Optimization
            </span>
            <span className="text-gray-400 text-xs sm:text-sm">30 days included</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Label htmlFor="name" className="text-gray-300 text-sm sm:text-base mb-2 block text-left">
                Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                required
                className="bg-slate-800 border-purple-500/30 text-white text-sm sm:text-base h-12"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-gray-300 text-sm sm:text-base mb-2 block text-left">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your@email.com"
                required
                className="bg-slate-800 border-purple-500/30 text-white text-sm sm:text-base h-12"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-gray-300 text-sm sm:text-base mb-2 block text-left">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value.replace(/[^0-9]/g, "").slice(0, 12))}
                placeholder="Enter your phone number"
                className="bg-slate-800 border-purple-500/30 text-white text-sm sm:text-base h-12"
                inputMode="numeric"
                pattern="[0-9]*"
                required
                maxLength={12}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Label htmlFor="website" className="text-gray-300 text-sm sm:text-base mb-2 block text-left">
                Website URL *
              </Label>
              <Input
                id="website"
                type="text"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                placeholder="https://yourwebsite.com"
                required
                className="bg-slate-800 border-purple-500/30 text-white text-sm sm:text-base h-12"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 text-lg font-semibold rounded-full"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Registering...
              </>
            ) : (
              <>
                Register Now 
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
});
export default OnboardingForm;

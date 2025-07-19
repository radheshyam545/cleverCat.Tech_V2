// Usage Example:
//
// import { useState } from "react";
// import OnboardingModal from "./onboarding-modal";
//
// export default function ParentComponent() {
//   const [modalOpen, setModalOpen] = useState(false);
//   return (
//     <>
//       <button onClick={() => setModalOpen(true)}>
//         Open Onboarding Modal
//       </button>
//       <OnboardingModal open={modalOpen} onOpenChange={setModalOpen} />
//     </>
//   );
// }

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Gift, Star, CheckCircle, DollarSign, Users, Zap } from "lucide-react"
import { submitCashbackLead } from "@/services/apiService"

export default function OnboardingModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    })

    const handleInputChange = (field: string, value: string | boolean | string[]) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            await submitCashbackLead({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
            })
            setIsSuccess(true)
        } catch (error: any) {
            alert(error?.message || "Failed to submit. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetModal = () => {
        setIsSuccess(false)
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        })
    }

    const handleClose = () => {
        onOpenChange(false)
        setTimeout(resetModal, 300) // Reset after modal closes
    }

    if (isSuccess) {
        return (
            <Dialog open={open} onOpenChange={handleClose}>
                <DialogContent className="max-w-[95vw] sm:max-w-2xl w-full bg-slate-900 border-purple-500/30 p-4 sm:p-8 max-h-[90vh] overflow-y-auto">
                    <div className="text-center py-4 sm:py-8 px-2 sm:px-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                        </div>
                        <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">🎉 Registration Successful!</h2>
                        <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                            Thank you for registering! We Will Contact You Soon.
                        </p>

                        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">What's Next?</h3>
                            <div className="space-y-2 sm:space-y-3 text-left">
                                <div className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-gray-300 text-sm sm:text-base">Personalized call to brief on app functionality</span>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-gray-300 text-sm sm:text-base">Free Demo </span>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-gray-300 text-sm sm:text-base">Free premium setup and configuration</span>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5" />
                                    <span className="text-gray-300 text-sm sm:text-base">30-day priority support and Consulantancy</span>
                                </div>
                            </div>
                        </div>

                        <Button
                            onClick={handleClose}
                            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full w-full sm:w-auto text-sm sm:text-base"
                        >
                            Close
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[98vw] sm:max-w-4xl w-full max-h-[95vh] overflow-y-auto bg-slate-900 border-purple-500/30 p-3 sm:p-8">
                <DialogHeader className="pb-4">
                    {/* <DialogTitle className="text-lg sm:text-2xl font-bold text-white text-center leading-tight">
            🚀 Free Trial Plus Cashback On Two Months App Fee
          </DialogTitle> */}
                    <div className="flex justify-center mb-2 sm:mb-4">
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            Limited Time Offer
                        </Badge>
                    </div>
                </DialogHeader>

                {/* Benefits Banner */}
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3 text-center">What You Get:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                        <div className="flex flex-col items-center">
                            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mb-2" />
                            <span className="text-green-300 font-semibold text-sm sm:text-base">Free Trial + Cashback On Two Months App Fee</span>
                            {/* <span className="text-gray-400 text-xs sm:text-sm">After first month</span> */}
                        </div>
                        <div className="flex flex-col items-center">
                            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-2" />
                            <span className="text-blue-300 font-semibold text-sm sm:text-base">VIP Onboarding</span>
                            <span className="text-gray-400 text-xs sm:text-sm">Dadicated Account Manager</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2" />
                            <span className="text-purple-300 font-semibold text-sm sm:text-base">Free Consulantancy and App Optimization</span>
                            <span className="text-gray-400 text-xs sm:text-sm">30 days included</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-3 sm:space-y-4">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <Label htmlFor="firstName" className="text-gray-300 text-sm sm:text-base mb-1 block">
                                    First Name *
                                </Label>
                                <Input
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                    placeholder="Enter your first name"
                                    required
                                    className="bg-slate-800 border-purple-500/30 text-white text-sm sm:text-base h-10 sm:h-11"
                                />
                            </div>
                            <div>
                                <Label htmlFor="lastName" className="text-gray-300 text-sm sm:text-base mb-1 block">
                                    Last Name *
                                </Label>
                                <Input
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                                    placeholder="Enter your last name"
                                    required
                                    className="bg-slate-800 border-purple-500/30 text-white text-sm sm:text-base h-10 sm:h-11"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <Label htmlFor="email" className="text-gray-300 text-sm sm:text-base mb-1 block">
                                    Email Address *
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    className="bg-slate-800 border-purple-500/30 text-white text-sm sm:text-base h-10 sm:h-11"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone" className="text-gray-300 text-sm sm:text-base mb-1 block">
                                    Phone Number
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    placeholder="+1 (555) 123-4567"
                                    className="bg-slate-800 border-purple-500/30 text-white text-sm sm:text-base h-10 sm:h-11"
                                />
                            </div>
                        </div>
                    </div>





                    {/* Terms and Submit */}
                    <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-purple-500/30">


                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                                    Registering...
                                </>
                            ) : (
                                <>
                                    <span className="hidden sm:inline">Register</span>
                                    <span className="sm:hidden">Register</span>
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Download,
    CheckCircle,
    Star,
    ArrowRight,
    FileText,
    Target,
    TrendingUp,
    Zap,
    Users,
    BarChart3,
    Shield,
} from "lucide-react"
import { submitChecklistLead } from "@/services/apiService"
import { useToast } from "@/hooks/useToast"

const checklistItems = [
    {
        category: "Video Quality & Production",
        items: [
            "High-resolution video (minimum 1080p)",
            "Clear audio without background noise",
            "Good lighting throughout the video",
            "Stable camera work (no shaky footage)",
            "Professional editing and transitions",
            "Consistent branding elements",
            "Optimal video length (30-90 seconds for product videos)",
        ],
    },
    {
        category: "Content Strategy",
        items: [
            "Clear product demonstration",
            "Highlight key features and benefits",
            "Show product in real-world use cases",
            "Address common customer pain points",
            "Include social proof or testimonials",
            "Strong opening hook (first 3 seconds)",
            "Clear value proposition communicated",
        ],
    },
    {
        category: "Technical Optimization",
        items: [
            "Fast loading times (under 3 seconds)",
            "Mobile-responsive video player",
            "Auto-play functionality (where appropriate)",
            "Video thumbnails optimized",
            "Proper video compression for web",
            "Multiple video format support",
            "Closed captions/subtitles available",
        ],
    },
    {
        category: "Call-to-Action & Conversion",
        items: [
            "Clear and prominent CTA button",
            "Strategic CTA placement timing",
            "Compelling CTA copy",
            "Multiple conversion opportunities",
            "Easy checkout process",
            "Trust signals visible (reviews, guarantees)",
            "Urgency or scarcity elements (when appropriate)",
        ],
    },
    {
        category: "Analytics & Testing",
        items: [
            "Video engagement tracking setup",
            "Conversion rate monitoring",
            "A/B testing different video versions",
            "Heat map analysis of video interactions",
            "Regular performance review and optimization",
            "Customer feedback collection",
            "ROI measurement and reporting",
        ],
    },
]

export default function ConversionChecklistPage() {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", shopify_store: "" })
    const [showChecklist, setShowChecklist] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { showToast } = useToast();

    const handleCheckboxChange = (itemId: string, checked: boolean) => {
        setCheckedItems((prev) => ({
            ...prev,
            [itemId]: checked,
        }))
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.phone || !formData.shopify_store) return

        setIsSubmitting(true)
        try {
            const res = await submitChecklistLead(formData)
            if (res.success) {
                showToast("success", "Checklist unlocked! Enjoy your free resource.")
                setShowChecklist(true)
                // Scroll to checklist
                setTimeout(() => {
                    document.getElementById("checklist-section")?.scrollIntoView({ behavior: "smooth" })
                }, 300)
            } else {
                showToast("error", res.message || "Something went wrong. Please try again.")
            }
        } catch (err: any) {
            showToast("error", err?.message || "Failed to submit. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const totalItems = checklistItems.reduce((sum, category) => sum + category.items.length, 0)
    const completedItems = Object.values(checkedItems).filter(Boolean).length

    const handleDownload = () => {
        const content = `
CLEVERCAT VIDEO CONVERSION RATE CHECKLIST

${checklistItems
                .map(
                    (category) => `
${category.category.toUpperCase()}
${category.items.map((item) => `☐ ${item}`).join("\n")}
`,
                )
                .join("\n")}

© 2023 CleverCat - Turn Your Videos Into Revenue Engines
    `

        const blob = new Blob([content], { type: "text/plain" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "clevercat-conversion-checklist.txt"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <section className="text-center mb-20">
                <div className="flex justify-center mb-6">
                    <Badge variant="outline" className="bg-slate-800/50 border-purple-500/30 text-purple-300 px-4 py-2 text-sm">
                        <Star className="w-4 h-4 mr-2" />
                        100% Free Resource
                    </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Boost Your Sales with Our
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Free Conversion Rate Checklist
                    </span>{" "}
                    📈
                </h1>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                    The proven 35-point checklist that helped 1000+ e-commerce stores increase their video conversion rates by up
                    to 80%. Get instant access now!
                </p>

                <Button
                    onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                    Get My Free Checklist
                </Button>
            </section>

            {/* Why This Checklist Works */}
            <section className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why This Checklist{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Works</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Trusted by successful e-commerce stores worldwide to optimize their video marketing strategy
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-slate-800/50 border-purple-500/30 text-center hover:bg-slate-800/70 transition-all">
                        <CardContent className="p-6">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BarChart3 className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Data-Driven Results</h3>
                            <p className="text-gray-300 text-sm">Based on analysis of 1000+ successful video campaigns</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-800/50 border-purple-500/30 text-center hover:bg-slate-800/70 transition-all">
                        <CardContent className="p-6">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Quick Implementation</h3>
                            <p className="text-gray-300 text-sm">Most optimizations can be done in under 30 minutes</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-800/50 border-purple-500/30 text-center hover:bg-slate-800/70 transition-all">
                        <CardContent className="p-6">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Proven by Experts</h3>
                            <p className="text-gray-300 text-sm">Created by video marketing specialists with 10+ years experience</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-800/50 border-purple-500/30 text-center hover:bg-slate-800/70 transition-all">
                        <CardContent className="p-6">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Risk-Free</h3>
                            <p className="text-gray-300 text-sm">100% free with no hidden costs or commitments</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* What's Inside the Checklist */}
            <section className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        What's Inside the{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                            Checklist
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        35 actionable optimization points across 5 critical areas of video marketing
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Video Quality & Production Standards</h3>
                                <p className="text-gray-300 text-sm">Technical requirements for professional-looking videos</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Content Strategy Optimization</h3>
                                <p className="text-gray-300 text-sm">How to structure your video content for maximum impact</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Technical Performance Checks</h3>
                                <p className="text-gray-300 text-sm">Ensure your videos load fast and work on all devices</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Call-to-Action Optimization</h3>
                                <p className="text-gray-300 text-sm">Perfect your CTAs to drive more conversions</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Analytics & Testing Framework</h3>
                                <p className="text-gray-300 text-sm">Track performance and continuously improve results</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Bonus: Expert Tips & Tricks</h3>
                                <p className="text-gray-300 text-sm">Insider secrets from top-performing e-commerce stores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section id="form-section" className="mb-20">
                <Card className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 border-purple-500/30 max-w-2xl mx-auto">
                    <CardContent className="p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Boost Your Conversion Rates?</h2>
                            <p className="text-gray-300">Enter your details below to get instant access to the complete checklist</p>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name *
                                    </label>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                        placeholder="Enter your name"
                                        required
                                        className="bg-slate-700/50 border-purple-500/30 text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                        placeholder="Enter your email"
                                        required
                                        className="bg-slate-700/50 border-purple-500/30 text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                        Phone Number
                                    </label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                                        placeholder="Enter your phone number"
                                        className="bg-slate-700/50 border-purple-500/30 text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="shopify_store" className="block text-sm font-medium text-gray-300 mb-2">
                                        Shopify Store
                                    </label>
                                    <Input
                                        id="shopify_store"
                                        type="text"
                                        value={formData.shopify_store}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, shopify_store: e.target.value }))}
                                        placeholder="your-store.myshopify.com"
                                        className="bg-slate-700/50 border-purple-500/30 text-white"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting || !formData.name || !formData.email || !formData.shopify_store || !formData.phone}
                                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-full"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Loading Your Checklist...
                                    </>
                                ) : (
                                    "Show Me The Checklist"
                                )}
                            </Button>

                            <p className="text-xs text-gray-400 text-center">
                                We respect your privacy. No spam, unsubscribe anytime.
                                <br />
                                We'll also send you exclusive video marketing tips.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </section>

            {/* Checklist Section */}
            {showChecklist && (
                <section id="checklist-section" className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Your{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                                Conversion Rate Checklist
                            </span>
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Check off each item as you complete it. Your progress is automatically saved!
                        </p>

                        {/* Progress Bar */}
                        <div className="max-w-md mx-auto mb-8">
                            <div className="flex justify-between text-sm text-gray-300 mb-2">
                                <span>Progress</span>
                                <span>
                                    {completedItems} of {totalItems} completed
                                </span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-3">
                                <div
                                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                                    style={{ width: `${(completedItems / totalItems) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <Button
                            onClick={handleDownload}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download Checklist
                        </Button>
                    </div>

                    <div className="grid gap-8">
                        {checklistItems.map((category, categoryIndex) => (
                            <Card key={categoryIndex} className="bg-slate-800/50 border-purple-500/30">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white flex items-center">
                                            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                                                {categoryIndex === 0 && <FileText className="w-4 h-4 text-purple-400" />}
                                                {categoryIndex === 1 && <Target className="w-4 h-4 text-purple-400" />}
                                                {categoryIndex === 2 && <TrendingUp className="w-4 h-4 text-purple-400" />}
                                                {categoryIndex === 3 && <ArrowRight className="w-4 h-4 text-purple-400" />}
                                                {categoryIndex === 4 && <BarChart3 className="w-4 h-4 text-purple-400" />}
                                            </div>
                                            {category.category}
                                        </h3>
                                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                                            {category.items.filter((_, itemIndex) => checkedItems[`${categoryIndex}-${itemIndex}`]).length} /{" "}
                                            {category.items.length}
                                        </Badge>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <div className="space-y-3">
                                        {category.items.map((item, itemIndex) => {
                                            const itemId = `${categoryIndex}-${itemIndex}`
                                            const isChecked = checkedItems[itemId] || false

                                            return (
                                                <div
                                                    key={itemIndex}
                                                    className={`flex items-start space-x-3 p-4 rounded-lg transition-all cursor-pointer ${isChecked
                                                        ? "bg-green-500/10 border border-green-500/30"
                                                        : "bg-slate-700/30 hover:bg-slate-700/50 border border-transparent"
                                                        }`}
                                                    onClick={() => handleCheckboxChange(itemId, !isChecked)}
                                                >
                                                    <Checkbox
                                                        id={itemId}
                                                        checked={isChecked}
                                                        onCheckedChange={(checked) => handleCheckboxChange(itemId, checked as boolean)}
                                                        className="mt-1 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                                                    />
                                                    <label
                                                        htmlFor={itemId}
                                                        className={`text-sm cursor-pointer flex-1 ${isChecked ? "text-green-300 line-through" : "text-gray-300 hover:text-white"
                                                            }`}
                                                    >
                                                        {item}
                                                    </label>
                                                    {isChecked && <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Completion Message */}
                    {completedItems === totalItems && (
                        <Card className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30 mt-8">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Congratulations! 🎉</h3>
                                <p className="text-gray-300 mb-6">
                                    You've completed all optimization points! Your videos are now ready to convert at their highest
                                    potential.
                                </p>
                                <Button
                                    onClick={handleDownload}
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    Download Your Completed Checklist
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </section>
            )}
        </div>
    )
}

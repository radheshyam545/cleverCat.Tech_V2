"use client"
import { Star, Play, ArrowRight, CheckCircle, TrendingUp, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ChatWidget from "@/components/chat-widget"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import YouTubeShortsGrid from "@/components/YouTubeShortsGrid"
import ChatBotFeatures from "@/components/ChatBotFeatures"
import PricingSection from "@/components/PricingSection"
import BookADemoButton from "@/components/BookADemoButton"
import CTASection from "@/components/CTASection"
import { useRouter } from "next/navigation"

export default function HomePage() {

  const router = useRouter();


  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-12">
          <Badge variant="outline" className="bg-slate-800/50 border-purple-500/30 text-purple-300 px-4 py-2 text-sm">
            <Star className="w-4 h-4 mr-2" />
            Supercharge your Shopify Store
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Clevercat turns your videos
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            into revenue engines
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-300 mb-12">No Code, No Friction, All Performance</p>

        {/* Live Now Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              We Are Live Now
            </span>{" "}
            On Shopify App Store
          </h2>
          <p className="text-gray-300 mb-8">"Hurry to get free installations!"</p>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <Button
            size="lg"
            onClick={handleClick}
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            Install Now
          </Button>
        </div>


        <YouTubeShortsGrid />
      </section>

      {/* Results Showcase Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Store Interface Mockup */}
            <Card className="bg-gradient-to-br from-green-400/20 via-blue-500/20 to-purple-600/20 border-slate-700 overflow-hidden relative">
              <CardContent className="p-0 m-0 w-full h-full relative">
                <div className="absolute inset-0">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/eb0owHabcbA?autoplay=1&loop=1&playlist=eb0owHabcbA&controls=0&showinfo=0&rel=0&mute=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full object-cover"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Growth Metrics */}
            <Card className="bg-slate-900/80 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Growth After CleverCat</h3>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Engagement</div>
                    <div className="text-3xl font-bold text-green-400">40%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Conversions</div>
                    <div className="text-3xl font-bold text-blue-400">30%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">ROI</div>
                    <div className="text-3xl font-bold text-purple-400">60%</div>
                  </div>
                </div>

                {/* Customer Avatars */}
                <div className="flex items-center space-x-2 mb-4">
                  {[
                    "/clients/client_1.webp",
                    "/clients/client_2.webp",
                    "/clients/client_3.webp",
                  ].map((src, index) => (
                    <div key={index + 1} className="relative">
                      <Image
                        src={src}
                        alt={`Customer ${index + 1}`}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover border-2 border-purple-500/30"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 bg-purple-600/20 border-2 border-purple-500/30 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 text-lg font-bold">+</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-300 font-medium">Positive Reviews</span>
                </div>
              </CardContent>
            </Card>

            {/* Instagram Reels CTA */}
            <Card className="bg-gradient-to-br from-purple-600/80 to-pink-600/80 border-purple-500/30">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Add Instagram Reels To Your Shopify Store</h3>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  Easily import Instagram Reels to Shopify and unlock shoppable features that drive sales
                </p>
                <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 self-start">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition & Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative bg-slate-800/50 rounded-3xl border border-slate-700 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Why Choose Us */}
              <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Choose Us?</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Boost sales with shoppable videos. Import Reels to Shopify, engage buyers instantly, and grow with
                  real results
                </p>
                <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Right Side - Timeline */}
              <div className="space-y-8">
                {/* Unlock Higher Sales Banner */}
                <div className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-full px-6 py-4 flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Unlock Higher Sales</h4>
                    <p className="text-purple-100 text-sm">Use Shoppable Videos Powered by Clevercat</p>
                  </div>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { time: "2Min", description: "To Install The App" },
                    { time: "5Min", description: "To Setup Videos" },
                    { time: "10Min", description: "To Start The Impact" },
                    { time: "24Hr", description: "To See The Growth" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.time}</div>
                      <div className="text-gray-300 text-sm">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg rounded-full"
              >
                Install Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Features Showcase Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-8 bg-slate-800 text-purple-400 border-purple-500/20">
              <Star className="w-4 h-4 mr-2" />
              Our Features
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Convert Your Videos
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Into Instant Buying Moments.
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Convert views into sales directly on your store. Your audience becomes your customers, instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Liking System",
                description: "Let customers like videos to boost interaction and discover what content connects best",
                icon: "❤️",
              },
              {
                title: "Carousel Look",
                description: "On desktop, videos appear in a smooth carousel—easy to browse, hard to ignore",
                icon: "🎠",
              },
              {
                title: "Reel Like Feed",
                description: "On mobile, videos appear in a smooth Instagram reel feed, with infinite scroll",
                icon: "▶️",
              },
              {
                title: "Minimize Video",
                description:
                  "Minimize videos while shopping to keep customers engaged without interrupting their journey",
                icon: "📱",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="bg-slate-900/80 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Competitive Comparison Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-8 bg-slate-800 text-purple-400 border-purple-500/20">
              <Star className="w-4 h-4 mr-2" />
              Comparisons
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Left Side - Value Proposition */}
            <div className="lg:col-span-1">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  For Same Features
                  <br />
                  <span className="relative">
                    Other Apps
                    <div className="absolute -bottom-2 left-0 w-full h-8 bg-gradient-to-r from-pink-400 to-orange-400 opacity-30 rounded-lg -z-10"></div>
                  </span>
                </h2>
                <p className="text-2xl font-bold text-gray-300">Charges $19 - $500</p>
              </div>
            </div>

            {/* Comparison Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* CleverCat Card */}
              <Card className="bg-gradient-to-br from-purple-900/80 to-slate-900/80 border-purple-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-pink-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  BEST VALUE
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-white">CleverCat</CardTitle>
                  <div className="text-3xl font-bold text-green-400">FREE</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Host unlimited videos",
                    "Bulk video upload",
                    "Custom video carousel",
                    "Import videos from Instagram",
                    "Connect multiple stores",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* WhatsMore Card */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-white">WhatsMore</CardTitle>
                  <div className="text-2xl font-bold text-gray-300">$29 - $499</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Host unlimited videos",
                    "Bulk video upload",
                    "Custom video carousel",
                    "Import videos from Instagram",
                    "Connect multiple stores",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tolstoy Card */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-white">Tolstoy</CardTitle>
                  <div className="text-2xl font-bold text-gray-300">$19 - $299</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Host unlimited videos",
                    "Bulk video upload",
                    "Custom video carousel",
                    "Import videos from Instagram",
                    "Connect multiple stores",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">Why pay hundreds when you can get the same features for free?</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>


      {/* Instagram Reels Showcase Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-8 bg-slate-800 text-purple-400 border-purple-500/20">
              <Star className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Boost Sales With
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Instagram Reels
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Turn Instagram Reels into high-converting, shoppable videos on your store.
            </p>
          </div>

          <div className="hidden md:block relative max-w-6xl mx-auto">
            {/* Central Phone Mockup */}
            <div className="flex justify-center items-center relative z-10">
              <div className="relative">
                <Image
                  src="https://i0.wp.com/clevercat.tech/wp-content/uploads/2025/05/301-scaled.png?resize=683%2C1024&ssl=1"
                  alt="CleverCat Instagram Reels on Mobile"
                  width={400}
                  height={600}
                  className="w-80 h-auto"
                />
              </div>
            </div>

            {/* Feature Callouts */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Import From Instagram - Top Left */}
              <div className="absolute top-8 left-0 md:left-8 lg:left-16 max-w-xs">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white mb-2">Import From Instagram</h3>
                    <p className="text-gray-300 text-sm">
                      Import Reels straight from Instagram—no downloads, no hassle.
                    </p>
                  </div>
                </div>
              </div>

              {/* User-Friendly - Top Right */}
              <div className="absolute top-8 right-0 md:right-8 lg:right-16 max-w-xs">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white mb-2">User-Friendly</h3>
                    <p className="text-gray-300 text-sm">Simple, seamless Reels import from Instagram to Shopify</p>
                  </div>
                </div>
              </div>

              {/* Boost Conversions - Bottom Left */}
              <div className="absolute bottom-8 left-0 md:left-8 lg:left-16 max-w-xs">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white mb-2">Boost Conversions</h3>
                    <p className="text-gray-300 text-sm">Turn views into sales—watch your conversion rates grow</p>
                  </div>
                </div>
              </div>

              {/* 24x7 Customer Support - Bottom Right */}
              <div className="absolute bottom-8 right-0 md:right-8 lg:right-16 max-w-xs">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white mb-2">24x7 Customer Support</h3>
                    <p className="text-gray-300 text-sm">
                      Round-the-clock support to keep your business running smoothly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="block md:hidden container mx-auto">
            {/* Central Content */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central Phone Mockup */}
              <div className="flex justify-center items-center relative z-10 mb-12">
                <div className="relative">
                  <Image
                    src="https://i0.wp.com/clevercat.tech/wp-content/uploads/2025/05/301-scaled.png?resize=683%2C1024&ssl=1"
                    alt="CleverCat Instagram Reels on Mobile"
                    width={300}
                    height={450}
                    className="w-64 md:w-80 h-auto"
                  />
                </div>
              </div>

              {/* Feature Callouts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Import From Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Import From Instagram</h3>
                    <p className="text-gray-300 text-sm">
                      Import Reels straight from Instagram—no downloads, no hassle.
                    </p>
                  </div>
                </div>

                {/* User-Friendly */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">User-Friendly</h3>
                    <p className="text-gray-300 text-sm">Simple, seamless Reels import from Instagram to Shopify</p>
                  </div>
                </div>

                {/* Boost Conversions */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">Boost Conversions</h3>
                    <p className="text-gray-300 text-sm">Turn views into sales—watch your conversion rates grow</p>
                  </div>
                </div>

                {/* 24x7 Customer Support */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-base md:text-lg font-bold text-white mb-1">24x7 Customer Support</h3>
                    <p className="text-gray-300 text-sm">
                      Round-the-clock support to keep your business running smoothly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full"
            >
              Start Converting Reels Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>


  

      {/* Enhanced Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-br from-purple-900/80 to-slate-900/80 rounded-3xl border border-purple-500/20 p-8 md:p-12">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-8 bg-slate-800 text-purple-400 border-purple-500/20">
                <Star className="w-4 h-4 mr-2" />
                Testimonial
              </Badge>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                What They Say{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  About Us?
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Growth speaks for itself—our app wins hearts as stores succeed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rahul Sharma",
                  role: "Our Client",
                  content: "This app changed everything for our store. Easy to use and boosted our sales fast",
                  rating: 4,
                  avatar: "/clients/client_1.webp",
                },
                {
                  name: "Diya Verma",
                  role: "Our Client",
                  content: "We saw a 2x jump in conversions after adding shoppable Reels. Highly recommended!",
                  rating: 5,
                  avatar: "/clients/client_2.webp",
                },
                {
                  name: "Rahul Kumar",
                  role: "Our Client",
                  content: "Setup took minutes, and the support team is amazing. Our store has never looked better",
                  rating: 5,
                  avatar: "/clients/client_3.webp",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm relative">
                  <CardContent className="p-6">
                    {/* Star Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-5 h-5 ${j < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                            }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>

                    {/* Customer Info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="w-15 h-15 rounded-full object-cover border-2 border-purple-500/30"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                        <div className="text-sm text-purple-300">{testimonial.role}</div>
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-purple-400/30 absolute top-4 right-4" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 mb-6">Join thousands of satisfied customers who trust CleverCat</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* <PricingSection /> */}
      <section className="container mx-auto px-4 text-center py-10">

        <BookADemoButton />
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about using our AI ChatBot on your Shopify store.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "What are shoppable videos​?",
                answer:
                  "Shoppable videos let viewers buy products directly from the video by clicking on links or interactive features. They combine entertainment with shopping to make the buying process easier.",
              },
              {
                question: "Can I get started for free?",
                answer:
                  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at.",
              },
              {
                question: "Where can I place Clevercat Shoppable Videos in Shopify?",
                answer:
                  "You can display CleverCat Shoppable Videos on your website and mobile. Videos are automatically added to your product pages, allowing shoppers to add items to their cart directly from the video. All purchases go through your Shopify checkout.",
              },
              {
                question: "How user-friendly is the platform for creating and managing Shoppable Videos? Is technical expertise required?",
                answer:
                  "It’s designed for ease of use—no technical skills needed. Drag, drop, and publish in minutes.",
              },
              {
                question: "Can you share examples of how Shoppable Videos have boosted sales and engagement for similar Shopify stores?",
                answer:
                  "Yes, many stores have seen 2x engagement time and up to 30% increase in conversions after using our videos.Checkout our Case Studies for more information.",
              },
              {
                question: "How are product details pulled into the Shoppable Video?",
                answer:
                  "Product data like name, price, and image syncs automatically from your Shopify catalog.",
              },
              {
                question: "Can Shoppable Videos be easily shared on social media?",
                answer:
                  "Absolutely! You can generate shareable links or embed code for platforms like whatsapp, Instagram, TikTok, and Facebook.",
              },
              {
                question: "Will the Shoppable Video service slow down my website loading speed?",
                answer:
                  "No, it’s optimized for speed and loads asynchronously to keep your site fast.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-purple-500/30">
                <AccordionTrigger className="text-white hover:text-purple-300 text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/* Chat Widget */}
      <ChatWidget />
    </>
  )
}

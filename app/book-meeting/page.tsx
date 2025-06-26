"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, Users, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import { InlineWidget, useCalendlyEventListener } from "react-calendly"

export default function BookMeetingPage() {
  // Optional: Handle Calendly events
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log("Event scheduled:", e.data.payload),
    onProfilePageViewed: () => console.log("Profile page viewed"),
    onDateAndTimeSelected: () => console.log("Date and time selected"),
    onEventTypeViewed: () => console.log("Event type viewed"),
  })

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-8 bg-slate-800 text-purple-400 border-purple-500/20">
            <Calendar className="w-4 h-4 mr-2" />
            Book Your Demo
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            See CleverCat in Action
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Book Your Free Demo
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Get a personalized demonstration of how CleverCat can transform your Shopify store with shoppable videos.
            See real results, ask questions, and get your implementation roadmap.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15 Min</div>
              <div className="text-gray-300">Quick Demo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Free</div>
              <div className="text-gray-300">No Cost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Live</div>
              <div className="text-gray-300">Real-time Demo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Calendly Integration */}
            <div>
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">Choose Your Time</CardTitle>
                  <p className="text-gray-300">Select a convenient time for your personalized demo</p>
                </CardHeader>
                <CardContent className="p-0">
                  <InlineWidget
                    // url="https://calendly.com/kumawatradhe545/30min"
                    url="https://calendly.com/driptrip-contact/new-meeting"
                    styles={{
                      height: "600px",
                      width: "100%",
                      borderRadius: "0 0 8px 8px",
                    }}
                    className="calendly-embed"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Meeting Information */}
            <div className="space-y-8">
              {/* What You'll Get */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <Star className="w-6 h-6 text-purple-400 mr-2" />
                    What You'll Get
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      icon: Video,
                      title: "Live Product Demo",
                      description: "See CleverCat in action with real Shopify stores and video examples",
                    },
                    {
                      icon: Users,
                      title: "Strategy Session",
                      description: "Discuss your specific goals and how video commerce fits your business",
                    },
                    {
                      icon: Calendar,
                      title: "Implementation Plan",
                      description: "Get a customized roadmap for launching CleverCat in your store",
                    },
                    {
                      icon: Clock,
                      title: "Q&A Time",
                      description: "Ask any questions about features, pricing, or technical requirements",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Success Stories Preview */}
              <Card className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-xl text-white">See Real Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Success story"
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                      />
                      <div>
                        <p className="text-white font-medium">"80% increase in conversions"</p>
                        <p className="text-purple-300 text-sm">Fashion Store Owner</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Success story"
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                      />
                      <div>
                        <p className="text-white font-medium">"Setup took just 5 minutes"</p>
                        <p className="text-purple-300 text-sm">Electronics Retailer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Meeting Details */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Meeting Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">15-30 minutes duration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Video className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Via Zoom or Google Meet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Available Mon-Fri, 9 AM - 6 PM PST</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">No commitment required</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book a Demo Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Book a <span className="text-purple-400">Demo?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              See exactly how CleverCat will work for your specific store and business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Personalized for You",
                description: "We'll show you exactly how CleverCat works with your products and store setup",
              },
              {
                icon: "📈",
                title: "See Real ROI",
                description: "Learn how other stores like yours have increased conversions by 40-80%",
              },
              {
                icon: "🚀",
                title: "Fast Implementation",
                description: "Get your custom launch plan and be up and running within 24 hours",
              },
            ].map((benefit, i) => (
              <Card
                key={i}
                className="bg-slate-800/50 border-slate-700 text-center hover:border-purple-500/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Join <span className="text-purple-400">500+</span> Successful Stores
            </h2>
            <p className="text-gray-300 text-lg">
              See why store owners choose CleverCat for their video commerce needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "The demo showed me exactly what I needed. Within a week, our video engagement increased by 200%.",
                author: "Sarah Chen",
                role: "Founder, StyleHub",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                quote:
                  "Best 15 minutes I've spent on my business. The team showed me features I didn't even know I needed.",
                author: "Mike Rodriguez",
                role: "Owner, TechGear Pro",
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-purple-300">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to See CleverCat in Action?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Book your free demo now and discover how video commerce can transform your store
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100"
            onClick={() => document.querySelector(".calendly-embed")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Demo Now
          </Button>
        </div>
      </section>
    </div>
  )
}
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            CleverCat
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We're on a mission to revolutionize video commerce and help Shopify merchants increase their revenue.
        </p>
      </section>

      {/* Our Story */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-gray-300 mb-4">
            CleverCat was founded in 2021 by a team of e-commerce experts and video technology specialists who
            recognized a gap in the market: while video was becoming increasingly important for online sales, there were
            few tools that effectively turned video content into direct sales.
          </p>
          <p className="text-gray-300 mb-4">
            After months of development and testing with early adopters, we launched our Shopify app with a clear
            mission: to make video commerce accessible, effective, and measurable for businesses of all sizes.
          </p>
          <p className="text-gray-300">
            Today, CleverCat powers video commerce for thousands of Shopify merchants worldwide, helping them increase
            engagement, boost conversion rates, and grow their revenue through the power of video.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-3xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=600&text=Our+Story"
              alt="CleverCat team"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "We constantly push the boundaries of what's possible in video commerce technology.",
              icon: "💡",
            },
            {
              title: "Customer Success",
              description: "Your success is our success. We're committed to helping you achieve your business goals.",
              icon: "🚀",
            },
            {
              title: "Simplicity",
              description: "We believe powerful technology should be easy to use and accessible to everyone.",
              icon: "✨",
            },
          ].map((value, index) => (
            <div key={index} className="bg-slate-800/50 border border-purple-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "CEO & Co-Founder",
              image: "/placeholder.svg?height=300&width=300&text=AJ",
            },
            {
              name: "Sarah Chen",
              role: "CTO & Co-Founder",
              image: "/placeholder.svg?height=300&width=300&text=SC",
            },
            {
              name: "Michael Rodriguez",
              role: "Head of Product",
              image: "/placeholder.svg?height=300&width=300&text=MR",
            },
            {
              name: "Emma Patel",
              role: "Head of Customer Success",
              image: "/placeholder.svg?height=300&width=300&text=EP",
            },
            {
              name: "David Kim",
              role: "Lead Developer",
              image: "/placeholder.svg?height=300&width=300&text=DK",
            },
            {
              name: "Olivia Wilson",
              role: "Marketing Director",
              image: "/placeholder.svg?height=300&width=300&text=OW",
            },
            {
              name: "James Taylor",
              role: "UX Designer",
              image: "/placeholder.svg?height=300&width=300&text=JT",
            },
            {
              name: "Sophia Garcia",
              role: "Customer Support Lead",
              image: "/placeholder.svg?height=300&width=300&text=SG",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="aspect-square rounded-full overflow-hidden mb-4 border-2 border-purple-500/30">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Join Our Journey</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          We're always looking for talented individuals who are passionate about e-commerce and video technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            <Link href="/more-info">Contact Us</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold rounded-full"
          >
            <Link href="/careers">View Careers</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

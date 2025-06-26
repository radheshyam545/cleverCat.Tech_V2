"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const router = useRouter();

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-3xl p-8 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Add a 24/7 Sales Assistant to Your Store?
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto mb-8">
          Let our AI ChatBot answer questions, recommend products, and collect leads — even while you sleep. Seamless integration with your Shopify store in minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Start Free Trial Button */}
          <button
            onClick={() => router.push("/more-info")}
            className="relative inline-flex items-center justify-center px-7 py-3 rounded-full text-purple-900 font-semibold text-base bg-white overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-100 via-white to-purple-100 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 text-purple-700 transition-transform duration-300 transform group-hover:translate-x-1" />
            </span>
          </button>

          {/* See It in Action Button */}
          <button
            onClick={() => router.push("/more-info")}
            className="relative inline-flex items-center justify-center px-7 py-3 rounded-full text-white font-semibold text-base border border-white overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center">
              See It in Action
              <ArrowRight className="ml-2 w-4 h-4 text-white transition-transform duration-300 transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

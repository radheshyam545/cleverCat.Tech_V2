"use client"

import { useState } from "react"
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa"

export default function ChatWidget() {
  const [isVisible, setIsVisible] = useState(true)
//  hi i need some queries related to clevercat ai
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

      {/* Tooltip */}
      {isVisible && (
        <div className="absolute -top-20 right-0 bg-white text-black text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Need Help? <span className="font-semibold">Chat with us</span>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      )}

      {/* Telegram Button */}
      <button
        onClick={() => {
          const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK || "https://t.me/clevercat_ai";
          window.open(telegramLink, "_blank");
        }}
        className="w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg flex items-center justify-center"
      >
        <FaTelegramPlane size={32} /> {/* Icon size */}
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={() => {
          const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917877194258";
          const message = encodeURIComponent("hi i need some queries related to clevercat ai");
          window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
        }}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp size={32} /> {/* Icon size */}
      </button>
    </div>
  )
}

"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918476919543"
    const message = "Hello! I would like to book an appointment at Apple Dental Care."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse hover:animate-none"
        size="lg"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Contact on WhatsApp</span>
      </Button>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">!</span>
      </div>
    </div>
  )
}

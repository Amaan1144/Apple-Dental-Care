"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "c770df8a-84ad-4623-a548-d49fca6cac7a", // You'll need to get this from web3forms.com (it's free)
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to: "ansariamaan854@gmail.com",
          subject: "New inquiry from Apple Dental Care website",
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6">
            <span className="text-sm font-medium text-emerald-300">Get In Touch</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Your Best
            <span className="block text-emerald-400">Smile Ever?</span>
          </h2>

          <p className="text-xl text-slate-300 max-w2xl mx-auto leading-relaxed">
            Schedule your appointment today and take the first step towards optimal dental health.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell us about your dental needs..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 text-lg rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="flex items-center space-x-2 text-emerald-400">
                      <CheckCircle className="w-5 h-5" />
                      <p>Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-400">Failed to send message. Please call us directly.</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Visit Our Clinic</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Vijoria Road, Near Maya Hospital,
                      <br />
                      Nawabganj (West), Bareilly
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Call Us</h3>
                    <div className="space-y-1">
                      <p className="text-slate-300">
                        <a href="tel:8476919543" className="hover:text-emerald-400 transition-colors">
                          8476919543
                        </a>
                      </p>
                      <p className="text-slate-300">
                        <a href="tel:9219063635" className="hover:text-emerald-400 transition-colors">
                          9219063635
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Clock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Working Hours</h3>
                    <div className="text-slate-300 text-sm space-y-1">
                      <p>Monday - Saturday</p>
                      <p className="font-semibold text-emerald-400">10:00 AM - 8:00 PM</p>
                      <p>Sunday</p>
                      <p className="font-semibold text-emerald-400">10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl p-6 border border-emerald-500/30">
              <h4 className="text-emerald-300 font-semibold mb-2">🚨 Emergency Care</h4>
              <p className="text-emerald-200 text-sm">
                Dental emergencies? Call us immediately for urgent care and pain relief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

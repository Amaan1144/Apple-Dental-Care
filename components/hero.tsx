"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage: "url('/images/dental-doctor-background.jpg')",
          }}
        ></div>
        {/* Fallback pattern if image doesn't load */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dental-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#e2e8f0" opacity="0.3" />
                <path d="M8 8 L12 12 M12 8 L8 12" stroke="#e2e8f0" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dental-pattern)" />
          </svg>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-slate-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-2">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4 mt-2">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200">
                <Star className="w-4 h-4 text-emerald-600 mr-2" />
                <span className="text-sm font-medium text-emerald-700">Trusted by 5000+ Patients</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900">Your Perfect</span>
                <br />
                <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Smile Awaits
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Experience world-class dental care with cutting-edge technology and personalized treatment plans
                tailored just for you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                <MapPin className="w-5 h-5 text-slate-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Location</p>
                  <p className="text-xs text-slate-500">Vijauria Road, Opposite Maya Hospital, Nawabganj, Bareilly</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200">
                <Clock className="w-5 h-5 text-slate-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Working Hours</p>
                  <p className="text-xs text-slate-500">Mon-Sun: 09AM-10PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open("tel:8476919543", "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 hover:bg-slate-50 px-8 py-6 rounded-xl bg-white/80 backdrop-blur-sm"
                onClick={() => {
                  const element = document.getElementById("services")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                View Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-slate-200">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-slate-900 rounded-full"></div>

              <div className="text-center space-y-6">
                <div className="relative mx-auto w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍⚕️</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Dr. M.S. Ansari</h3>
                  <p className="text-emerald-600 font-semibold">B.D.S. (K.G.M.C. Lucknow)</p>
                  <p className="text-slate-500">Dental Surgeon</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-slate-50/80 backdrop-blur-sm rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">15+</p>
                    <p className="text-xs text-slate-500">Years Experience</p>
                  </div>
                  <div className="p-3 bg-slate-50/80 backdrop-blur-sm rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">5000+</p>
                    <p className="text-xs text-slate-500">Happy Patients</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                  <p className="text-sm font-semibold text-emerald-800">✨ FREE X-RAY & Consultation</p>
                  <p className="text-xs text-emerald-600">For new patients</p>
                </div>
              </div>
            </div>

            {/* Additional floating elements for depth */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-emerald-100/50 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-slate-200/50 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

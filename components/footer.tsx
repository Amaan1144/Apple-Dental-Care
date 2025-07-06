import { Phone, Mail, MapPin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl"></span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Apple Dental Care</h3>
                <p className="text-slate-400">Your Smile, Our Priority</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Providing exceptional dental care with modern technology and compassionate service. Your journey to a
              perfect smile starts here.
            </p>
            <div className="flex items-center space-x-2 text-emerald-400">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Trusted by 5000+ happy patients</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <p className="text-slate-300">8476919543</p>
                  <p className="text-slate-300">9219063635</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-slate-400 mt-0.5" />
                <p className="text-slate-300 break-all">farhanchaudhary35@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                <p className="text-slate-300">
                  Vijauria Road, Opposite Maya Hospital,
                  <br />
                  Nawabganj, Bareilly
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">Clinic Hours</h4>
            <div className="space-y-3">
              <div>
                <span className="text-slate-300">Monday - Sunday</span>
                <div className="text-emerald-400 font-semibold">09:00 AM - 10:00 PM</div>
              </div>
              <div className="mt-6 bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                <p className="text-emerald-300 font-semibold text-sm">🎁 NEW PATIENT SPECIAL</p>
                <p className="text-emerald-200 text-xs mt-1">FREE Consultation + X-Ray</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Apple Dental Care. All rights reserved.</p>
            <p className="text-slate-400 text-sm mt-2 md:mt-0">Dr. M.S. Ansari - B.D.S. (K.G.M.C. Lucknow)</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

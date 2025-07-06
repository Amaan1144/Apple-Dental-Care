import { CheckCircle, Award } from "lucide-react";
import Image from 'next/image';

export function DentalShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-emerald-50/30 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image src="/images/dental-examination.jpg" alt="Professional dental examination with modern equipment"
                width={1200} height={500} className="w-full h-[500px] object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>

              {/* Floating Stats */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">15+ Years</p>
                    <p className="text-xs text-slate-600">Experience</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">5000+</p>
                    <p className="text-xs text-slate-600">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200">
                <span className="text-sm font-medium text-emerald-700">Professional Care</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Modern Dental
                <span className="block text-slate-600">Excellence</span>
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed">
                Experience the difference of advanced dental technology combined with gentle, personalized care. Our
                state-of-the-art equipment ensures precise diagnosis and comfortable treatment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700 font-medium">Digital X-Ray Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700 font-medium">Painless Procedures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700 font-medium">Sterilized Environment</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700 font-medium">Expert Diagnosis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700 font-medium">Personalized Treatment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700 font-medium">Affordable Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

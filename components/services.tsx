import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Services() {
  const services = [
    {
      name: "Complete Checkup",
      badge: "Popular",
      description: "Comprehensive dental examination and consultation",
    },
    { name: "Professional Cleaning", badge: null, description: "Deep cleaning and plaque removal" },
    { name: "Cavity Filling", badge: null, description: "Quality composite and amalgam fillings" },
    { name: "Root Canal Treatment", badge: "Advanced", description: "Pain-free endodontic treatment" },
    {
      name: "Teeth Whitening",
      badge: "Trending",
      description: "Professional whitening for brighter smile",
    },
    { name: "Tooth Extraction", badge: null, description: "Safe and painless tooth removal" },
    { name: "Dental Crown", badge: null, description: "Premium quality crowns and caps" },
    { name: "Complete Dentures", badge: null, description: "Custom-fitted full and partial dentures" },
    {
      name: "Orthodontic Treatment",
      badge: "Premium",
      description: "Braces and teeth alignment solutions",
    },
    { name: "Scaling & Polishing", badge: null, description: "Professional deep cleaning service" },
    { name: "Digital X-Ray", badge: "Free", description: "Advanced digital radiography" },
    { name: "Emergency Care", badge: "24/7", description: "Immediate dental emergency treatment" },
    {
      name: "Dental Implants",
      badge: null,
      description: "Permanent tooth replacement with implants",
    },
    {
      name: "Pyorrhea Treatment",
      badge: null,
      description: "Specialized treatment for gum disease (pyorrhea)",
    },
    {
      name: "Soft Denture",
      badge: null,
      description: "Comfortable flexible dentures for sensitive gums",
    },
    {
      name: "Sensitive Teeth Treatment",
      badge: null,
      description: "Relief from hot and cold sensitivity in teeth",
    },
    {
      name: "Wisdom Tooth Removal",
      badge: null,
      description: "Painless extraction of impacted wisdom teeth",
    },
    {
      name: "Mouth Ulcer Treatment",
      badge: null,
      description: "Relief and healing of painful mouth ulcers",
    },
    {
      name: "Tooth Discoloration Treatment",
      badge: null,
      description: "Correction of stained or discolored teeth",
    },
    {
      name: "Ultrasonic Cleaning",
      badge: null,
      description: "Teeth cleaning using advanced ultrasonic machine",
    },
    {
      name: "Fixed & Removable Dentures",
      badge: null,
      description: "Custom fixed and removable denture solutions",
    },
    {
      name: "Tooth Jewelry",
      badge: null,
      description: "Decorative gems applied to teeth for a stylish look",
    },
    {
      name: "Bleeding Gums Treatment",
      badge: null,
      description: "Treatment to stop bleeding and strengthen gums",
    },
    {
      name: "Bad Breath Treatment",
      badge: null,
      description: "Solutions for chronic bad breath issues",
    },
    {
      name: "Loose Teeth Stabilization",
      badge: null,
      description: "Treatment to fix and stabilize mobile teeth",
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-slate-100/50 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full border border-slate-200 mb-6">
            <span className="text-sm font-medium text-slate-700">Our Services</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Dental
            <span className="block text-slate-600">Solutions</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From routine checkups to advanced procedures, we offer complete dental care with transparent pricing and
            exceptional quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {service.name}
                  </CardTitle>
                  {service.badge && (
                    <Badge variant={service.badge === "Free" ? "secondary" : "default"} className="text-xs">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                {/* <div className="text-2xl font-bold text-slate-900">{service.price}</div> */}
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-emerald-800 mb-2">Special New Patient Offer</h3>
            <p className="text-emerald-700 font-semibold text-lg">FREE Consultation + X-Ray + Treatment Plan</p>
            <p className="text-emerald-600 text-sm mt-2">Valid for first-time patients only</p>
          </div>
        </div>
      </div>
    </section>
  )
}

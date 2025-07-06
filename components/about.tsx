import { Award, Users, Clock, Shield, CheckCircle } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Award,
      title: "Expert Care",
      description: "Dr. M.S. Ansari with specialized training from K.G.M.C. Lucknow",
    },
    {
      icon: Users,
      title: "500+ Patients",
      description: "Successfully treated patients with 99% satisfaction rate",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Mon-Sat: 10AM-8PM, Sunday: 10AM-2PM for your convenience",
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment including digital X-Ray facility",
    },
  ]

  const achievements = [
    "15+ Years of Excellence in Dental Care",
    "Modern Digital X-Ray Facility",
    "Sterilized & Safe Treatment Environment",
    "Affordable & Transparent Pricing",
  ]

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-2 h-32 bg-white transform rotate-12"></div>
        <div className="absolute top-20 right-1/3 w-1 h-24 bg-white transform -rotate-12"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-28 bg-white transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                <Award className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-sm font-medium text-emerald-300">Why Choose Us</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Excellence in
                <span className="block text-emerald-400">Dental Care</span>
              </h2>

              <p className="text-xl text-slate-300 leading-relaxed">
                We combine years of experience with modern technology to deliver exceptional dental care that transforms
                smiles and lives.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

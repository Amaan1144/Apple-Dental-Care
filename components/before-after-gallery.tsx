import { Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BeforeAfterGallery() {
  const treatments = [
    {
      title: "Teeth Whitening",
      description: "Professional whitening for brighter smile",
      beforeImage: "/images/before-whitening.png",
      afterImage: "/images/after-whitening.png",
    },
    {
      title: "Dental Crown",
      description: "Complete restoration with premium crown",
      beforeImage: "/images/before-crown.png",
      afterImage: "/images/after-crown.png",
    },
    {
      title: "Cavity Filling",
      description: "Natural composite filling restoration",
      beforeImage: "/images/before-filling.png",
      afterImage: "/images/after-filling.png",
    },
    {
      title: "Orthodontic Treatment",
      description: "Teeth alignment with modern braces",
      beforeImage: "/images/before-braces.png",
      afterImage: "/images/after-braces.png",
    },
    {
      title: "Gum Disease Treatment",
      description: "Complete periodontal therapy",
      beforeImage: "/images/before-gum-disease.png",
      afterImage: "/images/after-gum-disease.png",
    },
    {
      title: "Tooth Extraction & Implant",
      description: "Damaged tooth replacement with implant",
      beforeImage: "/images/before-implant.png",
      afterImage: "/images/after-implant.png",
    },
    {
      title: "Denture Replacement",
      description: "Custom-fitted complete dentures",
      beforeImage: "/images/before-denture.png",
      afterImage: "/images/after-denture.png",
    },
    {
      title: "Gap Filling",
      description: "Fill small gaps between teeth for an even smile",
      beforeImage: "/images/before-gap-filling.png",
      afterImage: "/images/after-gap-filling.png",
    }
  ]

  return (
    <section id="reviews" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-3/4 right-1/3 w-32 h-32 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-sm font-medium text-emerald-300">Treatment Results</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Amazing
            <span className="block text-emerald-400">Transformations</span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See the incredible results our patients achieve with our expert dental treatments across various conditions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-slate-300 text-sm">{treatment.description}</p>
                  </div>

                  <div className="space-y-4">
                    {/* Before Image */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Before</h4>
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={treatment.beforeImage || "/placeholder.svg"}
                          alt={`Before ${treatment.title}`}
                          className="w-full h-32 object-cover transition-transform group-hover:scale-105"/>

                        <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">After</h4>
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={treatment.afterImage || "/placeholder.svg"}
                          alt={`After ${treatment.title}`}
                          className="w-full h-32 object-cover transition-transform group-hover:scale-105"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                        <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          ✓ Treated
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl p-8 border border-emerald-500/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🦷</div>
                <h3 className="text-2xl font-bold text-emerald-300 mb-2">5000+ Cases</h3>
                <p className="text-emerald-200 text-sm">Successfully Treated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⭐</div>
                <h3 className="text-2xl font-bold text-emerald-300 mb-2">99% Success</h3>
                <p className="text-emerald-200 text-sm">Treatment Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="text-2xl font-bold text-emerald-300 mb-2">15+ Years</h3>
                <p className="text-emerald-200 text-sm">Professional Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
        name: "Mohit Verma",
        age: 29,
        treatment: "Wisdom Tooth Removal",
        rating: 5,
        text: "Yahan mera wisdom tooth ka extraction bahut hi smooth hua. Mujhe laga dard hoga par Dr. Ansari ne bina pain ke remove kiya. Staff bhi bahut friendly hai!",
        image: "/images/patient-1.png",
    },
    {
      name: "Mohd Amaan",
      age: 24,
      treatment: "Teeth Whitening",
      rating: 5,
      text: "Dr. Ansari made my teeth whitening experience completely painless. The results are amazing! My confidence has increased so much. The clinic is very clean and professional.",
      image: "/images/patient-2.png",
    },
    {
      name: "Rajesh Kumar",
      age: 35,
      treatment: "Root Canal",
      rating: 4,
      text: "I was terrified of root canal treatment, but Dr. Ansari explained everything clearly and made it completely painless. The staff is very caring and professional.",
      image: "/images/patient-3.png",
    },
    {
        name: "Murtaza Khan",
        age: 33,
        treatment: "Teeth Sensitivity Treatment",
        rating: 5,
        text: "Thanda-garam khane me problem hoti thi, par ab sensitivity ka treatment lene ke baad kaafi relief mila. Doctor bahut patient hain aur detail me batate hain.",
        image: "/images/patient-4.png",
    },
    {
      name: "Sunita Devi",
      age: 42,
      treatment: "Dental Crown",
      rating: 5,
      text: "Excellent service and very affordable prices. My dental crown looks completely natural. Dr. Ansari is very skilled and gentle. Highly recommended!",
      image: "/images/patient-5.png",
    },
    {
        name: "Saurabh Chauhan",
        age: 40,
        treatment: "Dental Implants",
        rating: 4,
        text: "Dental implant ka pura process painless tha. Ab mere teeth bilkul natural lagte hain. Apple Dental Care pe mera experience bahut hi acha raha.",
        image: "/images/patient-6.png",
    },
    {
      name: "Amit Singh",
      age: 31,
      treatment: "Teeth Cleaning",
      rating: 5,
      text: "Regular cleaning at Apple Dental Care has kept my teeth healthy. The clinic uses modern equipment and maintains high hygiene standards. Very satisfied!",
      image: "/images/patient-7.png",
    },
    {
        name: "Shagufa Bee",
        age: 24,
        treatment: "Braces",
        rating: 4,
        text: "Main apni smile ko lekar conscious thi, par braces lagwane ke baad bahut improvement aya. Dr. Ansari ne sab kuch ache se explain kiya. Clinic ka environment bhi bahut accha hai.",
        image: "/images/patient-8.png",
    },
    {
        name: "Rahul Gangwar",
        age: 37,
        treatment: "Pyorrhea Treatment",
        rating: 5,
        text: "Mere gums me bleeding hoti thi, par yahan pe treatment se bahut fark pada. Ab teeth aur gums dono healthy hain. Bahut shukriya Dr. Ansari!",
        image: "/images/patient-9.png",
    },
    {
      name: "Kavita Gupta",
      age: 26,
      treatment: "Cavity Filling",
      rating: 5,
      text: "Quick and painless cavity filling. Dr. Ansari is very professional and the clinic timing is very convenient. The free X-ray facility is a great bonus!",
      image: "/images/patient-10.png",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full border border-slate-200 mb-6">
            <Star className="w-4 h-4 text-slate-700 mr-2" />
            <span className="text-sm font-medium text-slate-700">Patient Reviews</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our Patients
            <span className="block text-slate-600">Say About Us</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real experiences from real patients who trusted us with their dental care
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="lg:col-span-1 bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                      <img
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full rounded-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=80&width=80&text=Patient"
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-slate-300 text-sm mb-2">Age {testimonials[currentTestimonial].age}</p>
                    <p className="text-emerald-400 text-sm font-semibold">
                      {testimonials[currentTestimonial].treatment}
                    </p>
                    <div className="flex justify-center mt-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                  <Quote className="w-8 h-8 text-slate-300 mb-4" />
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentTestimonial ? "bg-slate-900" : "bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        onClick={prevTestimonial}
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-transparent"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={nextTestimonial}
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-transparent"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-800">5000+</p>
                <p className="text-sm text-emerald-600">Happy Patients</p>
              </div>
              <div className="w-px h-12 bg-emerald-300"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-800">4.9★</p>
                <p className="text-sm text-emerald-600">Average Rating</p>
              </div>
              {/* <div className="w-px h-12 bg-emerald-300"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-800">15+</p>
                <p className="text-sm text-emerald-600">Years Experience</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

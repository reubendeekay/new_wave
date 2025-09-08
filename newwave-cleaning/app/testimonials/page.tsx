"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, Quote, ChevronLeft, ChevronRight, Building2, Home, Award } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Wanjiru",
    role: "Homeowner, Kilimani",
    content: "NEWWAVE has been cleaning my home for 2 years now. Their attention to detail is exceptional, and the team is always professional and punctual. I couldn't be happier with their service!",
    rating: 5,
    type: "residential",
    icon: Home,
  },
  {
    id: 2,
    name: "James Ochieng",
    role: "Office Manager, TechHub Kenya",
    content: "We switched to NEWWAVE for our office cleaning and the difference is remarkable. Our workspace is always spotless, and their eco-friendly products give us peace of mind.",
    rating: 5,
    type: "commercial",
    icon: Building2,
  },
  {
    id: 3,
    name: "Grace Muthoni",
    role: "Restaurant Owner, Westlands",
    content: "Their fumigation service saved our restaurant! We had a pest problem that other companies couldn't solve. NEWWAVE eliminated it completely and set up a prevention plan.",
    rating: 5,
    type: "commercial",
    icon: Building2,
  },
  {
    id: 4,
    name: "Peter Kamau",
    role: "Property Manager",
    content: "I manage several properties and NEWWAVE handles all our cleaning needs. Their reliability and quality of work are unmatched. They're always my first recommendation to tenants.",
    rating: 5,
    type: "commercial",
    icon: Building2,
  },
  {
    id: 5,
    name: "Lucy Njeri",
    role: "Homeowner, Lavington",
    content: "After renovation, our house was a mess. NEWWAVE's post-construction cleaning was thorough and efficient. They made our new home sparkle!",
    rating: 5,
    type: "residential",
    icon: Home,
  },
  {
    id: 6,
    name: "David Otieno",
    role: "Hotel Manager",
    content: "NEWWAVE has been our cleaning partner for 3 years. Their consistency and professionalism keep our hotel at the highest standards. Our guests always compliment our cleanliness!",
    rating: 5,
    type: "commercial",
    icon: Building2,
  },
]

const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "5000+", label: "Happy Customers" },
  { value: "10+", label: "Years of Service" },
]

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">("all")

  const filteredTestimonials = testimonials.filter(
    (t) => filter === "all" || t.type === filter
  )

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Customer Testimonials
            </h1>
            <p className="text-xl text-gray-600">
              Hear what our satisfied customers have to say about our services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-4 mb-12">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => {
                  setFilter("all")
                  setCurrentIndex(0)
                }}
              >
                All Reviews
              </Button>
              <Button
                variant={filter === "residential" ? "default" : "outline"}
                onClick={() => {
                  setFilter("residential")
                  setCurrentIndex(0)
                }}
              >
                <Home className="mr-2 h-4 w-4" />
                Residential
              </Button>
              <Button
                variant={filter === "commercial" ? "default" : "outline"}
                onClick={() => {
                  setFilter("commercial")
                  setCurrentIndex(0)
                }}
              >
                <Building2 className="mr-2 h-4 w-4" />
                Commercial
              </Button>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
                >
                  <Quote className="h-12 w-12 text-green-200 mb-6" />
                  <p className="text-xl text-gray-700 mb-8 italic">
                    "{filteredTestimonials[currentIndex].content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex mb-2">
                        {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="font-semibold text-gray-900">
                        {filteredTestimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {filteredTestimonials[currentIndex].role}
                      </div>
                    </div>
                    {(() => {
                      const IconComponent = filteredTestimonials[currentIndex].icon;
                      return <IconComponent className="h-8 w-8 text-green-600" />
                    })()}
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-green-600 w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              All Customer Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-sm text-gray-900">
                              {testimonial.name}
                            </div>
                            <div className="text-xs text-gray-600">{testimonial.role}</div>
                          </div>
                          {(() => {
                            const IconComponent = testimonial.icon;
                            return <IconComponent className="h-5 w-5 text-green-600" />
                          })()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg max-w-4xl mx-auto"
          >
            <Award className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Happy Customers
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the NEWWAVE difference and see why thousands trust us with their cleaning needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Your Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
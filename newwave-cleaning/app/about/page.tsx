"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Calendar,
  Shield,
  Leaf
} from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our top priority. We go above and beyond to exceed expectations.",
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Licensed, insured, and background-checked professionals you can count on.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "Using environmentally friendly products that are safe for your family and pets.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality cleaning services every time.",
  },
]

const milestones = [
  { year: "2014", event: "NEWWAVE Cleaning Services founded" },
  { year: "2016", event: "Expanded to commercial cleaning" },
  { year: "2018", event: "Introduced eco-friendly product line" },
  { year: "2020", event: "Launched 24/7 emergency services" },
  { year: "2023", event: "Served over 5000 happy customers" },
]

export default function AboutPage() {
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
              About NEWWAVE
            </h1>
            <p className="text-xl text-gray-600">
              Your trusted partner in creating cleaner, healthier spaces across Nairobi
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2014, NEWWAVE Cleaning Services began with a simple mission: 
                  to provide exceptional cleaning services that make a real difference in 
                  people's lives. What started as a small team has grown into one of 
                  Nairobi's most trusted cleaning companies.
                </p>
                <p>
                  Over the years, we've refined our techniques, invested in the latest 
                  equipment, and trained our team to deliver consistent, high-quality 
                  results. Our commitment to using eco-friendly products and sustainable 
                  practices sets us apart in the industry.
                </p>
                <p>
                  Today, we proudly serve thousands of homes and businesses across Nairobi, 
                  maintaining our founding principles of quality, reliability, and customer 
                  satisfaction.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Work With Us</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-green-100 rounded-lg p-6">
                    <Users className="h-8 w-8 text-green-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Expert Cleaners</div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-6">
                    <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-purple-100 rounded-lg p-6">
                    <Award className="h-8 w-8 text-purple-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">5000+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-6">
                    <Shield className="h-8 w-8 text-orange-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To transform spaces into clean, healthy environments that enhance the 
                quality of life for our clients. We strive to deliver exceptional cleaning 
                services with professionalism, integrity, and environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be Nairobi's leading cleaning service provider, recognized for our 
                commitment to excellence, innovation, and sustainable practices. We envision 
                a cleaner, healthier future for all communities we serve.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-200"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="font-bold text-green-600 mb-1">{milestone.year}</div>
                      <div className="text-sm text-gray-600">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              Join Our Growing Family
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Experience the NEWWAVE difference. Let us transform your space today!
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
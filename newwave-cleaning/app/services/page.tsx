"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ServiceStructuredData } from "@/components/seo/structured-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { 
  Home, 
  Building2, 
  Bug, 
  Sparkles,
  Sofa,
  Wind,
  Droplets,
  Building,
  Car,
  Trees,
  CheckCircle,
  ArrowRight
} from "lucide-react"

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Cleaning",
    description: "Complete home cleaning solutions for a spotless living space",
    features: [
      "Regular weekly/bi-weekly cleaning",
      "Deep cleaning services",
      "Move-in/move-out cleaning",
      "Post-construction cleanup",
      "Kitchen and bathroom sanitization",
      "Bedroom and living area cleaning"
    ],
    price: "From KSh 3,000",
    color: "green"
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional cleaning services for businesses of all sizes",
    features: [
      "Office cleaning and maintenance",
      "Retail store cleaning",
      "Restaurant and hotel cleaning",
      "Medical facility sanitization",
      "School and institution cleaning",
      "Industrial space cleaning"
    ],
    price: "Custom Quote",
    color: "blue"
  },
  {
    id: "fumigation",
    icon: Bug,
    title: "Fumigation Services",
    description: "Effective pest control solutions for homes and businesses",
    features: [
      "Termite control and prevention",
      "Rodent control",
      "Cockroach elimination",
      "Bedbug treatment",
      "Mosquito control",
      "General pest management"
    ],
    price: "From KSh 5,000",
    color: "red"
  },
  {
    id: "deep-cleaning",
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning for the most thorough results",
    features: [
      "Carpet and rug cleaning",
      "Upholstery cleaning",
      "Window and glass cleaning",
      "Floor polishing and treatment",
      "Air duct cleaning",
      "Pressure washing"
    ],
    price: "From KSh 8,000",
    color: "purple"
  }
]

const additionalServices = [
  { icon: Sofa, name: "Furniture Cleaning", desc: "Professional upholstery care" },
  { icon: Wind, name: "Air Duct Cleaning", desc: "Improve indoor air quality" },
  { icon: Droplets, name: "Water Tank Cleaning", desc: "Safe and hygienic water storage" },
  { icon: Building, name: "Post-Construction", desc: "Complete cleanup after renovation" },
  { icon: Car, name: "Vehicle Detailing", desc: "Professional car cleaning services" },
  { icon: Trees, name: "Compound Cleaning", desc: "Outdoor space maintenance" }
]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function ServicesPage() {
  return (
    <>
      <ServiceStructuredData />
      <section className="relative py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive cleaning and fumigation solutions tailored to meet your specific needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeIn}>
                <Card 
                  id={service.id}
                  className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className={`h-2 ${service.color === 'green' ? 'bg-green-500' : service.color === 'blue' ? 'bg-blue-500' : service.color === 'red' ? 'bg-red-500' : 'bg-purple-500'}`}></div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg mb-4 ${service.color === 'green' ? 'bg-green-100 text-green-600' : service.color === 'blue' ? 'bg-blue-100 text-blue-600' : service.color === 'red' ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'}`}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-semibold text-gray-500">{service.price}</span>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full group" asChild>
                        <Link href="/contact">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of specialized cleaning services to meet all your needs
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div key={service.name} variants={fadeIn}>
                <Card className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-600 transition-colors duration-300">
                          <service.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-green-50">
              Our experts are here to help you choose the perfect cleaning solution for your space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white hover:text-green-600"
                asChild
              >
                <Link href="tel:+254700123456">Call Now: +254 700 123 456</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Service Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Book Service", desc: "Contact us via phone or online form" },
                { step: "2", title: "Site Assessment", desc: "We evaluate your cleaning needs" },
                { step: "3", title: "Service Delivery", desc: "Our team performs the cleaning" },
                { step: "4", title: "Quality Check", desc: "We ensure your satisfaction" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
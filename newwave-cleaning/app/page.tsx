"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { HomeStructuredData } from "@/components/seo/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Sparkles, 
  Home, 
  Building2, 
  Bug, 
  Shield, 
  Clock, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Zap
} from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Complete home cleaning solutions tailored to your needs",
    features: ["Regular cleaning", "Deep cleaning", "Move-in/out cleaning"],
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional cleaning for offices and business premises",
    features: ["Office cleaning", "Retail spaces", "Industrial cleaning"],
  },
  {
    icon: Bug,
    title: "Fumigation Services",
    description: "Effective pest control and fumigation solutions",
    features: ["Pest control", "Termite treatment", "Sanitization"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning for spotless results",
    features: ["Carpet cleaning", "Upholstery", "Window cleaning"],
  },
]

const stats = [
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Building2, value: "500+", label: "Businesses Served" },
  { icon: Star, value: "4.9", label: "Average Rating" },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <>
      <HomeStructuredData />
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:pr-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800"
              >
                <Zap className="mr-2 h-4 w-4" />
                Trusted Cleaning Services in Nairobi
              </motion.div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Making Nairobi
                <span className="block text-green-600">Cleaner & Healthier</span>
              </h1>
              
              <p className="mb-8 text-lg text-gray-600 sm:text-xl">
                Professional cleaning and fumigation services for homes and businesses. 
                We bring sparkle to your spaces with eco-friendly solutions and expert care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right side - Hero banner image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional cleaning team at work with modern equipment"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Floating elements */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Professional Team</p>
                        <p className="text-xs text-gray-600">Licensed & Insured</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-1 text-sm font-medium text-gray-900">4.9</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="mx-auto h-8 w-8 text-green-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your specific needs
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Why Choose NEWWAVE?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 10 years of experience in the cleaning industry, we&apos;ve built a reputation 
                for excellence, reliability, and customer satisfaction.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Licensed & Insured", desc: "Fully certified and insured for your peace of mind" },
                  { icon: Clock, title: "24/7 Availability", desc: "Emergency cleaning services available round the clock" },
                  { icon: Award, title: "Eco-Friendly Products", desc: "Safe, non-toxic cleaning solutions for your family" },
                  { icon: Users, title: "Trained Professionals", desc: "Expert cleaners with extensive training and background checks" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                        <item.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Clean and organized modern home interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-green-400/70 flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Get 20% Off</h3>
                    <p className="text-lg mb-6 text-green-50">First-time customers enjoy exclusive discounts on all services</p>
                    <Button size="lg" variant="secondary" asChild>
                      <Link href="/contact">Claim Offer</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready for a Cleaner Space?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Join thousands of satisfied customers who trust NEWWAVE for their cleaning needs. 
              Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-green-600" asChild>
                <Link href="tel:+254700123456">Call: +254 700 123 456</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
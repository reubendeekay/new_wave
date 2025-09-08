"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Sparkles,
  ChevronDown,
  Home,
  Building2,
  Bug,
  Users,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Users },
  { 
    name: "Services", 
    href: "/services", 
    icon: Sparkles,
    subItems: [
      { name: "Residential Cleaning", href: "/services#residential" },
      { name: "Commercial Cleaning", href: "/services#commercial" },
      { name: "Fumigation", href: "/services#fumigation" },
      { name: "Deep Cleaning", href: "/services#deep-cleaning" }
    ]
  },
  { name: "Testimonials", href: "/testimonials", icon: MessageSquare },
  { name: "Contact", href: "/contact", icon: Phone },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100" 
          : "bg-gradient-to-b from-green-50/80 via-white/70 to-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo with animation */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                animate={{ 
                  rotate: scrolled ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-2">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </motion.div>
              <div>
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: scrolled ? "100% 50%" : "0% 50%",
                  }}
                  transition={{ duration: 2 }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  NEWWAVE
                </motion.span>
                <span className="block text-xs font-medium text-gray-600">Cleaning Services</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const hasSubItems = item.subItems && item.subItems.length > 0
              
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 rounded-lg group ${
                      isActive 
                        ? "text-green-600" 
                        : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {hasSubItems && (
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    )}
                    
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Hover background */}
                    <motion.div
                      className="absolute inset-0 bg-green-50 rounded-lg -z-10"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasSubItems && hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {item.subItems.map((subItem, index) => (
                          <motion.div
                            key={subItem.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
            
            {/* CTA Button with animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Button 
                size="sm" 
                asChild
                className="relative overflow-hidden group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Link href="/contact">
                  <motion.span
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.2 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Get Quote
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-3 text-base font-medium rounded-lg transition-all ${
                          isActive
                            ? "bg-green-50 text-green-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.div 
                  className="px-3 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                >
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600" asChild>
                    <Link href="/contact">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Get Free Quote
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Residential Cleaning", href: "/services#residential" },
    { name: "Commercial Cleaning", href: "/services#commercial" },
    { name: "Fumigation Services", href: "/services#fumigation" },
    { name: "Deep Cleaning", href: "/services#deep-cleaning" },
  ],
  social: [
    { name: "Facebook", Icon: Facebook, href: "#" },
    { name: "Twitter", Icon: Twitter, href: "#" },
    { name: "Instagram", Icon: Instagram, href: "#" },
    { name: "LinkedIn", Icon: Linkedin, href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-400">NEWWAVE</span>
            </Link>
            <p className="text-sm text-gray-400">
              Professional cleaning and fumigation services in Nairobi. We make your spaces sparkle!
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Westlands, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="tel:+254700123456" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                  +254 700 123 456
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <a href="mailto:info@newwavecleaning.co.ke" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                  info@newwavecleaning.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} NEWWAVE Cleaning Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
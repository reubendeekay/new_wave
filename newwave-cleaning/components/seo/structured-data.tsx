export function HomeStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://newwavecleaning.co.ke/#organization",
        "name": "NEWWAVE Cleaning Services",
        "alternateName": "NEWWAVE",
        "url": "https://newwavecleaning.co.ke",
        "logo": {
          "@type": "ImageObject",
          "url": "https://newwavecleaning.co.ke/logo.png",
          "width": 300,
          "height": 100
        },
        "description": "Professional cleaning and fumigation services in Nairobi, Kenya. Residential, commercial, and deep cleaning solutions.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Westlands",
          "addressLocality": "Nairobi",
          "addressCountry": "Kenya"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254700123456",
          "contactType": "customer service",
          "availableLanguage": ["English", "Swahili"]
        },
        "sameAs": [
          "https://facebook.com/newwavecleaning",
          "https://twitter.com/newwavecleaning",
          "https://instagram.com/newwavecleaning"
        ],
        "areaServed": {
          "@type": "City",
          "name": "Nairobi"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://newwavecleaning.co.ke/#website",
        "url": "https://newwavecleaning.co.ke",
        "name": "NEWWAVE Cleaning Services",
        "description": "Professional cleaning and fumigation services in Nairobi",
        "publisher": {
          "@id": "https://newwavecleaning.co.ke/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://newwavecleaning.co.ke/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://newwavecleaning.co.ke/#localbusiness",
        "name": "NEWWAVE Cleaning Services",
        "image": "https://newwavecleaning.co.ke/og-image.jpg",
        "telephone": "+254700123456",
        "email": "info@newwavecleaning.co.ke",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Westlands",
          "addressLocality": "Nairobi",
          "addressCountry": "Kenya"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "KSh 3,000 - KSh 50,000",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "847"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function ServiceStructuredData() {
  const services = [
    {
      "@type": "Service",
      "name": "Residential Cleaning",
      "description": "Complete home cleaning solutions tailored to your needs",
      "provider": { "@id": "https://newwavecleaning.co.ke/#organization" },
      "areaServed": "Nairobi",
      "serviceType": "House Cleaning"
    },
    {
      "@type": "Service", 
      "name": "Commercial Cleaning",
      "description": "Professional cleaning for offices and business premises",
      "provider": { "@id": "https://newwavecleaning.co.ke/#organization" },
      "areaServed": "Nairobi",
      "serviceType": "Office Cleaning"
    },
    {
      "@type": "Service",
      "name": "Fumigation Services", 
      "description": "Effective pest control and fumigation solutions",
      "provider": { "@id": "https://newwavecleaning.co.ke/#organization" },
      "areaServed": "Nairobi",
      "serviceType": "Pest Control"
    },
    {
      "@type": "Service",
      "name": "Deep Cleaning",
      "description": "Intensive cleaning for spotless results",
      "provider": { "@id": "https://newwavecleaning.co.ke/#organization" },
      "areaServed": "Nairobi", 
      "serviceType": "Deep Cleaning"
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
    />
  )
}
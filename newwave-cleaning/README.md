# NEWWAVE Cleaning Services Website

A modern, SEO-optimized website for NEWWAVE Cleaning Services built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🚀 **Modern Stack**: Next.js 15 App Router, TypeScript, Tailwind CSS
- 🎨 **Beautiful UI**: shadcn/ui components with custom styling
- ✨ **Smooth Animations**: Framer Motion for engaging user experience
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🔍 **SEO Optimized**: Meta tags, Open Graph, JSON-LD structured data
- ⚡ **Fast Performance**: Optimized images and minimal external dependencies
- ♿ **Accessible**: Semantic HTML with ARIA labels and keyboard navigation
- 🗺️ **Sitemap & Robots**: Auto-generated sitemap.xml and robots.txt

## Pages

- **Home** - Hero section with services overview and CTAs
- **About** - Company story, values, and team information  
- **Services** - Comprehensive service listings with pricing
- **Testimonials** - Customer reviews with interactive carousel
- **Contact** - Contact form and business information

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd newwave-cleaning
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will automatically detect it's a Next.js project
4. Click "Deploy" - your site will be live in minutes!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder and `package.json` to your hosting provider

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## SEO Configuration

The site includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated sitemap at `/sitemap.xml`
- **Robots.txt**: Search engine crawling instructions at `/robots.txt`

## Customization

### Colors

The site uses a green color scheme. To change:

1. Update the Tailwind config in `tailwind.config.js`
2. Modify the CSS variables in `app/globals.css`
3. Update component color classes throughout the codebase

### Content

- Update company information in the layout components
- Modify service offerings in `/app/services/page.tsx`
- Edit testimonials in `/app/testimonials/page.tsx`
- Customize contact information in `/app/contact/page.tsx`

### Contact Form

The contact form currently simulates submission. To add real functionality:

1. Create an API route in `/app/api/contact/route.ts`
2. Integrate with email service (Resend, SendGrid, etc.)
3. Update the form submission handler in `/app/contact/page.tsx`

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel-optimized

## Performance

The site is optimized for performance with:

- Server-side rendering (SSR)
- Image optimization
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Lazy loading for images and components

## Browser Support

- Chrome 88+
- Firefox 84+  
- Safari 14+
- Edge 88+

## License

This project is proprietary and confidential to NEWWAVE Cleaning Services.

## Support

For technical support or questions, please contact the development team.
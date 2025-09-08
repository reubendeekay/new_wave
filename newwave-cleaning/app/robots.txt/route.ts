export async function GET() {
  const robots = `User-agent: *
Allow: /

# Disallow admin pages if any exist in the future
Disallow: /admin/
Disallow: /api/

# Sitemap location
Sitemap: https://newwavecleaning.co.ke/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
/**
 * SEO Utilities - Helper functions for SEO optimization
 */

/**
 * Add structured data (JSON-LD) to page
 */
export const addStructuredData = (data) => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

/**
 * Service/Product structured data
 */
export const getServiceSchema = (name, description, image, url) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  image,
  url,
  provider: {
    '@type': 'Organization',
    name: 'PatentLex',
    url: 'https://patentlex.uz',
  },
})

/**
 * Article/Blog structured data
 */
export const getArticleSchema = (
  title,
  description,
  image,
  author,
  datePublished,
  dateModified
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  image,
  author: {
    '@type': 'Person',
    name: author,
  },
  datePublished,
  dateModified,
})

/**
 * LocalBusiness structured data
 */
export const getBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'PatentLex',
  image: 'https://patentlex.uz/patent_card_bg.png',
  description: 'Professional patent registration and legal services',
  url: 'https://patentlex.uz',
  telephone: '+998881470081',
  email: 'patentlextashkent@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alisher Navoiy ko‘chasi, 2-uy (Orda maydoni)',
    addressLocality: 'Tashkent',
    addressRegion: 'Toshkent shahri',
    addressCountry: 'UZ',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
})

/**
 * Review/Rating structured data
 */
export const getReviewSchema = (
  name,
  author,
  rating,
  description,
  datePublished
) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'PatentLex',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: rating,
  },
  author: {
    '@type': 'Person',
    name: author,
  },
  reviewBody: description,
  datePublished,
})

/**
 * Generate proper heading hierarchy
 */
export const validateHeadingStructure = (element = document.body) => {
  const headings = Array.from(
    element.querySelectorAll('h1, h2, h3, h4, h5, h6')
  )
  const issues = []

  if (headings.length === 0) {
    issues.push('No headings found on page')
  } else if (!headings.some((h) => h.tagName === 'H1')) {
    issues.push('Missing H1 tag')
  }

  let previousLevel = 1
  headings.forEach((heading, index) => {
    const currentLevel = parseInt(heading.tagName[1])
    if (currentLevel - previousLevel > 1) {
      issues.push(
        `Heading hierarchy issue at ${heading.tagName}: skipped from H${previousLevel} to H${currentLevel}`
      )
    }
    previousLevel = currentLevel
  })

  return issues
}

/**
 * Convert text to SEO-friendly slug
 */
export const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Calculate reading time (in minutes)
 */
export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Preload images for better performance
 */
export const preloadImage = (src) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = src
  document.head.appendChild(link)
}

/**
 * Check for accessibility issues that affect SEO
 */
export const checkAccessibility = (element = document.body) => {
  const issues = []

  // Check for images without alt text
  const imagesWithoutAlt = element.querySelectorAll('img:not([alt])')
  if (imagesWithoutAlt.length > 0) {
    issues.push(`Found ${imagesWithoutAlt.length} images without alt text`)
  }

  // Check for links without text
  const emptyLinks = element.querySelectorAll('a:empty')
  if (emptyLinks.length > 0) {
    issues.push(`Found ${emptyLinks.length} empty links`)
  }

  // Check for buttons without aria-label or text
  const buttonsWithoutLabel = Array.from(
    element.querySelectorAll('button')
  ).filter((btn) => !btn.textContent.trim() && !btn.getAttribute('aria-label'))
  if (buttonsWithoutLabel.length > 0) {
    issues.push(`Found ${buttonsWithoutLabel.length} buttons without labels`)
  }

  return issues
}

export default {
  addStructuredData,
  getServiceSchema,
  getArticleSchema,
  getBusinessSchema,
  getReviewSchema,
  validateHeadingStructure,
  slugify,
  calculateReadingTime,
  preloadImage,
  checkAccessibility,
}

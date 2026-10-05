import { useEffect } from 'react'

/**
 * MetaManager Component - Updates meta tags dynamically
 * Use this to set custom meta tags for different pages/sections
 */
export const MetaManager = ({
  title = 'PatentLex - Professional Patent & Legal Services',
  description = 'Get expert patent registration, legal consultation, and intellectual property services.',
  image = 'https://patentlex.uz/patent_card_bg.png',
  url = 'https://patentlex.uz',
  type = 'website',
  keywords = 'patent registration, legal services, intellectual property',
}) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.name = name
        document.head.appendChild(tag)
      }
      tag.content = content
    }

    const updatePropertyTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', property)
        document.head.appendChild(tag)
      }
      tag.content = content
    }

    // Update standard meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('og:title', title)

    // Update Open Graph tags
    updatePropertyTag('og:description', description)
    updatePropertyTag('og:image', image)
    updatePropertyTag('og:url', url)
    updatePropertyTag('og:type', type)

    // Update Twitter tags
    updatePropertyTag('twitter:title', title)
    updatePropertyTag('twitter:description', description)
    updatePropertyTag('twitter:image', image)

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    // Scroll to top when meta changes
    window.scrollTo(0, 0)
  }, [title, description, image, url, type, keywords])

  return null // This component doesn't render anything
}

export default MetaManager

# 🎓 SEO Best Practices for PatentLex Development Team

## 1. CONTENT WRITING GUIDELINES

### Page Titles (60 characters max)

```
❌ Bad:   "Page"
❌ Bad:   "PatentLex"
✅ Good:  "Patent Registration Services - PatentLex"
✅ Good:  "Expert Legal Consultation for Patents"
```

**Rules**:

- Include target keyword near the beginning
- Make it descriptive and compelling
- Avoid keyword stuffing
- Unique for each page

### Meta Descriptions (155-160 characters)

```
❌ Bad:   "Welcome to our website"
❌ Bad:   "Patent registration, legal services, patents, trademarks, patents"
✅ Good:  "Get professional patent registration and legal consultation. Fast, reliable, and affordable solutions for inventors and businesses."
```

**Rules**:

- Include primary keyword
- Include call-to-action (when relevant)
- Be specific and compelling
- No keyword stuffing

### Heading Hierarchy

```jsx
// ✅ CORRECT STRUCTURE
<h1>Patent Registration Services</h1>
<h2>Types of Patents We Handle</h2>
<h3>Utility Patents</h3>
<h3>Design Patents</h3>
<h2>Our Process</h2>
<h3>Step 1: Consultation</h3>
<h3>Step 2: Documentation</h3>

// ❌ WRONG STRUCTURES
<h1>Title</h1>
<h3>Skip H2</h3>           // Skips a level
<h1>Another H1</h1>        // Multiple H1s
<h2>H2</h2>               // No H1
```

### Content Length Guidelines

```
Landing Page:    500-1000 words
Service Page:    800-1500 words
Blog Post:       1200-2500 words
About Page:      500-1000 words
```

### Keyword Optimization

```jsx
// ❌ KEYWORD STUFFING (BAD)
'Patent registration patent services patent lawyers patent consultants for your patents'

// ✅ NATURAL USAGE (GOOD)
'Our patent registration services help inventors protect their intellectual property. Our experienced patent lawyers provide expert consultation throughout the registration process.'
```

---

## 2. IMAGE OPTIMIZATION

### Image File Names

```
❌ Bad:   image1.jpg, photo.png, IMG_1234.jpg
✅ Good:  patent-registration-process.jpg
✅ Good:  lawyer-consultation-meeting.jpg
✅ Good:  intellectual-property-diagram.png
```

### Alt Text (Always Add)

```jsx
// ❌ BAD
<img src="patent.jpg" alt="image" />
<img src="service.jpg" alt="patent" />

// ✅ GOOD
<img
  src="patent-registration.jpg"
  alt="Step-by-step patent registration process from application to approval"
/>

<img
  src="lawyer-expertise.jpg"
  alt="Experienced patent lawyer reviewing intellectual property documentation in office"
/>
```

**Alt Text Rules**:

- Describe what's in the image
- Include relevant keywords naturally
- 100-125 characters ideal
- Don't start with "image of" or "picture of"
- Don't keyword stuff

### Image Formats

```
✅ Use WebP for images (best compression)
✅ Use JPEG for photographs
✅ Use PNG for graphics/logos
✅ Use SVG for icons

Consider: WebP > JPEG > PNG (in terms of performance)
```

### Image Specifications

```
Maximum file size:  100 KB per image
Recommended sizes:
- Thumbnail:       300x200px
- Featured:        1200x630px (+ 1200x700px for best practice)
- Single column:   600x400px
- Full width:      1600x900px
```

---

## 3. LINK BUILDING BEST PRACTICES

### Internal Linking

```jsx
// ✅ GOOD - Descriptive anchor text
<a href="/services/patent-registration">
  Learn about our patent registration services
</a>

// ❌ BAD - Generic anchor text
<a href="/services/patent-registration">
  Click here
</a>

// ❌ BAD - Keyword stuffing
<a href="/services/patent-registration">
  Patent registration services for patent protection patents
</a>
```

**Rules**:

- Use descriptive, natural anchor text
- Link to relevant pages
- Don't over-link (1-2 per paragraph)
- Link to important pages from homepage

### External Links

```jsx
// ✅ Only link to authoritative sources
;<a href="https://uspto.gov" rel="external">
  U.S. Patent Office
</a>

// Include rel attribute for external links
rel = 'nofollow' // For untrusted sources
rel = 'external' // For external sites
rel = 'sponsored' // For paid links
```

---

## 4. MOBILE OPTIMIZATION

### Viewport Meta Tag

```html
<!-- Already added in index.html -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Touch Targets

```css
/* Minimum 48x48 pixels for touch targets */
button,
a {
  min-height: 48px;
  min-width: 48px;
  padding: 12px 16px;
}

/* Spacing between interactive elements */
margin: 8px;
```

### Mobile-First Design

```jsx
// ✅ Think mobile FIRST, then scale up
// Tailwind example:
<div className="text-sm md:text-base lg:text-lg">
  Responsive text sizing
</div>

<img
  src="image-mobile.jpg"
  srcset="image-tablet.jpg 768w, image-desktop.jpg 1280w"
  alt="Responsive image"
/>
```

---

## 5. STRUCTURED DATA IMPLEMENTATION

### Using Our Schema Functions

```jsx
import { addStructuredData, getServiceSchema } from '@/utils/seoUtils';
import { useEffect } from 'react';

function PatentService() {
  useEffect(() => {
    addStructuredData(getServiceSchema(
      'Patent Registration',
      'Complete patent registration service with expert consultation',
      'https://yourdomain.com/patent-service.jpg',
      'https://yourdomain.com/services/patent-registration'
    ));
  }, []);

  return (
    // Component JSX
  );
}
```

### Rich Snippets

- Services get ⭐ ratings
- Articles show publication date
- Reviews display star ratings
- FAQs expand in search results

---

## 6. PERFORMANCE OPTIMIZATION

### Bundle Size

```bash
# Check build size
npm run build
# Output should show: dist x.xxMB

# Target: < 500KB for initial load
```

### Lazy Loading Images

```jsx
// ✅ Lazy load below-fold images
<img src="product.jpg" alt="product" loading="lazy" />
```

### Code Splitting

```jsx
// ✅ Dynamic imports for large components
const BlogComponent = React.lazy(() => import('./Blog'))

;<Suspense fallback={<Loading />}>
  <BlogComponent />
</Suspense>
```

---

## 7. ACCESSIBILITY (Impacts SEO)

### Semantic HTML

```jsx
// ✅ GOOD
<header>Logo and nav</header>
<nav>Navigation links</nav>
<main>Main content</main>
<article>Blog post content</article>
<section>Content section</section>
<aside>Sidebar or related links</aside>
<footer>Footer content</footer>

// ❌ BAD
<div id="header">
<div class="nav">
<div class="main">
```

### ARIA Labels

```jsx
// ✅ For icon-only buttons
<button aria-label="Close menu">
  <XIcon />
</button>

// ✅ For form fields
<label htmlFor="email">Email Address</label>
<input id="email" type="email" />
```

### Color Contrast

```
✅ Minimum WCAG AA: 4.5:1 ratio
✅ Large text: 3:1 ratio

Test at: https://webaim.org/resources/contrastchecker/
```

---

## 8. SECURITY & TRUST SIGNALS

### SSL/HTTPS

```
✅ All pages must be HTTPS
✅ No mixed HTTP/HTTPS content
```

### Trust Badges

```jsx
// Display trust indicators:
<img src="ssl-badge.png" alt="SSL Secure" />
<p>256-bit encryption</p>
<p>Privacy Policy compliant</p>
```

### Security Headers (Already in .htaccess)

```
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 9. TESTING CHECKLIST

### Before Publishing Content

- [ ] Title: 50-60 characters, includes keyword
- [ ] Meta description: 155-160 characters
- [ ] H1 present and unique
- [ ] Heading hierarchy correct
- [ ] All images have alt text
- [ ] Internal links are descriptive
- [ ] Mobile friendly
- [ ] No broken links
- [ ] Content is original and unique
- [ ] No plagiarism

### Before Deplopy

```bash
npm run build
```

Check dist folder contains:

- [ ] index.html
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] manifest.json
- [ ] sw.js

---

## 10. MONITORING & REPORTING

### Key Metrics to Track

```
1. Organic Traffic - Session count from search
2. Keyword Rankings - Top 100 keywords tracked
3. Click-Through Rate (CTR) - From SERP
4. Bounce Rate - Single-page sessions
5. Average Session Duration - User engagement
6. Pages per Session - Content engagement
7. Conversions - Goal completions
```

### Tools to Use

```
Google Analytics 4:     https://analytics.google.com
Google Search Console:  https://search.google.com/search-console
Bing Webmaster Tools:   https://www.bing.com/webmasters
PageSpeed Insights:     https://pagespeed.web.dev
Screaming Frog:         https://www.screamingfrog.co.uk/seo-spider/
```

### Monthly Report Template

```
Reporting Period: [Month/Year]

📊 Traffic Metrics:
- Organic Traffic: X sessions (+/- Y%)
- New Users: X (+/- Y%)
- Pages/Session: X

🔍 Search Performance:
- Impressions: X
- Clicks: X
- Average CTR: X%
- Average Position: X.X

⭐ Top Performing Pages:
1. Page Title - X clicks
2. Page Title - X clicks
3. Page Title - X clicks

🎯 Improvements Made:
- Added meta tags to 5 pages
- Optimized 10 images
- Fixed heading structure on 3 pages
```

---

## 11. CONTENT CALENDAR

### Monthly Publishing Schedule

```
Week 1: Research & Planning
Week 2: Content Creation
Week 3: Optimization & Review
Week 4: Publishing & Promotion
```

### Content Ideas

- Case studies (1/month)
- How-to guides (1/month)
- Industry news (2-3/month)
- FAQ updates (fortnightly)
- Service updates (as needed)

---

## 12. COMMON MISTAKES TO AVOID

```
❌ Duplicate meta descriptions across pages
❌ Keyword stuffing in any content
❌ Broken internal links
❌ Images without alt text
❌ Multiple H1 tags per page
❌ Outdated or thin content
❌ Slow page load times
❌ Poor mobile experience
❌ No HTTPS
❌ Ignoring Search Console messages
❌ Not updating old content
❌ Purchasing links
❌ Cloaking or hidden content
❌ Auto-generated content
```

---

## Quick Reference

### File Structure

```
src/
  components/
    MetaManager.jsx      ← Use for meta tags
  utils/
    seoUtils.js          ← Use for schemas
    serviceWorkerRegister.js
public/
  robots.txt             ← Crawl rules
  sitemap.xml            ← URL list
  manifest.json          ← PWA config
  .htaccess              ← Performance
  sw.js                  ← Offline support
```

### Most Important Files to Check

1. **index.html** - Meta tags, favicons
2. **public/robots.txt** - Crawl rules
3. **public/sitemap.xml** - URL list
4. **Components** - Add MetaManager to each
5. **Images** - Proper names and alt text

---

**Remember**: SEO is a marathon, not a sprint. Consistency matters more than quick wins.

For questions, refer to `SEO_OPTIMIZATION_GUIDE.md` or `SEO_QUICK_CHECKLIST.md`

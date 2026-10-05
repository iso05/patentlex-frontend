import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'
import { notFound } from 'next/navigation'

async function getPost(id) {
  try {
    const res = await fetch(`https://api.patentlex.uz/api/posts/${id}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.post || data
  } catch (err) {
    console.error('Error fetching blog post:', err)
    return null
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch('https://api.patentlex.uz/api/posts')
    if (res.ok) {
      const data = await res.json()
      const posts = Array.isArray(data) ? data : data.posts || []
      if (posts.length > 0) {
        return posts.map(p => ({ id: String(p._id || p.id) }))
      }
    }
  } catch (err) {}
  return [{ id: '1' }]
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const post = await getPost(id)

  if (!post) {
    return {
      title: 'Maqola Topilmadi | PatentLex',
    }
  }

  const imageUrl = post.image ? `https://api.patentlex.uz/uploads/${post.image}` : 'https://patentlex.uz/logo.jpg'

  return {
    title: `${post.title} | PatentLex Blog`,
    description: post.content ? post.content.substring(0, 160) + '...' : 'PatentLex maqolasi',
    alternates: {
      canonical: `https://patentlex.uz/blog/${id}`,
    },
    openGraph: {
      title: post.title,
      description: post.content ? post.content.substring(0, 160) : '',
      url: `https://patentlex.uz/blog/${id}`,
      siteName: 'PatentLex',
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.content ? post.content.substring(0, 160) : '',
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { id } = await params
  const post = await getPost(id)

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Maqola topilmadi</h1>
        <Link href="/blog" className="inline-flex items-center gap-2 text-amber-400 font-bold hover:underline">
          <HiArrowLeft /> Blog sahifasiga qaytish
        </Link>
      </div>
    )
  }

  const imageUrl = post.image ? `https://api.patentlex.uz/uploads/${post.image}` : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: imageUrl ? [imageUrl] : [],
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'PatentLex Legal',
      url: 'https://patentlex.uz',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PatentLex',
      logo: {
        '@type': 'ImageObject',
        url: 'https://patentlex.uz/logo.jpg',
      },
    },
    description: post.content ? post.content.substring(0, 200) : '',
  }

  return (
    <article className="py-20 bg-[#07070d] text-zinc-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 mb-8 transition-colors"
        >
          <HiArrowLeft size={16} /> Barcha maqolalarga qaytish
        </Link>

        {imageUrl && (
          <div className="w-full rounded-2xl overflow-hidden mb-8 border border-white/10 max-h-[480px]">
            <img src={imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="flex items-center gap-4 text-xs text-zinc-500 font-semibold mb-4">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>•</span>
          <span className="text-amber-400/90 font-bold">PatentLex News</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mb-8">
          {post.title}
        </h1>

        <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed whitespace-pre-line text-base md:text-lg">
          {post.content}
        </div>
      </div>
    </article>
  )
}

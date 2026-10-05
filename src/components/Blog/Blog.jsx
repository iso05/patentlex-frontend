'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import api from '../../api/axios'
import { HiArrowUpRight } from 'react-icons/hi2'
import SectionHeader from '../Common/SectionHeader'
import Link from 'next/link'
import '../../i18n'

export default function Blog({ limit = null }) {
  const [showAll, setShowAll] = useState(false)
  const [posts, setPosts] = useState([])
  const { t, i18n } = useTranslation()

  useEffect(() => {
    api.get('/api/posts').then(r => setPosts(r.data.posts || [])).catch(console.error)
  }, [])

  const lang = i18n.language?.slice(0, 2) || 'uz'

  const getTitle = (post) => post[`title_${lang}`] || post.title_uz || post.title || ''
  const getContent = (post) => post[`content_${lang}`] || post.content_uz || post.content || ''

  const displayed = limit ? posts.slice(0, limit) : (showAll ? posts : posts.slice(0, 6))

  return (
    <section
      className="w-full py-28 relative overflow-hidden bg-[#0c0c12] text-zinc-100 transition-colors duration-500"
      id="portfolio"
    >
      {/* Background artwork texture */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/bg_blog.png"
          alt="IP Blog & Case Studies Background"
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c12]/80 via-[#0c0c12]/90 to-[#0c0c12]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] bg-amber-900/10" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            title={t('portfolio.title')}
            eyebrow={t('portfolio.title') || 'Case Studies'}
            className="max-w-xl"
          />

          {/* STATS - desktop inline */}
          <div className="hidden md:flex gap-8">
            {[
              { value: '120+', label: t('portfolio.stats.projects') },
              { value: '10+', label: t('portfolio.stats.experience') },
              { value: '50+', label: t('portfolio.stats.clients') },
            ].map(({ value, label }) => (
              <div key={label} className="text-right">
                <div className="text-3xl font-black text-amber-400">{value}</div>
                <div className="text-xs font-semibold tracking-wider uppercase mt-0.5 text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* POSTS GRID */}
        {posts.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-2xl h-64 animate-pulse bg-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayed.map((post, i) => (
              <Link
                key={post._id}
                href={`/blog/${post._id}`}
                className="group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 flex flex-col justify-between bg-white/4 border-white/8 hover:border-amber-400/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 backdrop-blur-md"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div>
                  {post.image && (
                    <div className="overflow-hidden h-52 bg-zinc-900">
                      <img
                        src={`https://api.patentlex.uz/uploads/${post.image}`}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="font-bold text-base leading-snug mb-2 group-hover:underline decoration-amber-400/50 text-white">
                      {getTitle(post)}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-3 mb-4 text-zinc-400">
                      {getContent(post)}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                  <span className="text-xs font-semibold text-zinc-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold transition-colors text-zinc-400 group-hover:text-amber-400">
                    {t('common1.readMore')} <HiArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!limit && posts.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 border border-amber-400/30 text-amber-400 hover:bg-amber-400/10"
            >
              {showAll ? t('common1.hide') : t('common1.showMore')}
            </button>
          </div>
        )}

        {/* MOBILE STATS */}
        <div className="flex md:hidden gap-6 justify-center mt-12 pt-8 border-t border-white/8">
          {[
            { value: '120+', label: t('portfolio.stats.projects') },
            { value: '10+', label: t('portfolio.stats.experience') },
            { value: '50+', label: t('portfolio.stats.clients') },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black text-amber-400">{value}</div>
              <div className="text-[10px] font-bold tracking-widest uppercase mt-0.5 text-zinc-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

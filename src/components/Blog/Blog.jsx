import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

export default function Blog() {
  const [showAll, setShowAll] = useState(false)
  const [posts, setPosts] = useState([])
  const [activePost, setActivePost] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts')
        setPosts(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activePost ? 'hidden' : ''
  }, [activePost])

  return (
    <section
      className="w-full bg-[#232222] py-16 relative overflow-hidden"
      id="portfolio"
    >
      <div className="container mx-auto md:px-10 px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#FCFFD4]">
            {t('portfolio.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {(showAll ? posts : posts.slice(0, 3)).map((post) => (
            <div
              key={post._id}
              onDoubleClick={() => setActivePost(post)}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* FULL IMAGE */}
              {post.image && (
                <div className="w-full h-60 bg-black/40 flex items-center justify-center overflow-hidden">
                  <img
                    src={`http://localhost:5000/uploads/${post.image}`}
                    alt={post.title}
                    className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-105"
                  />
                </div>
              )}

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {post.title}
                </h3>

                <p className="text-gray-300 text-sm mt-3 line-clamp-3">
                  {post.content}
                </p>

                <p className="text-gray-400 text-sm mt-4">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {posts.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white"
            >
              {showAll ? t('common1.hide') : t('common1.showMore')}
            </button>
          </div>
        )}

        <div className="hidden md:flex justify-center gap-8 mt-16">
          <Stat value="120+" label={t('portfolio.stats.projects')} />
          <Stat value="10+" label={t('portfolio.stats.experience')} />
          <Stat value="50+" label={t('portfolio.stats.clients')} />
        </div>
      </div>

      {activePost && (
        <PostModal post={activePost} onClose={() => setActivePost(null)} />
      )}
    </section>
  )
}

function PostModal({ post, onClose }) {
  const modalRef = useRef()

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
    >
      <div
        ref={modalRef}
        className="bg-[#1b1a1a] border border-white/10 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 text-xl"
        >
          ✕
        </button>

        {/* FULL MODAL IMAGE */}
        {post.image && (
          <div className="w-full bg-black/40 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
            <img
              src={`http://localhost:5000/uploads/${post.image}`}
              alt={post.title}
              className="max-h-[500px] max-w-full object-contain"
            />
          </div>
        )}

        <h2 className="text-3xl font-semibold text-[#FCFFD4] mb-4">
          {post.title}
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          {new Date(post.date).toLocaleDateString()}
        </p>

        <p className="text-gray-200 whitespace-pre-line">{post.content}</p>
      </div>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl shadow-lg w-1/4">
      <p className="text-3xl font-semibold text-white">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  )
}

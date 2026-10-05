'use client'

import { useEffect, useState } from 'react'
import api from '../../api/axios'
import { Calendar, Edit, Trash2, X, Check } from 'lucide-react'

export default function AdminPosts() {
  const [posts, setPosts] = useState([])
  const [editingPost, setEditingPost] = useState(null)
  const [form, setForm] = useState({
    title: '',
    content: '',
    date: '',
    image: null,
  })

  const fetchPosts = async () => {
    try {
      const res = await api.get('/api/posts')
      setPosts(res.data.posts || [])
    } catch (err) {
      console.error('Error fetching posts', err)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Haqiqatan ham bu postni o‘chirmoqchimisiz?')) return

    try {
      await api.delete(`/api/posts/${id}`)
      fetchPosts()
    } catch (err) {
      console.error('Delete error', err)
    }
  }

  const handleEditClick = (post) => {
    setEditingPost(post._id)
    setForm({
      title: post.title,
      content: post.content,
      date: post.date?.split('T')[0],
      image: null,
    })
  }

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setForm({ ...form, image: e.target.files[0] })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', form.title)
    formData.append('content', form.content)
    formData.append('date', form.date)

    if (form.image) {
      formData.append('image', form.image)
    }

    try {
      await api.put(`/api/posts/${editingPost}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      setEditingPost(null)
      fetchPosts()
    } catch (err) {
      console.error('Update error', err)
    }
  }

  const inputClass = `
    w-full bg-black border border-white/10 rounded-xl 
    px-4 py-2.5 text-sm outline-none text-white placeholder-zinc-600
    focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/25
    transition-all duration-300
  `

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <h2 className="text-lg font-bold text-white tracking-wide">Barcha postlar ro‘yxati</h2>
        <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-zinc-400 font-semibold">
          Jami: {posts.length}
        </span>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12 text-zinc-500 font-medium">
          Hozircha birorta ham post chop etilmagan.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-[#111118] border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:shadow-lg"
            >
              {editingPost === post._id ? (
                <form onSubmit={handleUpdate} className="p-6 space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 tracking-wider uppercase mb-1.5">
                      Sarlavha
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 tracking-wider uppercase mb-1.5">
                      Matn
                    </label>
                    <textarea
                      name="content"
                      value={form.content}
                      onChange={handleChange}
                      rows="4"
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 tracking-wider uppercase mb-1.5">
                        Sana
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 tracking-wider uppercase mb-1.5">
                        Yangi Rasm
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold transition hover:bg-emerald-500">
                      <Check size={14} />
                      Saqlash
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingPost(null)}
                      className="flex items-center gap-1.5 px-4 py-2 bg-zinc-700 text-zinc-300 rounded-xl text-xs font-bold transition hover:bg-zinc-600"
                    >
                      <X size={14} />
                      Bekor qilish
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div>
                    {post.image ? (
                      <div className="h-44 overflow-hidden bg-black/40 relative">
                        <img
                          src={`https://api.patentlex.uz/uploads/${post.image}`}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-44 bg-white/[0.02] border-b border-white/5 flex items-center justify-center text-zinc-600 text-xs font-medium">
                        Rasm biriktirilmagan
                      </div>
                    )}

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-semibold">
                        <Calendar size={13} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <h3 className="text-base font-bold text-white line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                        {post.content}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex gap-3 border-t border-white/[0.02] mt-auto">
                    <button
                      onClick={() => handleEditClick(post)}
                      className="flex items-center gap-1.5 px-3.5 py-2 bg-amber-400/10 text-amber-300 hover:bg-amber-400 hover:text-black rounded-xl text-xs font-bold transition-all duration-300 border border-amber-400/20"
                    >
                      <Edit size={13} />
                      Tahrirlash
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="flex items-center gap-1.5 px-3.5 py-2 bg-red-500/10 text-red-400 hover:bg-red-600 hover:text-white rounded-xl text-xs font-bold transition-all duration-300 border border-red-500/20"
                    >
                      <Trash2 size={13} />
                      O‘chirish
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

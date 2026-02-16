import { useState } from 'react'
import axios from 'axios'

export default function CreatePost() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    date: '',
    image: null,
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setForm({
        ...form,
        image: e.target.files[0],
      })
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')

    try {
      const formData = new FormData()
      formData.append('title', form.title)
      formData.append('content', form.content)
      formData.append('date', form.date)
      if (form.image) {
        formData.append('image', form.image)
      }

      await axios.post('http://localhost:5000/api/posts', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      setStatus('success')
      setForm({
        title: '',
        content: '',
        date: '',
        image: null,
      })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#181616] text-white relative overflow-hidden p-10">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#8B5E3C]/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C49A6C]/20 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#FCFFD4] mb-10 text-center">
          Create New Portfolio Post
        </h2>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Post Title
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full p-4 bg-transparent border border-white/20 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Description
              </label>
              <textarea
                name="content"
                rows="6"
                value={form.content}
                onChange={handleChange}
                className="w-full p-4 bg-transparent border border-white/20 rounded-xl resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Publish Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-4 bg-transparent border border-white/20 rounded-xl"
                required
              />
            </div>

            {/* 🔥 IMAGE INPUT */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-4 bg-transparent border border-white/20 rounded-xl"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#FCFFD4] text-black font-semibold"
            >
              Publish Post
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center">
                ✔ Post created successfully
              </p>
            )}

            {status === 'error' && (
              <p className="text-red-400 text-center">✖ Error creating post</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

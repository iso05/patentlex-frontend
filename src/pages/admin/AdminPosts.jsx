import { useEffect, useState } from 'react'
import axios from 'axios'

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
    const res = await axios.get('http://localhost:5000/api/posts')
    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this post?')) return

    await axios.delete(`http://localhost:5000/api/posts/${id}`, {
      withCredentials: true,
    })

    fetchPosts()
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
      formData.append('image', form.image) // 🔥 MUHIM
    }

    try {
      await axios.put(
        `http://localhost:5000/api/posts/${editingPost}`,
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      setEditingPost(null)
      fetchPosts()
    } catch (err) {
      console.error('Update error', err)
    }
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">All Posts</h2>

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white/5 border border-white/10 p-6 rounded-xl"
          >
            {editingPost === post._id ? (
              <form onSubmit={handleUpdate} className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-white/20 rounded"
                />

                <textarea
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 bg-black border border-white/20 rounded"
                />

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-white/20 rounded"
                />

                {/* IMAGE UPDATE */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-white/20 rounded"
                />

                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-green-600 rounded">
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={() => setEditingPost(null)}
                    className="px-4 py-2 bg-gray-600 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                {post.image && (
                  <img
                    src={`http://localhost:5000/uploads/${post.image}`}
                    alt={post.title}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                )}

                <h3 className="text-xl font-semibold">{post.title}</h3>

                <p className="text-gray-400 mt-2 line-clamp-2">
                  {post.content}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {new Date(post.date).toLocaleDateString()}
                </p>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleEditClick(post)}
                    className="px-4 py-2 bg-blue-600 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(post._id)}
                    className="px-4 py-2 bg-red-600 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

import { useState } from 'react'
import LogoutButton from './LogoutButton'
import CreatePost from './CreatePost'
import AdminPosts from './AdminPosts'

export default function AdminLayout() {
  const [activeTab, setActiveTab] = useState('create')

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex">
      {/* SIDEBAR */}
      <aside
        className="
        w-64 bg-[#141414] 
        border-r border-white/10 
        p-6 hidden md:block
      "
      >
        <h2 className="text-xl font-semibold text-[#FCFFD4] mb-10">
          Patentlex Admin
        </h2>

        <nav className="space-y-4">
          <button
            onClick={() => setActiveTab('create')}
            className={`
              w-full text-left px-4 py-3 rounded-xl transition
              ${
                activeTab === 'create'
                  ? 'bg-[#95803D] text-white'
                  : 'hover:bg-white/10 text-gray-400'
              }
            `}
          >
            ➕ Create Post
          </button>

          <button
            onClick={() => setActiveTab('posts')}
            className={`
              w-full text-left px-4 py-3 rounded-xl transition
              ${
                activeTab === 'posts'
                  ? 'bg-[#95803D] text-white'
                  : 'hover:bg-white/10 text-gray-400'
              }
            `}
          >
            📄 All Posts
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-10">
        {/* TOP HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold text-[#FCFFD4]">
            Admin Dashboard
          </h1>
          <LogoutButton />
        </div>

        {/* CONTENT AREA */}
        <div
          className="
          bg-white/5 
          backdrop-blur-xl 
          border border-white/10 
          rounded-3xl 
          p-6 md:p-10
        "
        >
          {activeTab === 'create' && <CreatePost />}
          {activeTab === 'posts' && <AdminPosts />}
        </div>
      </div>
    </div>
  )
}

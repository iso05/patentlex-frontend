import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/api/auth/login", form);
      navigate("/admin"); // ✅ cookie bor, token shart emas
    } catch (err) {
      setError("Username yoki parol noto‘g‘ri");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#141414] to-black text-white px-4">
      
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">
        
        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-center mb-2 text-[#FCFFD4]">
          Admin Panel
        </h2>
        <p className="text-center text-gray-400 mb-8 text-sm">
          Faqat ruxsat etilgan foydalanuvchilar uchun
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="text-sm text-gray-400">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="mt-2 w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-[#FCFFD4] transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-2 w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-[#FCFFD4] transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#FCFFD4]/10 border border-[#FCFFD4]/30 text-[#FCFFD4] font-medium hover:bg-[#FCFFD4]/20 transition disabled:opacity-50"
          >
            {loading ? "Tekshirilmoqda..." : "Kirish"}
          </button>
        </form>
      </div>
    </div>
  );
}

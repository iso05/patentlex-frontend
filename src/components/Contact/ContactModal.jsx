import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export default function ContactModal({ open, onClose }) {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  /* 🔒 Scroll lock + scroll close */
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const closeOnScroll = () => onClose();
    window.addEventListener("scroll", closeOnScroll);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_fhubtfj",      // 🔑 service ID
        "template_xsqncwa",     // 🔑 template ID
        form,
        "82yaYlHvi7sjqcXzI"      // 🔑 public key
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
      {/* MODAL */}
      <div className="relative w-full max-w-xl bg-[#1b1a1a] border border-white/10 rounded-3xl p-8 md:p-10">
        
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/70 hover:text-white"
        >
          <FiX size={26} />
        </button>

        <h3 className="text-2xl text-white font-medium mb-6 text-center">
          {t("contact.formTitle")}
        </h3>

        <form onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder={t("contact.name")}
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-400 text-white py-3 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("contact.email")}
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-400 text-white py-3 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder={t("contact.message")}
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-400 text-white py-3 outline-none"
            required
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition disabled:opacity-50"
          >
            {status === "loading"
              ? t("contact.sending")
              : t("contact.send")}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              {t("contact.success")}
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              {t("contact.error")}
            </p>
          )}
        </form>

        <p className="text-gray-400 text-xs mt-4 text-center">
          {t("contact.policy")}
        </p>
      </div>
    </div>
  );
}

import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_fhubtfj",
        "template_xsqncwa",
        form,
        "82yaYlHvi7sjqcXzI"
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#1b1a1a] py-24 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#A97458]/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C49A6C]/20 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl text-[#FCFFD4] font-semibold mb-20">
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          
          {/* LEFT */}
          <div>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/10">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-80 md:h-96"
              />
            </div>

            <div className="mt-6 text-gray-300 space-y-1">
              <p className="text-lg font-medium">{t("contact.city")}</p>
              <p>{t("contact.workdays")}</p>
              <p>{t("contact.weekend")}</p>

              <a
                href="tel:+998881470081"
                className="block text-xl mt-3 text-white font-semibold hover:underline"
              >
                +998-88-147-00-81
              </a>

              <a
                href="mailto:patentlextashkent@gmail.com"
                className="text-gray-400 hover:text-white transition"
              >
                patentlextashkent@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-white/10 rounded-3xl p-10 bg-white/5 backdrop-blur-xl">
            <h3 className="text-2xl text-white font-medium mb-6">
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
                <p className="text-green-400 text-sm">
                  {t("contact.success")}
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  {t("contact.error")}
                </p>
              )}
            </form>

            <p className="text-gray-400 text-xs mt-4 leading-relaxed">
              {t("contact.policy")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

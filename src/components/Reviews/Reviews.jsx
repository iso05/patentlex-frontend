import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { reviews } from "./reviewsData";

export default function Reviews() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const slider = setInterval(next, 6000);
    return () => clearInterval(slider);
  }, []);

  return (
    <section
      id="reviews"
      className="w-full bg-[#1c1b1b] py-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-24 left-12 w-[450px] h-[450px] bg-[#8B5E3C]/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-20 w-[400px] h-[400px] bg-[#A97458]/20 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#FCFFD4]">
            {t("reviews.title")}
          </h2>
          <p className="mt-4 text-purple-200 text-lg max-w-2xl mx-auto">
            {t("reviews.subtitle")}
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center transition-all duration-500">
            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                key={reviews[current].image}
                src={reviews[current].image}
                alt={t(`reviews.items.${reviews[current].id}.name`)}
                className="w-full max-w-md rounded-3xl shadow-2xl object-cover transition-all duration-700"
              />
            </div>

            {/* TEXT */}
            <div
              key={reviews[current].id}
              className="transition-all duration-500"
            >
              <p className="text-gray-200 text-2xl md:text-3xl leading-snug">
                “{t(`reviews.items.${reviews[current].id}.text`)}”
              </p>

              <div className="mt-8">
                <p className="text-white text-xl font-semibold">
                  {t(`reviews.items.${reviews[current].id}.name`)}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {t(`reviews.items.${reviews[current].id}.role`)}
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import "../../Custom/Custom.css";
import { items } from "./servisecData";
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";
import ServiceModal from "./ServiceModal";

function Services() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState("jur");
  const [activeService, setActiveService] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="services" className="py-20 min-h-screen bgGradient">
      <div className="container flex flex-col justify-around h-full mx-auto px-4 md:px-10">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#FCFFD4] mb-10 text-center">
          {t("services.title")}
        </h2>

        {/* SWITCH */}
        <div className="flex w-full justify-center items-center gap-4 pb-10">
          <button
            onClick={() => setActive("fiz")}
            className={`text-sm md:text-lg transition ${
              active === "fiz" ? "text-[#FCFFD4]" : "text-white/40"
            }`}
          >
            {t("services.forIndividuals")}
          </button>

          <div className="relative w-28 flex items-center">
            <div
              className="absolute top-1/2 -translate-y-1/2 h-0.5 w-full bg-linear-to-r from-[#FCFFD4] to-transparent transition-transform duration-500"
              style={{
                transform: active === "fiz" ? "scaleX(0)" : "scaleX(1)",
                transformOrigin: active === "fiz" ? "right" : "left",
              }}
            />
            <div
              className={`absolute h-2 w-2 rounded-full bg-[#FCFFD4] transition-all duration-500 ${
                active === "fiz" ? "left-0 opacity-100" : ""
              } ${active === "jur" ? "right-0 opacity-100" : ""}`}
            />
          </div>

          <button
            onClick={() => setActive("jur")}
            className={`text-sm md:text-lg transition ${
              active === "jur" ? "text-[#FCFFD4]" : "text-white/40"
            }`}
          >
            {t("services.forCompanies")}
          </button>
        </div>

        {/* SERVICES GRID */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center overflow-hidden transition-all duration-500"
          style={{
            maxHeight: isMobile ? (showAll ? "2000px" : "650px") : "2000px",
          }}
        >
          {items.map((item) => (
            <div className="w-full max-w-sm" key={item.id}>
              <ServiceCard
                icon={item.icon}
                title={t(`services.${item.id}.title`)}
                body={t(`services.${item.id}.short`)}
                onOpen={() => setActiveService(item.id)}
                isMobile={isMobile}
              />
            </div>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        {isMobile && (
          <div className="flex justify-center mt-10">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="border border-[#FCFFD4]/40 text-[#FCFFD4] px-6 py-3 rounded-xl hover:bg-white/10 transition"
              >
                {t("common.showMore")}
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="border border-[#FCFFD4]/40 text-[#FCFFD4] px-6 py-3 rounded-xl hover:bg-white/10 transition"
              >
                {t("common.hide")}
              </button>
            )}
          </div>
        )}
      </div>

      {/* MODAL */}
      <ServiceModal
        open={!!activeService}
        onClose={() => setActiveService(null)}
        title={activeService ? t(`services.${activeService}.title`) : ""}
        body={activeService ? t(`services.${activeService}.full`) : ""}
      />
    </section>
  );
}

export default Services;

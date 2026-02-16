import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/images/logo.jpg";
import { MdOutlineLanguage, MdOutlineMailOutline } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneFlip } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [openLanguage, setOpenLanguage] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: "uz", label: "Uzbek" },
    { code: "ru", label: "Русский" },
    { code: "en", label: "English" },
  ];

  const [currentLang, setCurrentLang] = useState(languages[0]);

  // ✅ SCROLL → CLOSE MENU & LANGUAGE (MOBILE FIX)
  useEffect(() => {
    const closeAll = () => {
      setOpen(false);
      setOpenLanguage(false);
    };

    window.addEventListener("scroll", closeAll);
    return () => window.removeEventListener("scroll", closeAll);
  }, []);

  const menu = [
    { key: "home", link: "#home" },
    { key: "services", link: "#services" },
    { key: "team", link: "#team" },
    { key: "portfolio", link: "#portfolio" },
    { key: "reviews", link: "#reviews" },
    { key: "contact", link: "#contact" },
  ];
  const { t } = useTranslation();
  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="relative text-[#d4d4d3] items-center hidden lg:flex justify-between pt-2 z-50 container mx-auto px-10 pb-2">
        <div className="flex gap-15 items-center">
          {/* LANGUAGE */}
          <div className="relative">
            <button
              onClick={() => setOpenLanguage((prev) => !prev)}
              className="flex items-center gap-1 cursor-pointer hover:text-white"
            >
              <MdOutlineLanguage size={20} />
              {currentLang.label}
            </button>

            {openLanguage && (
              <div className="absolute top-full mt-2 left-0 bg-[#2b2b2b] rounded-md shadow-2xl w-36 z-50">
                {languages
                  .filter((lang) => lang.code !== currentLang.code)
                  .map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        i18n.changeLanguage(lang.code);
                        setOpenLanguage(false);
                      }}
                      className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer"
                    >
                      {lang.label}
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* LOCATION */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ташкент,+ул.+А.Навои,+30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white"
          >
            {t("location")}
            <SiGooglemaps />
          </a>
        </div>

        <div className="flex items-center gap-15">
          <a
            href="tel:+998946871910"
            className="flex items-center gap-1 hover:text-white"
          >
            <FaPhoneFlip />
            +998-94-687-19-10
          </a>
          <a
            href="tel:+998946871910"
            className="flex items-center gap-1 hover:text-white"
          >
            <FaPhoneFlip />
            +998-88-147-00-81
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=patentlextashkent@gmail.com&su=Legal%20Consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white"
          >
            <MdOutlineMailOutline size={20} />
            <span>patentlextashkent@gmail.com</span>
          </a>
        </div>
      </header>
      <div className="w-full hidden lg:block h-0.5 bg-linear-to-l from-[#FCFFD4] to-99.9% relative z-10"></div>

      {/* NAVBAR */}
      <div className="relative z-30 items-center container mx-auto px-10 hidden md:flex justify-between w-full pt-1 text-[#FCFFD4] text-lg">
        <img
          src={logo}
          alt="logotip"
          className="w-12 h-12 rounded-full object-cover"
        />

        <nav className="lg:w-2/3 w-3/4">
          <ul className="flex justify-between items-center h-full gap-6 xl:gap-0">
            {menu.map((item, index) => (
              <li key={index} className="relative group p-0.5">
                <a href={item.link} className="block py-1">
                  {t(`menu.${item.key}`)}
                </a>
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-linear-to-r from-white/70 to-transparent md:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500"></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 w-full z-30 bg-black/60 backdrop-blur-lg text-[#FCFFD4] px-5 py-4 flex justify-between items-center">
        <p className="text-lg font-semibold">PatentLex</p>

        {!open && (
          <button onClick={() => setOpen(true)} className="text-3xl">
            <FiMenu />
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-10 text-2xl text-[#FCFFD4] md:hidden">
          <FiX
            size={30}
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-4xl"
          />

          {menu.map((item) => (
            <a key={item.key} href={item.link} onClick={() => setOpen(false)}>
              {t(`menu.${item.key}`)}
            </a>
          ))}
        </div>
      )}

      {/* MOBILE LANGUAGE FLOAT BUTTON */}
      <div className="lg:hidden fixed bottom-6 right-5 z-9999">
        <div className="relative">
          {/* GLOBUS BUTTON */}
          <button
            onClick={() => setOpenLanguage((prev) => !prev)}
            className="
        w-14 h-14 rounded-full 
        bg-black/70 backdrop-blur-md
        flex items-center justify-center
        text-[#FCFFD4]
        shadow-xl
        transition-all duration-300
        hover:scale-110
        animate-pulse
      "
          >
            <MdOutlineLanguage size={26} />
          </button>

          {/* LANGUAGE OPTIONS */}
          {openLanguage && (
            <div
              className="
          absolute bottom-16 right-0
          bg-[#2b2b2b]
          rounded-xl shadow-2xl
          overflow-hidden
          animate-[fadeInUp_0.25s_ease-out]
        "
            >
              {languages
                .filter((lang) => lang.code !== currentLang.code)
                .map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang);
                      i18n.changeLanguage(lang.code);
                      setOpenLanguage(false);
                    }}
                    className="
                px-5 py-3 text-[#FCFFD4]
                hover:bg-[#3a3a3a]
                cursor-pointer
                whitespace-nowrap
              "
                  >
                    {lang.label}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;

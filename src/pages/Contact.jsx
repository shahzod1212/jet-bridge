import React from "react";
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-10 sm:py-14 lg:py-16 xl:py-20">
      <h2 className="max-w-6xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto mb-5 sm:mb-6 xl:mb-8 text-blue-900 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold uppercase break-words">
        Контакты
      </h2>

      <div className="max-w-6xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="w-full h-[45vh] min-h-[240px] max-h-[520px] sm:h-[50vh] md:h-[55vh] xl:max-h-[640px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm">
          <iframe
            title="Наш офис на карте"
            src="https://maps.google.com/maps?q=Dubai,+UAE&z=14&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 sm:mt-8 xl:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-10">
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm xl:text-base font-extrabold uppercase tracking-wide text-blue-900">
              Адрес офиса
            </h3>
            <p className="mt-1 text-sm sm:text-base xl:text-lg text-slate-600 break-words">
              Дубай, UAE
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm xl:text-base font-extrabold uppercase tracking-wide text-blue-900">
              Телефон
            </h3>
            <p className="mt-1 text-sm sm:text-base xl:text-lg text-slate-600 break-words">
              +7 777 777 77 77
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm xl:text-base font-extrabold uppercase tracking-wide text-blue-900">
              Email
            </h3>
            <p className="mt-1 text-sm sm:text-base xl:text-lg text-slate-600 break-words">
              info@mediapeace.com
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm xl:text-base font-extrabold uppercase tracking-wide text-blue-900">
              Мессенджеры и социальные сети
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3 xl:gap-4 text-orange-500">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 -ml-2 hover:text-orange-600"
              >
                <FaLinkedin className="w-6 h-6 xl:w-7 xl:h-7" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 hover:text-orange-600"
              >
                <FaInstagram className="w-6 h-6 xl:w-7 xl:h-7" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="p-2 hover:text-orange-600"
              >
                <FaTiktok className="w-5 h-5 xl:w-6 xl:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
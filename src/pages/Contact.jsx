import React from "react";
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-16">
      <h2 className="max-w-6xl mx-auto mb-6 text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase">
        Контакты
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-3xl shadow-sm">
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

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-blue-900">
                Адрес офиса
              </h3>
              <p className="mt-1 text-sm text-slate-600">Дубай, UAE</p>
            </div>
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-blue-900">
                Телефон
              </h3>
              <p className="mt-1 text-sm text-slate-600">+7 777 777 77 77</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-blue-900">
                Email
              </h3>
              <p className="mt-1 text-sm text-slate-600">info@mediapeace.com</p>
            </div>
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-blue-900">
                Мессенджеры и социальные сети
              </h3>
              <div className="mt-2 flex items-center gap-4 text-orange-500">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-orange-600"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-orange-600"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className="hover:text-orange-600"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

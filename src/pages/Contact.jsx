import React from "react";
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";

const label =
  "text-[length:clamp(0.75rem,1vw,1rem)] font-extrabold uppercase tracking-wide text-blue-900";
const value =
  "mt-1 text-[length:clamp(0.875rem,1.2vw,1.125rem)] text-slate-600 break-words";

const Contact = () => {
  return (
    <section className="w-full px-[clamp(1rem,5vw,5rem)] py-[clamp(2.5rem,5vw,5rem)]">
      <h2 className="max-w-[clamp(20rem,90vw,90rem)] mx-auto mb-[clamp(1.25rem,2vw,2rem)] text-blue-900 text-[length:clamp(1.5rem,3.4vw,3.75rem)] leading-tight font-extrabold uppercase break-words">
        Контакты
      </h2>

      <div className="max-w-[clamp(20rem,90vw,90rem)] mx-auto">
        <div className="w-full h-[clamp(15rem,40vw,36rem)] max-h-[85vh] overflow-hidden rounded-[clamp(1rem,2.4vw,2rem)] shadow-sm">
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

        <div className="mt-[clamp(1.5rem,2.5vw,2.5rem)] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[clamp(1.5rem,2.5vw,2.5rem)]">
          <div className="min-w-0">
            <h3 className={label}>Адрес офиса</h3>
            <p className={value}>Дубай, UAE</p>
          </div>

          <div className="min-w-0">
            <h3 className={label}>Телефон</h3>
            <p className={value}>+7 777 777 77 77</p>
          </div>

          <div className="min-w-0">
            <h3 className={label}>Email</h3>
            <p className={value}>info@mediapeace.com</p>
          </div>

          <div className="min-w-0">
            <h3 className={label}>Мессенджеры и социальные сети</h3>
            <div className="mt-2 flex flex-wrap items-center gap-[clamp(0.25rem,0.8vw,0.75rem)] text-orange-500 text-[length:clamp(1.5rem,2vw,1.75rem)]">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 -ml-2 hover:text-orange-600"
              >
                <FaLinkedin className="w-[1em] h-[1em]" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 hover:text-orange-600"
              >
                <FaInstagram className="w-[1em] h-[1em]" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="p-2 hover:text-orange-600"
              >
                <FaTiktok className="w-[0.85em] h-[0.85em]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

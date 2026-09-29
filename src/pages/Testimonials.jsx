import React, { useRef } from "react";
import TestimonialCard from "../components/TestimonialsCard";

const REVIEWS = [
  {
    name: "АРМАН С.,",
    location: "АЛМАТЫ",
    text: "Привезли ноутбук из Дубая за 6 дней, всё чётко, с фото, трекингом и оповещениями. Очень доволен!",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "АСЕЛЬ Б.,",
    location: "ДИРЕКТОР ТОО",
    text: "Работаем по ВЭД с компанией больше года. Надежные партнёры по логистике, всё по договору. Очень ценим стабильность и прозрачность в этом партнёрстве.",
    avatar: "https://i.pravatar.cc/150?img=56",
  },
  {
    name: "ДАНИЯР К.,",
    location: "ШЫМКЕНТ",
    text: "Заказывал автозапчасти, пришли раньше срока. Трекинг в личном кабинете реально работает, всегда знал где груз.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "АЙГЕРИМ Т.,",
    location: "АСТАНА",
    text: "Первый раз работали с карго-компанией без нервотрёпки. Всё оформили сами, документы прислали вовремя.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "ЕРЛАН М.,",
    location: "ОСНОВАТЕЛЬ ИП",
    text: "Возим партиями раз в месяц, ни одной потерянной коробки за год. Цены честные, без скрытых доплат.",
    avatar: "https://i.pravatar.cc/150?img=53",
  },
];

const arrowBase =
  "hidden sm:flex absolute top-1/2 -translate-y-1/2 z-10 w-[clamp(2.25rem,3vw,2.75rem)] h-[clamp(2.25rem,3vw,2.75rem)] items-center justify-center rounded-full shadow-md transition-colors";
const arrowIcon = "w-[45%] h-[45%]";

const Testimonials = () => {
  const scrollerRef = useRef(null);

  const scroll = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="w-full px-[clamp(1rem,5vw,5rem)] py-[clamp(2.5rem,5vw,5rem)]">
      <h2 className="max-w-[clamp(20rem,90vw,90rem)] mx-auto mb-[clamp(1.5rem,2.5vw,2.5rem)] text-blue-900 text-[length:clamp(1.5rem,3.4vw,3.75rem)] leading-tight font-extrabold uppercase break-words">
        Отзывы
      </h2>

      <div className="relative max-w-[clamp(20rem,90vw,90rem)] mx-auto">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Прокрутить влево"
          className={`${arrowBase} left-0 -translate-x-1/2 bg-white text-slate-400 border border-slate-200 hover:text-slate-600`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={arrowIcon}
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-[clamp(0.75rem,1.6vw,1.5rem)] overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory px-1 pt-1 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((review, i) => (
            <TestimonialCard key={i} {...review} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Прокрутить вправо"
          className={`${arrowBase} right-0 translate-x-1/2 bg-blue-900 text-white hover:bg-blue-800`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={arrowIcon}
          >
            <path
              d="M9 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

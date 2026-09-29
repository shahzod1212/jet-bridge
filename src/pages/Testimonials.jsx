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
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-20">
      <h2 className="max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto mb-6 sm:mb-8 xl:mb-10 text-blue-900 text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold uppercase break-words">
        Отзывы
      </h2>

      <div className="relative max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Прокрутить влево"
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-9 h-9 xl:w-11 xl:h-11 items-center justify-center rounded-full bg-white text-slate-400 shadow-md border border-slate-200 hover:text-slate-600 transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4 xl:w-5 xl:h-5"
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
          className="flex gap-3 sm:gap-4 xl:gap-6 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory px-1 pt-1 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((review, i) => (
            <TestimonialCard key={i} {...review} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Прокрутить вправо"
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-9 h-9 xl:w-11 xl:h-11 items-center justify-center rounded-full bg-blue-900 text-white shadow-md hover:bg-blue-800 transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4 xl:w-5 xl:h-5"
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
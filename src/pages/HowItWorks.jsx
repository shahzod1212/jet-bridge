import React from "react";
import InfoCard from "../components/InfoCard";
import { FileText, Warehouse, Plane, PackageCheck } from "lucide-react";

const HowItWorks = () => {
  return (
    <section
      className="relative rounded-[clamp(1rem,2vw,1.75rem)] overflow-hidden w-[calc(100%-clamp(2rem,4vw,4rem))] max-w-[clamp(20rem,90vw,90rem)] mx-auto my-[clamp(1.5rem,2.5vw,2.5rem)] sm:min-h-[70vh] lg:min-h-screen bg-cover bg-left bg-white"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}technology-header.png)`,
      }}
    >
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,2vw,2rem)] px-[clamp(1rem,4vw,3.5rem)] py-[clamp(2rem,4vw,3.5rem)]">
        <div className="sm:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-1 flex flex-col justify-center min-w-0">
          <h2 className="text-blue-900 text-[length:clamp(1.5rem,3.6vw,3.75rem)] font-extrabold uppercase leading-tight break-words">
            Как работает
            <br />
            JetBridge
          </h2>
          <p className="text-slate-600 text-[length:clamp(0.875rem,1.25vw,1.25rem)] mt-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed max-w-[clamp(20rem,32vw,36rem)]">
            От заявки до получения — весь процесс под контролем. Мы берём на
            себя всю логистику, склад, документы и доставку. Вам нужно только
            отправить груз — остальное сделаем мы.
          </p>
          <button className="flex items-center justify-center gap-[0.5em] bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-[length:clamp(0.75rem,1.1vw,1rem)] font-semibold px-[clamp(1.5rem,2.4vw,2rem)] py-[0.9em] rounded-full mt-[clamp(1.5rem,2vw,2rem)] w-full sm:w-fit">
            СВЯЗАТЬСЯ С НАМИ
            <span>↗</span>
          </button>
        </div>

        <div className="min-w-0 lg:col-start-3 lg:row-start-1">
          <InfoCard
            title="Заявка онлайн"
            text="Вы заполняете форму или пишете вватсап — быстро и без звонков"
            Icon={FileText}
          />
        </div>

        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <InfoCard
            title="Приёмка в Дубае"
            text="Груз поступает на наш склад, проверяется, фотографируется и готовится к отправке"
            Icon={Warehouse}
          />
        </div>

        <div className="min-w-0 lg:col-start-2 lg:row-start-2">
          <InfoCard
            title="Отправка авиа доставкой"
            text="Мы отправляем ваш груз ближайшим рейсом в РК. Включено: трекинг и экспортное оформление"
            Icon={Plane}
          />
        </div>

        <div className="min-w-0 lg:col-start-4 lg:row-start-2">
          <InfoCard
            title="Доставка и получение"
            text="Оформляем таможню, сообщаем статус и передаём груз получателю в Алматы. Возможна доставка по всей территории Казахстана."
            Icon={PackageCheck}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

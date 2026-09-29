import React from "react";
import InfoCard from "../components/InfoCard";
import { FileText, Warehouse, Plane, PackageCheck } from "lucide-react";

const HowItWorks = () => {
  return (
    <section
      className="relative rounded-2xl overflow-hidden min-h-screen max-w-6xl mx-auto my-10 bg-cover bg-left bg-white"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}/technology-header.png)`,
      }}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 px-6 sm:px-8 md:px-10 pt-10 pb-6">
        <div className="md:col-span-2 flex flex-col justify-center">
          <h2 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight">
            Как работает
            <br />
            JetBridge
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-4 leading-relaxed max-w-md">
            От заявки до получения — весь процесс под контролем. Мы берём на
            себя всю логистику, склад, документы и доставку. Вам нужно только
            отправить груз — остальное сделаем мы.
          </p>
          <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full mt-6 w-fit">
            СВЯЗАТЬСЯ С НАМИ
            <span>↗</span>
          </button>
        </div>

        <div className="md:col-start-3">
          <InfoCard
            title="Заявка онлайн"
            text="Вы заполняете форму или пишете вватсап — быстро и без звонков"
            Icon={FileText}
          />
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 px-6 sm:px-8 md:px-10 pb-10">
        <InfoCard
          title="Приёмка в Дубае"
          text="Груз поступает на наш склад, проверяется, фотографируется и готовится к отправке"
          Icon={Warehouse}
        />

        <InfoCard
          title="Отправка авиа доставкой"
          text="Мы отправляем ваш груз ближайшим рейсом в РК. Включено: трекинг и экспортное оформление"
          Icon={Plane}
        />

        <div />

        <InfoCard
          title="Доставка и получение"
          text="Оформляем таможню, сообщаем статус и передаём груз получателю в Алматы. Возможна доставка по всей территории Казахстана."
          Icon={PackageCheck}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
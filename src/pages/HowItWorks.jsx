import React from "react";
import InfoCard from "../components/InfoCard";
import { FileText, Warehouse, Plane, PackageCheck } from "lucide-react";

const HowItWorks = () => {
  return (
    <section
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto my-6 sm:my-8 lg:my-10 sm:min-h-[70vh] lg:min-h-screen bg-cover bg-left bg-white"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}technology-header.png)`,
      }}
    >
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 px-4 sm:px-8 md:px-10 xl:px-14 py-8 sm:py-10 xl:py-14">
        <div className="sm:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-1 flex flex-col justify-center min-w-0">
          <h2 className="text-blue-900 text-2xl min-[380px]:text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold uppercase leading-tight break-words">
            Как работает
            <br />
            JetBridge
          </h2>
          <p className="text-slate-600 text-sm sm:text-base xl:text-lg 2xl:text-xl mt-4 xl:mt-5 leading-relaxed max-w-md xl:max-w-lg 2xl:max-w-xl">
            От заявки до получения — весь процесс под контролем. Мы берём на
            себя всю логистику, склад, документы и доставку. Вам нужно только
            отправить груз — остальное сделаем мы.
          </p>
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs sm:text-sm xl:text-base font-semibold px-6 xl:px-8 py-3 xl:py-4 rounded-full mt-6 xl:mt-8 w-full sm:w-fit">
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
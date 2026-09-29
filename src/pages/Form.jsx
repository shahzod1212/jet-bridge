import React, { useState } from "react";

const inputBase =
  "w-full bg-white px-5 py-3.5 sm:px-6 sm:py-4 xl:py-5 text-base sm:text-sm xl:text-base font-semibold text-slate-700 placeholder-slate-400 shadow-sm outline-none focus:ring-2 focus:ring-blue-900/30";

const Form = () => {
  const [values, setValues] = useState({ name: "", phone: "", weight: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}form2.png)` }}
    >
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 sm:py-14 xl:py-20 max-w-xl sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl uppercase leading-tight text-blue-900 break-words">
          Оставить заявку
        </h2>
        <p className="mt-3 xl:mt-4 text-sm min-[380px]:text-base sm:text-lg md:text-2xl xl:text-3xl 2xl:text-4xl uppercase leading-snug text-blue-900">
          Заполните форму — и мы свяжемся с вами в ближайшее время
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 sm:mt-8 xl:mt-10 flex flex-col gap-3 sm:gap-4 xl:gap-5 w-full max-w-xl xl:max-w-2xl"
        >
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Имя"
            className={`${inputBase} rounded-2xl`}
          />
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Ваш телефон"
            className={`${inputBase} rounded-full`}
          />
          <input
            type="number"
            name="weight"
            value={values.weight}
            onChange={handleChange}
            placeholder="Вес груза (кг)"
            className={`${inputBase} rounded-full`}
          />

          <button
            type="submit"
            className="mt-1 w-full sm:w-1/2 rounded-full bg-blue-900 py-3.5 sm:py-4 xl:py-5 text-sm xl:text-base font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-blue-800"
          >
            Отправить заявку
          </button>

          <p className="text-xs xl:text-sm font-semibold text-slate-500 leading-relaxed">
            Нажимая на "Отправить заявку", соглашаюсь с условиями Политики
            обработки персональных данных
          </p>
        </form>
      </div>
    </section>
  );
};

export default Form;

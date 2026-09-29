import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({ name: "", phone: "", weight: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `values` to your backend / API endpoint
    console.log(values);
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/form2.png)` }}
    >
      <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl  uppercase leading-tight text-blue-900">
          Оставить заявку
        </h2>
        <p className="mt-3 text-base  sm:text-lg md:text-3xl  uppercase leading-snug text-blue-900">
          Заполните форму — и мы свяжемся с вами в ближайшее время
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-4 max-w-xl"
        >
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Имя"
            className="w-full rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-700 placeholder-slate-400 shadow-sm outline-none focus:ring-2 focus:ring-blue-900/30"
          />
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Ваш телефон"
            className="w-full rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-700 placeholder-slate-400 shadow-sm outline-none focus:ring-2 focus:ring-blue-900/30"
          />
          <input
            type="number"
            name="weight"
            value={values.weight}
            onChange={handleChange}
            placeholder="Вес груза (кг)"
            className="w-full rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-700 placeholder-slate-400 shadow-sm outline-none focus:ring-2 focus:ring-blue-900/30"
          />

          <button
            type="submit"
            className="mt-1 w-1/2 rounded-full bg-blue-900 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-blue-800"
          >
            Отправить заявку
          </button>

          <p className="text-xs font-semibold text-slate-500 leading-relaxed">
            Нажимая на "Отправить заявку", соглашаюсь с условиями Политики
            обработки персональных данных
          </p>
        </form>
      </div>
    </section>
  );
};

export default Form;
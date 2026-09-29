import React, { useState } from "react";

const inputBase =
  "w-full bg-white px-[clamp(1.25rem,2vw,1.75rem)] py-[clamp(0.875rem,1.4vw,1.25rem)] text-[length:clamp(1rem,1.2vw,1.125rem)] font-semibold text-slate-700 placeholder-slate-400 shadow-sm outline-none focus:ring-2 focus:ring-blue-900/30";

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
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-[clamp(1rem,5vw,6rem)] py-[clamp(2.5rem,5vw,5rem)] max-w-[clamp(20rem,70vw,72rem)]">
        <h2 className="text-[length:clamp(1.5rem,4.4vw,4.5rem)] uppercase leading-tight text-blue-900 break-words">
          Оставить заявку
        </h2>
        <p className="mt-[clamp(0.75rem,1vw,1rem)] text-[length:clamp(0.875rem,2.2vw,2.25rem)] uppercase leading-snug text-blue-900">
          Заполните форму — и мы свяжемся с вами в ближайшее время
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-[clamp(1.5rem,2.6vw,2.5rem)] flex flex-col gap-[clamp(0.75rem,1.4vw,1.25rem)] w-full max-w-[clamp(20rem,44vw,42rem)]"
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
            className="mt-1 w-full sm:w-1/2 rounded-full bg-blue-900 py-[clamp(0.875rem,1.4vw,1.25rem)] text-[length:clamp(0.875rem,1.1vw,1rem)] font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-blue-800"
          >
            Отправить заявку
          </button>

          <p className="text-[length:clamp(0.75rem,0.95vw,0.875rem)] font-semibold text-slate-500 leading-relaxed">
            Нажимая на "Отправить заявку", соглашаюсь с условиями Политики
            обработки персональных данных
          </p>
        </form>
      </div>
    </section>
  );
};

export default Form;

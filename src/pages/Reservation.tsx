import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

const times = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

export default function Reservation() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ date: "", time: "", players: 1, name: "", email: "", phone: "" });
  const [step, setStep] = useState(1);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Integracja Stripe
    alert("Rezerwacja przyjęta! Przejdź do płatności zaliczki przez Stripe.");
  }

  return (
    <div className="min-h-screen bg-white py-0">
      {/* HERO */}
      <section className="relative py-20 bg-white text-center shadow rounded-b-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl">{t('reservationPage.heroTitle')}</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6">{t('reservationPage.heroDesc')}</p>
      </section>
      <div className="max-w-xl mx-auto px-4 mb-16">
        <form onSubmit={handleSubmit} className="bg-green-50 rounded-xl shadow p-8 mb-8">
          <div className="mb-4">
            <label className="block font-bold mb-1 text-green-900">{t('reservationPage.formName')}</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} className="border rounded px-4 py-2 w-full" required />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1 text-green-900">{t('reservationPage.formEmail')}</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="border rounded px-4 py-2 w-full" required />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1 text-green-900">{t('reservationPage.formDate')}</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="border rounded px-4 py-2 w-full" required />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1 text-green-900">{t('reservationPage.formTime')}</label>
            <select name="time" value={form.time} onChange={handleChange} className="border rounded px-4 py-2 w-full" required>
              <option value="">{t('reservationPage.formTimeSelect')}</option>
              {times.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1 text-green-900">{t('reservationPage.formPeople')}</label>
            <input type="number" min="1" max="8" name="players" value={form.players} onChange={handleChange} className="border rounded px-4 py-2 w-full" required />
          </div>
          <div className="text-gray-700 text-sm mb-2">{t('reservationPage.formPaymentDesc')}</div>
          <button type="submit" className="bg-green-900 text-white px-8 py-3 rounded font-bold hover:bg-green-800 transition w-full">{t('reservationPage.formSend')}</button>
        </form>
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-green-900 mb-4">{t('reservationPage.howTitle')}</h2>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
            <li>{t('reservationPage.how1')}</li>
            <li>{t('reservationPage.how2')}</li>
            <li>{t('reservationPage.how3')}</li>
          </ol>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/pricing" className="px-8 py-4 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-lg">{t('reservationPage.ctaPricing')}</a>
          <a href="/contact" className="px-8 py-4 rounded border border-green-900 text-green-900 font-bold bg-white hover:bg-gray-100 transition text-lg">{t('reservationPage.ctaContact')}</a>
        </div>
      </div>
    </div>
  );
} 
import { useState } from "react";
import { useTranslation } from "react-i18next";

const faqs = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
];

export default function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white py-0">
      {/* HERO */}
      <section className="relative py-20 bg-white text-center shadow rounded-b-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl">{t('faqPage.heroTitle')}</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6">{t('faqPage.heroDesc')}</p>
      </section>
      <div className="max-w-3xl mx-auto px-4 mb-16">
        {faqs.map((item, i) => (
          <div key={i} className="mb-4 border rounded-xl shadow">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-6 py-4 font-bold text-green-900 text-lg flex justify-between items-center focus:outline-none">
              {t(item.q)}
              <span className="ml-2 text-green-700">{open === i ? '-' : '+'}</span>
            </button>
            {open === i && (
              <div className="px-6 pb-4 text-gray-700 text-base animate-fade-in">
                {t(item.a)}
              </div>
            )}
          </div>
        ))}
        <div className="text-center mt-8">
          <a href="/contact" className="px-8 py-4 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-lg">{t('faqPage.cta')}</a>
        </div>
      </div>
    </div>
  );
} 
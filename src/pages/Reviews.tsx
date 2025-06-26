import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

const reviews = [
  { author: "Anna, Wrocław", textKey: "reviews.r1", stars: 5 },
  { author: "Tomasz, Wałbrzych", textKey: "reviews.r2", stars: 4 },
  { author: "Julia, Świdnica", textKey: "reviews.r3", stars: 5 },
];

export default function Reviews() {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % reviews.length);
  const prev = () => setIdx((idx - 1 + reviews.length) % reviews.length);
  const [form, setForm] = useState({ name: "", text: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.name && form.text) {
      // Logic to add new review
      setForm({ name: "", text: "" });
    }
  }

  return (
    <div className="min-h-screen bg-white py-0">
      {/* HERO */}
      <section className="relative py-20 bg-white text-center shadow rounded-b-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl">{t('reviewsPage.heroTitle')}</h1>
        <blockquote className="italic text-xl text-gray-700 mb-6 border-l-4 border-green-900 pl-4 max-w-2xl mx-auto">{t('reviewsPage.heroQuote')}</blockquote>
      </section>
      <div className="max-w-2xl mx-auto px-4 mb-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <button onClick={prev} className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition"><span className="text-2xl">&#8592;</span></button>
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
              <div className="flex gap-1 mb-2">
                {[...Array(reviews[idx].stars)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
                {[...Array(5 - reviews[idx].stars)].map((_, i) => <span key={i} className="text-gray-300 text-xl">★</span>)}
              </div>
              <div className="text-lg text-gray-700 mb-2">{t(reviews[idx].textKey)}</div>
              <div className="font-bold text-green-900">{reviews[idx].author}</div>
            </div>
          </div>
          <button onClick={next} className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition"><span className="text-2xl">&#8594;</span></button>
        </div>
        <div className="text-center mt-8">
          <a href="mailto:biuro@gorkogolf.pl" className="px-8 py-4 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-lg">{t('reviewsPage.cta')}</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        <Badge className="mb-4 bg-green-100 text-green-900 font-serif text-lg">Opinie</Badge>
        <h1 className="text-4xl font-serif font-bold text-green-900 mb-8">Co mówią nasi goście?</h1>
        <form onSubmit={handleSubmit} className="mb-12 grid gap-4 bg-gray-50 p-6 rounded-xl shadow">
          <input type="text" placeholder="Imię i miasto" className="border rounded px-4 py-2" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
          <textarea placeholder="Twoja opinia" className="border rounded px-4 py-2" rows={3} value={form.text} onChange={e => setForm(f => ({ ...f, text: e.target.value }))} required />
          <button type="submit" className="bg-green-900 text-white px-8 py-3 rounded font-bold hover:bg-green-800 transition">Dodaj opinię</button>
        </form>
        <div className="space-y-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border rounded-xl shadow p-6">
              <div className="font-serif font-bold text-green-900 mb-2">{r.author}</div>
              <div className="text-gray-700">{t(r.textKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
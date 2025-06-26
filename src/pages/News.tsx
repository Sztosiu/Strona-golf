import { useTranslation } from "react-i18next";

const news = [
  {
    date: "03.11.2024",
    titleKey: "news.n1title",
    descKey: "news.n1desc",
    img: "/images/hero-drone.jpg"
  },
  {
    date: "07.07.2024",
    titleKey: "news.n2title",
    descKey: "news.n2desc",
    img: "/images/IMG_1885.f7b92468-1.jpg"
  },
  {
    date: "15.08.2024",
    titleKey: "news.n3title",
    descKey: "news.n3desc",
    img: "/images/IMG_1624.c2a6f471-1.webp"
  },
];

export default function News() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white py-0">
      {/* HERO */}
      <section className="relative py-20 bg-white text-center shadow rounded-b-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl">{t('newsPage.heroTitle')}</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6">{t('newsPage.heroDesc')}</p>
      </section>
      <div className="max-w-3xl mx-auto px-4 mb-16 space-y-8">
        {news.map((n, i) => (
          <div key={i} className="bg-white border rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center">
            <img src={n.img} alt="news" className="w-32 h-24 object-cover rounded-xl mb-4 md:mb-0" />
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-2">{n.date}</div>
              <div className="font-serif font-bold text-green-900 mb-1 text-lg">{t(n.titleKey)}</div>
              <div className="text-gray-700">{t(n.descKey)}</div>
            </div>
          </div>
        ))}
        <div className="text-center mt-8">
          <a href="mailto:biuro@gorkogolf.pl" className="px-8 py-4 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-lg">{t('newsPage.cta')}</a>
        </div>
      </div>
    </div>
  );
} 
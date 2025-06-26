import { useTranslation } from "react-i18next";

const offers = [
  { icon: "🏌️", titleKey: "offer.lessonsTitle", descKey: "offer.lessonsDesc" },
  { icon: "🏆", titleKey: "offer.tournamentsTitle", descKey: "offer.tournamentsDesc" },
  { icon: "👨‍👩‍👧‍👦", titleKey: "offer.familyTitle", descKey: "offer.familyDesc" },
  { icon: "🎓", titleKey: "offer.academyTitle", descKey: "offer.academyDesc" },
];

export default function Offer() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 py-0">
      {/* HERO */}
      <section className="relative py-20 bg-white text-center shadow rounded-b-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl">{t('offerPage.heroTitle')}</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6">{t('offerPage.heroDesc')}</p>
      </section>

      {/* OFERTA */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-serif font-bold text-green-900 mb-8 text-center">{t('offerPage.offersTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {offers.map((o, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
              <span className="text-5xl mb-4">{o.icon}</span>
              <div className="font-bold text-lg text-green-900 mb-2 text-center">{t(o.titleKey)}</div>
              <div className="text-gray-700 text-center text-base">{t(o.descKey)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DLACZEGO WARTO */}
      <section className="max-w-3xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-serif font-bold text-green-900 mb-6 text-center">{t('offerPage.whyTitle')}</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>{t('offerPage.why1')}</li>
          <li>{t('offerPage.why2')}</li>
          <li>{t('offerPage.why3')}</li>
        </ul>
        <div className="text-center">
          <a href="/reservation" className="px-8 py-4 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-lg">{t('offerPage.cta')}</a>
        </div>
      </section>
    </div>
  );
} 
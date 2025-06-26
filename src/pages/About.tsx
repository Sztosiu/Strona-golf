import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const team = [
  { name: 'Jan Kowalski', role: 'Prezes klubu', img: null },
  { name: 'Anna Nowak', role: 'Trener PGA', img: null },
  { name: 'Piotr Zieliński', role: 'Manager', img: null },
];

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 py-0">
      {/* HERO */}
      <section className="relative py-20 bg-white text-center shadow rounded-b-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl">{t('aboutPage.heroTitle')}</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6">{t('aboutPage.heroDesc')}</p>
      </section>

      {/* HISTORIA */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-serif font-bold text-green-900 mb-8 text-center">{t('aboutPage.historyTitle')}</h2>
        <ol className="relative border-l-4 border-green-200 pl-8 space-y-8">
          <li>
            <div className="absolute -left-5 top-1 w-4 h-4 bg-green-900 rounded-full border-2 border-white"></div>
            <div className="text-lg font-bold text-green-900 mb-1">2012</div>
            <div className="text-gray-700">{t('aboutPage.history2012')}</div>
          </li>
          <li>
            <div className="absolute -left-5 top-1 w-4 h-4 bg-green-900 rounded-full border-2 border-white"></div>
            <div className="text-lg font-bold text-green-900 mb-1">2016</div>
            <div className="text-gray-700">{t('aboutPage.history2016')}</div>
          </li>
          <li>
            <div className="absolute -left-5 top-1 w-4 h-4 bg-green-900 rounded-full border-2 border-white"></div>
            <div className="text-lg font-bold text-green-900 mb-1">2024</div>
            <div className="text-gray-700">{t('aboutPage.history2024')}</div>
          </li>
        </ol>
      </section>

      {/* ZESPÓŁ */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-serif font-bold text-green-900 mb-8 text-center">{t('aboutPage.teamTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((person, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-4xl font-bold text-green-900 mb-4">
                {person.img ? <img src={person.img} alt={person.name} className="w-full h-full object-cover rounded-full" /> : person.name[0]}
              </div>
              <div className="font-bold text-lg text-green-900 mb-1">{person.name}</div>
              <div className="text-gray-700 text-sm">{person.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CYTAT */}
      <section className="max-w-2xl mx-auto px-4 mb-20 text-center">
        <blockquote className="italic text-xl text-gray-700 mb-4 border-l-4 border-green-900 pl-4">{t('aboutPage.quote')}</blockquote>
        <div className="text-green-900 font-bold">{t('aboutPage.quoteAuthor')}</div>
      </section>
    </div>
  );
} 
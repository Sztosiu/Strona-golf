import { useTranslation } from "react-i18next";

export default function Pricing() {
  // const { t } = useTranslation(); // Przygotowane pod tłumaczenia
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 py-0">
      {/* HERO */}
      <section className="relative py-20 bg-white text-center shadow rounded-b-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl">Cennik 2024</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6">Aktualne opłaty za grę, trening, wypożyczenie sprzętu i członkostwo w Gorko Golf & Country Club.</p>
      </section>
      <div className="max-w-5xl mx-auto px-4 mb-16 flex flex-col gap-12">
        {/* GREEN FEE & KARNETY */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Green Fee</h2>
            <table className="w-full text-left mb-4">
              <thead className="bg-green-900 text-white">
                <tr>
                  <th className="py-2 px-3">Ilość dołków</th>
                  <th className="py-2 px-3">Pn–Pt</th>
                  <th className="py-2 px-3">So, Ni, Św</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">9</td>
                  <td className="py-2 px-3">150 zł</td>
                  <td className="py-2 px-3">200 zł</td>
                </tr>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">18</td>
                  <td className="py-2 px-3">200 zł</td>
                  <td className="py-2 px-3">250 zł</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600">Bezpłatne strefy PG & CA</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Green Fee Karnet</h2>
            <table className="w-full text-left mb-4">
              <thead className="bg-green-900 text-white">
                <tr>
                  <th className="py-2 px-3">Ilość dołków</th>
                  <th className="py-2 px-3">Pn–Ni & Św</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">9</td>
                  <td className="py-2 px-3">1400 zł</td>
                </tr>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">18</td>
                  <td className="py-2 px-3">1900 zł</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600">10 wejść ważnych do 31.12.2025, bezpłatne strefy PG & CA</p>
          </div>
        </div>
        {/* PUTTING GREEN & DRIVING RANGE */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Putting Green & Chipping Area</h2>
            <ul className="text-lg mb-2">
              <li><b>100 zł</b> za 1 godz. (razem w PG & CA)</li>
              <li><b>60 zł</b> za 1 godz. dzieci do 12 lat</li>
              <li>Członkowie i Green Fee <b>GRATIS</b></li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Driving Range</h2>
            <ul className="text-lg mb-2">
              <li><b>25 zł</b> koszyk – 40 piłek</li>
              <li><b>45 zł</b> koszyk – 80 piłek</li>
              <li><b>200 zł</b> koszyk – 400 piłek</li>
            </ul>
          </div>
        </div>
        {/* WYPOŻYCZENIE SPRZĘTU */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Wypożyczenie sprzętu</h2>
          <ul className="text-lg mb-2 grid md:grid-cols-2 gap-x-8">
            <li>Wózek na 9 / 18 dołków – <b>40 zł</b></li>
            <li>Wózek typu melex: 9 dołków – <b>160 zł</b>, 18 dołków – <b>190 zł</b></li>
            <li>1 kij golfowy – <b>40 zł</b></li>
            <li>1/2 kompletu kijów – <b>100 zł</b></li>
            <li>Komplet kijów – <b>150 zł</b></li>
          </ul>
        </div>
        {/* CZŁONKOSTWO ROCZNE */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Członkostwo roczne</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left mb-4 min-w-[600px]">
              <thead className="bg-green-900 text-white">
                <tr>
                  <th className="py-2 px-3">Typ członkostwa</th>
                  <th className="py-2 px-3">Pn–Pt</th>
                  <th className="py-2 px-3">So, Ni, Św</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">1 os. dorosła</td>
                  <td className="py-2 px-3">4600 zł</td>
                  <td className="py-2 px-3">4600 zł</td>
                </tr>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">1 os. dorosła (pełny)</td>
                  <td className="py-2 px-3">5000 zł</td>
                  <td className="py-2 px-3">5000 zł</td>
                </tr>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">Junior</td>
                  <td className="py-2 px-3">3000 zł</td>
                  <td className="py-2 px-3">3000 zł</td>
                </tr>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">Studenci</td>
                  <td className="py-2 px-3">3800 zł</td>
                  <td className="py-2 px-3">3800 zł</td>
                </tr>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">Senior 65+</td>
                  <td className="py-2 px-3">4600 zł</td>
                  <td className="py-2 px-3">4600 zł</td>
                </tr>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">Rodzinne</td>
                  <td className="py-2 px-3">8750 zł</td>
                  <td className="py-2 px-3">8750 zł</td>
                </tr>
                <tr className="odd:bg-green-50 even:bg-white">
                  <td className="py-2 px-3 font-bold">Dojazd &gt; 100 km (Pn–Czw)</td>
                  <td className="py-2 px-3">4100 zł</td>
                  <td className="py-2 px-3">4300 zł</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <b>Roczna klubowa składka członkowska 2025</b><br />
              200 zł
            </div>
            <div>
              <b>Karta HCP Polskiego Związku Golfowego</b><br />
              100 zł do 18 lat<br />
              200 zł 19–25 lat<br />
              250 zł 25–99 lat
            </div>
            <div>
              Niższe ceny w turniejach, bezpłatne strefy PG & CA, prawo do zaproszenia raz w roku bezpłatnie 1 osoby na pole do gry oraz na lunch podczas turnieju.<br />
              Karta uwzględnia posiadane umiejętności tzw. HCP (handicap) – niezbędna w turnieju, ważna wszędzie.
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="/images/cennik.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-lg">Pobierz PDF</a>
          <a href="/reservation" className="px-8 py-4 rounded border border-green-900 text-green-900 font-bold bg-white hover:bg-gray-100 transition text-lg">Zarezerwuj grę</a>
        </div>
      </div>
    </div>
  );
} 
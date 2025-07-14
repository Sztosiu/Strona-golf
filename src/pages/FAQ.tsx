import { useState } from "react";
import { useTranslation } from "react-i18next";

// Rozszerzone FAQ z kategoryzacją
const faqCategories = [
  {
    title: "Ogólne pytania",
    icon: "❓",
    faqs: [
      { 
        q: "Czy Gorko Golf jest otwarte przez cały rok?", 
        a: "Tak, nasze pole golfowe jest otwarte przez cały rok, 7 dni w tygodniu. W sezonie zimowym oferujemy specjalne warunki gry i sprzęt dostosowany do zimowej aury." 
      },
      { 
        q: "Czy mogę przyjść bez wcześniejszej rezerwacji?", 
        a: "Zalecamy wcześniejszą rezerwację, szczególnie w weekendy i święta. Możesz zarezerwować termin online lub telefonicznie. W dni robocze często mamy wolne miejsca." 
      },
      { 
        q: "Czy oferujecie usługi cateringowe?", 
        a: "Tak, nasza restauracja oferuje pełne menu, od lekkich przekąsek po eleganckie dania. Możemy również przygotować catering na specjalne okazje i turnieje." 
      },
      { 
        q: "Czy jest parking na miejscu?", 
        a: "Tak, oferujemy bezpłatny parking dla wszystkich gości. Parking jest strzeżony i oświetlony." 
      }
    ]
  },
  {
    title: "Golf dla początkujących",
    icon: "🎯",
    faqs: [
      { 
        q: "Czy mogę grać w golfa bez doświadczenia?", 
        a: "Oczywiście! Oferujemy lekcje dla początkujących z certyfikowanymi trenerami. Możesz rozpocząć od driving range lub krótkich dołków par 3." 
      },
      { 
        q: "Czy wypożyczacie sprzęt golfowy?", 
        a: "Tak, oferujemy wypożyczenie kompletnego sprzętu golfowego - kije, torby, wózki. Mamy sprzęt w różnych rozmiarach, również dla dzieci." 
      },
      { 
        q: "Jakie są podstawowe zasady golfa?", 
        a: "Golf to gra polegająca na wbiciu piłki do dołka w jak najmniejszej liczbie uderzeń. Gra się po kolei, zachowując ciszę podczas uderzeń innych graczy." 
      },
      { 
        q: "Czy potrzebuję specjalnego stroju?", 
        a: "Zalecamy wygodny, sportowy strój. Na naszym polu nie wymagamy klasycznego stroju golfowego, ale prosimy o odpowiedni dress code." 
      },
      { 
        q: "Jak długo trwa runda golfa?", 
        a: "Pełna runda 18 dołków trwa zazwyczaj 4-5 godzin. Możesz też zagrać 9 dołków (2-3 godziny) lub ćwiczyć na driving range." 
      }
    ]
  },
  {
    title: "Akademia i szkolenia",
    icon: "🎓",
    faqs: [
      { 
        q: "Czy prowadzicie szkolenia dla dzieci?", 
        a: "Tak, nasza akademia oferuje specjalne programy dla dzieci od 6 roku życia. Zajęcia są dostosowane do wieku i umiejętności." 
      },
      { 
        q: "Jakie są ceny lekcji golfa?", 
        a: "Ceny lekcji wahają się od 100-200 zł za godzinę, w zależności od trenera i typu lekcji. Oferujemy również pakiety lekcji w atrakcyjnych cenach." 
      },
      { 
        q: "Czy mogę umówić się na indywidualną lekcję?", 
        a: "Tak, oferujemy lekcje indywidualne, grupowe oraz rodzinne. Możesz umówić się telefonicznie lub online." 
      },
      { 
        q: "Czy prowadzicie kursy przygotowujące do egzaminów PGA?", 
        a: "Tak, nasi trenerzy przygotowują do egzaminów PGA i innych certyfikacji golfowych." 
      }
    ]
  },
  {
    title: "Turnieje i wydarzenia",
    icon: "🏆",
    faqs: [
      { 
        q: "Jak często organizujecie turnieje?", 
        a: "Organizujemy turnieje co tydzień, a także specjalne wydarzenia sezonowe. Informacje o turniejach znajdziesz w kalendarzu na naszej stronie." 
      },
      { 
        q: "Czy mogę zorganizować turniej firmowy?", 
        a: "Tak, oferujemy kompleksową organizację turniejów firmowych, integracyjnych i charytatywnych. Mamy doświadczenie w organizacji wydarzeń dla firm." 
      },
      { 
        q: "Jakie są zasady uczestnictwa w turniejach?", 
        a: "Wymagane jest posiadanie karty golfowej lub podstawowe umiejętności gry. Szczegółowe zasady są ogłaszane przed każdym turniejem." 
      },
      { 
        q: "Czy oferujecie nagrody w turniejach?", 
        a: "Tak, każdy turniej ma atrakcyjne nagrody - sprzęt golfowy, vouchery, trofea. Nagrody zależą od typu turnieju." 
      }
    ]
  },
  {
    title: "Cennik i członkostwo",
    icon: "💰",
    faqs: [
      { 
        q: "Jakie są ceny gry w golfa?", 
        a: "Ceny wahają się od 80-150 zł za rundę, w zależności od dnia tygodnia i sezonu. Oferujemy zniżki dla członków klubu i pakiety rodzinne." 
      },
      { 
        q: "Czy warto zostać członkiem klubu?", 
        a: "Członkostwo daje dostęp do zniżek, priorytetowych rezerwacji, bezpłatnych lekcji i specjalnych wydarzeń. Szczegóły w recepcji." 
      },
      { 
        q: "Jakie są opcje członkostwa?", 
        a: "Oferujemy członkostwo indywidualne, rodzinne i firmowe. Każdy typ ma różne korzyści i ceny." 
      },
      { 
        q: "Czy mogę kupić karnet na lekcje?", 
        a: "Tak, oferujemy karnety na 5, 10 i 20 lekcji w atrakcyjnych cenach. Karnety są ważne przez rok." 
      }
    ]
  },
  {
    title: "Footgolf",
    icon: "⚽⛳",
    faqs: [
      { 
        q: "Czym jest footgolf?", 
        a: "Footgolf to połączenie piłki nożnej i golfa. Zamiast kija używasz nóg, a piłeczkę golfową zastępuje piłka nożna." 
      },
      { 
        q: "Czy footgolf jest trudny?", 
        a: "Footgolf jest łatwiejszy do nauki niż tradycyjny golf i świetnie nadaje się dla rodzin i grup przyjaciół." 
      },
      { 
        q: "Czy potrzebuję specjalnego sprzętu do footgolfa?", 
        a: "Nie, wystarczą wygodne buty sportowe. Piłki nożne są dostępne na miejscu." 
      },
      { 
        q: "Jak długo trwa runda footgolfa?", 
        a: "Runda footgolfa trwa około 1-2 godziny, w zależności od liczby graczy." 
      }
    ]
  }
];

export default function FAQ() {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [activeCategory, setActiveCategory] = useState(0);

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-0">
      {/* HERO */}
      <section className="relative py-20 bg-white text-center shadow rounded-b-3xl mb-12 overflow-hidden">
        {/* Dekoracyjne elementy tła */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300 rounded-full opacity-15 blur-3xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl">
            {t('faqPage.heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
            {t('faqPage.heroDesc')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* KATEGORIE FAQ */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        {/* Nawigacja kategorii */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:scale-105 shadow'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* FAQ dla wybranej kategorii */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-green-900 mb-2">
              {faqCategories[activeCategory].title}
            </h2>
            <span className="text-4xl">{faqCategories[activeCategory].icon}</span>
          </div>

          <div className="space-y-4">
            {faqCategories[activeCategory].faqs.map((item, itemIndex) => {
              const key = `${activeCategory}-${itemIndex}`;
              const isOpen = openItems[key];
              
              return (
                <div key={itemIndex} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <button
                    onClick={() => toggleItem(activeCategory, itemIndex)}
                    className="w-full text-left px-6 py-5 font-bold text-green-900 text-lg flex justify-between items-center focus:outline-none hover:bg-green-50 transition-colors duration-300"
                  >
                    <span className="pr-4">{item.q}</span>
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full bg-green-100 flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'rotate-180 bg-green-200' : ''
                      }`}>
                        <span className="text-green-600 font-bold text-xl transition-transform duration-300">
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-5 text-gray-700 text-base leading-relaxed border-t border-gray-100 pt-4">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">Nie znalazłeś odpowiedzi?</h2>
          <p className="text-xl text-green-100 mb-8">
            Skontaktuj się z nami - chętnie odpowiemy na wszystkie Twoje pytania!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 rounded-2xl bg-white text-green-900 font-bold shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {t('faqPage.cta')}
            </a>
            <a 
              href="tel:+48123456789" 
              className="px-8 py-4 rounded-2xl border-2 border-white text-white font-bold hover:bg-white hover:text-green-900 transition-all duration-300 hover:scale-105"
            >
              📞 Zadzwoń teraz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 
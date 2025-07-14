import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";

const team = [
  { 
    name: 'Jan Kowalski', 
    role: 'Prezes klubu', 
    img: null,
    description: 'Pasjonat golfa z 20-letnim doświadczeniem. Założyciel Gorko Golf z wizją stworzenia miejsca dla każdego miłośnika tej dyscypliny.',
    achievements: ['PGA Professional', 'Mistrz Polski 2018', 'Trener roku 2020']
  },
  { 
    name: 'Anna Nowak', 
    role: 'Trener PGA', 
    img: null,
    description: 'Certyfikowana trenerka PGA z międzynarodowym doświadczeniem. Specjalizuje się w szkoleniu dzieci i początkujących.',
    achievements: ['PGA Certified', 'Specjalista junior golf', '10+ lat doświadczenia']
  },
  { 
    name: 'Piotr Zieliński', 
    role: 'Manager', 
    img: null,
    description: 'Doświadczony manager z branży sportowej. Odpowiada za organizację turniejów i obsługę klienta.',
    achievements: ['MBA Sport Management', 'Organizator turniejów', 'Customer Service Expert']
  },
];

// Rozszerzona historia z więcej szczegółami
const history = [
  {
    year: 2012,
    title: "Początki marzenia",
    description: "Założenie klubu z wizją stworzenia nowoczesnego pola golfowego w sercu Dolnego Śląska",
    icon: "🌱",
    details: "Pierwsze plany, zakup terenu, rozpoczęcie projektowania 18-dołkowego pola golfowego"
  },
  {
    year: 2014,
    title: "Rozpoczęcie budowy",
    description: "Rozpoczęcie prac budowlanych i kształtowanie krajobrazu",
    icon: "🏗️",
    details: "Przygotowanie terenu, system nawadniania, kształtowanie dołków i greenów"
  },
  {
    year: 2016,
    title: "Otwarcie pierwszych 9 dołków",
    description: "Historyczny moment - pierwsze dołki są gotowe do gry",
    icon: "⛳",
    details: "Otwarcie front nine, pierwsze turnieje, szkolenie personelu"
  },
  {
    year: 2018,
    title: "Pełne pole golfowe",
    description: "Ukończenie wszystkich 18 dołków i otwarcie pełnego pola",
    icon: "🏆",
    details: "Otwarcie back nine, pierwszy turniej PGA, rozbudowa infrastruktury"
  },
  {
    year: 2020,
    title: "Akademia golfa",
    description: "Rozpoczęcie działalności akademii dla dzieci i dorosłych",
    icon: "🎓",
    details: "Programy szkoleniowe, certyfikowani trenerzy, sukcesy juniorów"
  },
  {
    year: 2024,
    title: "Nowa era",
    description: "Gorko Golf jako wiodący klub golfowy w regionie",
    icon: "🚀",
    details: "Nowoczesna infrastruktura, międzynarodowe turnieje, innowacyjne rozwiązania"
  }
];

// Komponent do animacji liczb
const AnimatedNumber = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(target * easeOutQuart);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <div ref={elementRef} className="text-4xl md:text-5xl font-bold text-green-900">
      {count}{suffix}
    </div>
  );
};

export default function About() {
  const { t } = useTranslation();
  const [activeHistoryIndex, setActiveHistoryIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Autoplay dla historii
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveHistoryIndex((prev) => (prev + 1) % history.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 py-0">
      {/* HERO */}
      <section className="relative py-20 bg-white text-center shadow rounded-b-3xl mb-12 overflow-hidden">
        {/* Dekoracyjne elementy tła */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300 rounded-full opacity-15 blur-3xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl">
            {t('aboutPage.heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
            {t('aboutPage.heroDesc')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* STATYSTYKI */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-green-900 mb-12 text-center">Gorko Golf w liczbach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <AnimatedNumber target={12} duration={1500} suffix=" lat" />
              <div className="text-gray-600 mt-2">Doświadczenia</div>
            </div>
            <div className="text-center group">
              <AnimatedNumber target={18} duration={1800} suffix="" />
              <div className="text-gray-600 mt-2">Dołków golfowych</div>
            </div>
            <div className="text-center group">
              <AnimatedNumber target={1000} duration={2500} suffix="+" />
              <div className="text-gray-600 mt-2">Zadowolonych klientów</div>
            </div>
            <div className="text-center group">
              <AnimatedNumber target={50} duration={2000} suffix="+" />
              <div className="text-gray-600 mt-2">Turniejów rocznie</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERAKTYWNA HISTORIA */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-green-900 mb-4">Nasza historia</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Od skromnych początków do wiodącego klubu golfowego w regionie
          </p>
        </div>

        {/* Timeline z autoplay */}
        <div className="relative">
          {/* Wskaźniki */}
          <div className="flex justify-center gap-4 mb-8">
            {history.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveHistoryIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 ${
                  index === activeHistoryIndex 
                    ? 'bg-green-600 text-white shadow-lg scale-110' 
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:scale-105'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-bold text-sm">{item.year}</span>
              </button>
            ))}
          </div>

          {/* Główna treść historii */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[400px]">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl">{history[activeHistoryIndex].icon}</span>
              <div>
                <h3 className="text-2xl font-serif font-bold text-green-900">
                  {history[activeHistoryIndex].year} - {history[activeHistoryIndex].title}
                </h3>
                <p className="text-lg text-gray-600">{history[activeHistoryIndex].description}</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
              <h4 className="font-bold text-green-900 mb-3">Szczegóły:</h4>
              <p className="text-gray-700 leading-relaxed">{history[activeHistoryIndex].details}</p>
            </div>

            {/* Kontrolki autoplay */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isAutoPlaying 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isAutoPlaying ? '⏸️ Wstrzymaj' : '▶️ Wznów'}
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveHistoryIndex((prev) => (prev - 1 + history.length) % history.length)}
                  className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition"
                >
                  ←
                </button>
                <button
                  onClick={() => setActiveHistoryIndex((prev) => (prev + 1) % history.length)}
                  className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZESPÓŁ - rozszerzony */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-green-900 mb-4">Nasz zespół</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Poznaj profesjonalistów, którzy tworzą atmosferę Gorko Golf
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((person, i) => (
            <div key={i} className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-4xl font-bold text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {person.img ? <img src={person.img} alt={person.name} className="w-full h-full object-cover rounded-full" /> : person.name[0]}
                </div>
                <h3 className="font-bold text-2xl text-green-900 mb-2">{person.name}</h3>
                <div className="text-green-600 font-medium mb-4">{person.role}</div>
                <p className="text-gray-700 leading-relaxed mb-6">{person.description}</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-bold text-green-900 mb-3">Osiągnięcia:</h4>
                {person.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MISJA I WARTOŚCI */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Nasza misja i wartości</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <h3 className="font-bold text-xl mb-3">Misja</h3>
              <p className="text-green-100 leading-relaxed">
                Stworzenie nowoczesnego, przyjaznego miejsca dla każdego miłośnika golfa, 
                gdzie pasja spotyka się z profesjonalizmem.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                👥
              </div>
              <h3 className="font-bold text-xl mb-3">Wizja</h3>
              <p className="text-green-100 leading-relaxed">
                Bycie wiodącym klubem golfowym w regionie, znanym z jakości, 
                innowacji i przyjaznej atmosfery.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                ⭐
              </div>
              <h3 className="font-bold text-xl mb-3">Wartości</h3>
              <p className="text-green-100 leading-relaxed">
                Profesjonalizm, pasja, innowacyjność, przyjazność i dbałość 
                o środowisko naturalne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CYTAT - rozszerzony */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="italic text-2xl text-gray-700 mb-6 leading-relaxed">
            "{t('aboutPage.quote')}"
          </blockquote>
          <div className="text-green-900 font-bold text-lg">{t('aboutPage.quoteAuthor')}</div>
          <div className="text-gray-500 text-sm mt-2">Prezes Gorko Golf</div>
        </div>
      </section>
    </div>
  );
} 
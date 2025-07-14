import { Badge } from "@/components/ui/badge";
import WeatherWidget from "../components/WeatherWidget";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: "\u26f3",
    titleKey: "whySection.box1Title",
    descKey: "whySection.box1Desc"
  },
  {
    icon: "\ud83c\udfc6",
    titleKey: "whySection.box2Title",
    descKey: "whySection.box2Desc"
  },
  {
    icon: "\ud83c\udf7d\ufe0f",
    titleKey: "whySection.box3Title",
    descKey: "whySection.box3Desc"
  },
  {
    icon: "\ud83d\udc68\u200d\ud83c\udfeb",
    titleKey: "whySection.box4Title",
    descKey: "whySection.box4Desc"
  },
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
            
            // Easing function dla płynnej animacji
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
    <div ref={elementRef} className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
      {count}{suffix}
    </div>
  );
};

export default function Index() {
  const { t } = useTranslation();

  // Opinie do karuzeli
  const reviews = [
    {
      author: "Anna, Wrocław",
      text: "Świetne miejsce na naukę i relaks! Polecam każdemu, kto chce spróbować golfa. Trenerzy są bardzo pomocni.",
      stars: 5,
    },
    {
      author: "Tomasz, Wałbrzych",
      text: "Bardzo przyjazna atmosfera, piękne otoczenie i profesjonalna obsługa. Na pewno wrócę!",
      stars: 4,
    },
    {
      author: "Julia, Świdnica",
      text: "Golf w Gorko Golf to czysta przyjemność. Akademia dla dzieci to strzał w dziesiątkę!",
      stars: 5,
    },
    {
      author: "Marek, Dzierżoniów",
      text: "Polecam każdemu, kto szuka nowego hobby. Świetne miejsce na rodzinny weekend.",
      stars: 5,
    },
    {
      author: "Ewa, Legnica",
      text: "Turnieje organizowane na wysokim poziomie, dużo emocji i świetna zabawa!",
      stars: 5,
    },
  ];
  const [reviewIdx, setReviewIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const nextReview = () => setReviewIdx((reviewIdx + 1) % reviews.length);
  const prevReview = () => setReviewIdx((reviewIdx - 1 + reviews.length) % reviews.length);
  
  // Autoplay dla opinii
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextReview();
    }, 4000); // Zmiana co 4 sekundy
    
    return () => clearInterval(interval);
  }, [reviewIdx, isAutoPlaying]);
  
  // Pause autoplay przy hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <img src="/images/hero-drone.jpg" alt="Gorko Golf z lotu ptaka" className="absolute inset-0 w-full h-full object-cover object-center z-0" style={{ filter: 'brightness(0.5)', objectPosition: 'center 60%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white/80 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 text-white drop-shadow-xl">{t('hero.title')}</h1>
          <p className="text-2xl md:text-3xl text-white mb-10 font-sans drop-shadow-xl max-w-2xl mx-auto">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/reservation" className="px-8 py-4 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-lg">{t('cta.book')}</a>
            <a href="/about" className="px-8 py-4 rounded border border-white text-white font-bold bg-white/10 hover:bg-white/20 transition text-lg">{t('cta.about')}</a>
          </div>
        </div>
      </section>

      {/* O KLUBIE - nowoczesna sekcja z animacjami */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-white relative overflow-hidden">
        {/* Dekoracyjne elementy tła */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300 rounded-full opacity-15 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Główny nagłówek z animacją */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-4xl">🏌️‍♂️</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900">{t('about.title')}</h2>
              <span className="text-4xl">⛳</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">{t('about.story')}</p>
          </div>

          {/* Karty z funkcjami */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">🏗️</span>
                </div>
                <h3 className="font-bold text-green-900 text-xl">{t('about.modernTitle')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{t('about.modern')}</p>
            </div>

            <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">🎉</span>
                </div>
                <h3 className="font-bold text-green-900 text-xl">{t('about.eventsTitle')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{t('about.events')}</p>
            </div>

            <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">📍</span>
                </div>
                <h3 className="font-bold text-green-900 text-xl">{t('about.locationTitle')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{t('about.location')}</p>
            </div>
          </div>

          {/* Dodatkowa sekcja z liczbami */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8">Gorko Golf w liczbach</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group">
                <AnimatedNumber target={18} duration={1500} />
                <div className="text-green-100 text-sm">Dołków golfowych</div>
              </div>
              <div className="group">
                <AnimatedNumber target={500} duration={2000} suffix="+" />
                <div className="text-green-100 text-sm">Zadowolonych klientów</div>
              </div>
              <div className="group">
                <AnimatedNumber target={1000} duration={2500} suffix="+" />
                <div className="text-green-100 text-sm">Rozegranych rund</div>
              </div>
              <div className="group">
                <AnimatedNumber target={100} duration={1800} suffix="%" />
                <div className="text-green-100 text-sm">Satysfakcja</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O NAS - naprzemiennie, pastelowe tło, ikona po lewej */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <span className="text-[90px] md:text-[120px] text-green-200">⛳</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">O nas</h2>
            <p className="text-xl text-gray-700 font-serif mb-4">{t('mission.desc')}</p>
            <p className="text-lg text-gray-700">{t('mission.story')}</p>
          </div>
        </div>
        {/* SVG separator */}
        <svg className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[100vw] h-12 block" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0 0h1440v60H0z" fill="#f0fdf4"/><path d="M0 0c120 40 360 40 720 0s600 40 720 0v60H0V0z" fill="#fff"/></svg>
      </section>

      {/* AKADEMIA GOLFA - naprzemiennie, pastelowe tło, zdjęcie po prawej */}
      <section className="py-16 bg-green-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img src="/images/IMG_1841.14ea57af-1.webp" alt="Akademia Gorko Golf" className="rounded-2xl shadow-xl w-full max-w-md object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-green-900 mb-4 flex items-center gap-2"><span className="text-3xl">⛳</span> Akademia Gorko Golf</h2>
            <p className="text-lg text-gray-700 mb-6">Odkryj pasję do golfa z naszymi trenerami! Nauka gry dla dzieci, młodzieży, dorosłych i seniorów – od podstaw po zaawansowane techniki. Sprawdź szczegóły i zapisz się już dziś!</p>
            <a href="/academy" className="inline-block px-8 py-3 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-base">Dowiedz się więcej</a>
          </div>
        </div>
        {/* SVG separator */}
        <svg className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[100vw] h-12 block" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0 0h1440v60H0z" fill="#fff"/><path d="M0 0c120 40 360 40 720 0s600 40 720 0v60H0V0z" fill="#f0fdf4"/></svg>
      </section>

      {/* FOOTGOLF - naprzemiennie, białe tło, zdjęcie po lewej */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img src="/images/footgolf-zasady.jpg" alt="Footgolf zasady" className="rounded-2xl shadow-xl w-full max-w-md object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-green-900 mb-4 flex items-center gap-2"><span className="text-3xl">⚽⛳</span> Footgolf w Gorko Golf</h2>
            <p className="text-lg text-gray-700 mb-6">Footgolf to połączenie piłki nożnej i golfa! Zamiast kija używasz nóg, a piłeczkę golfową zastępuje piłka nożna. To świetna zabawa dla każdego – sprawdź szczegóły i spróbuj nowej dyscypliny na naszym polu!</p>
            <a href="/footgolf" className="inline-block px-8 py-3 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-base">Dowiedz się więcej</a>
          </div>
        </div>
        {/* SVG separator */}
        <svg className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[100vw] h-12 block" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0 0h1440v60H0z" fill="#f0fdf4"/><path d="M0 0c120 40 360 40 720 0s600 40 720 0v60H0V0z" fill="#fff"/></svg>
      </section>

      {/* OPINIE - box z cieniem z autoplay */}
      <section className="py-16 bg-gradient-to-l from-green-50 to-white flex justify-center">
        <div 
          className="max-w-2xl w-full px-4 text-center bg-white rounded-2xl shadow-xl py-12 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-2xl font-serif font-bold text-green-900 mb-6">Co mówią nasi goście?</h2>
          
          {/* Wskaźniki (dots) */}
          <div className="flex justify-center gap-2 mb-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setReviewIdx(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === reviewIdx 
                    ? 'bg-green-600 scale-125' 
                    : 'bg-green-200 hover:bg-green-300'
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <button 
              onClick={prevReview} 
              className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition hover:scale-110"
              aria-label="Poprzednia opinia"
            >
              <span className="text-2xl">&#8592;</span>
            </button>
            
            <div className="flex-1 min-h-[120px] flex items-center">
              <div className="flex flex-col items-center w-full">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: reviews[reviewIdx].stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                  {Array.from({ length: 5 - reviews[reviewIdx].stars }).map((_, i) => (
                    <span key={i} className="text-gray-300 text-xl">★</span>
                  ))}
                </div>
                <div className="text-lg text-gray-700 mb-3 leading-relaxed max-w-lg">
                  "{reviews[reviewIdx].text}"
                </div>
                <div className="font-bold text-green-900 text-sm">— {reviews[reviewIdx].author}</div>
              </div>
            </div>
            
            <button 
              onClick={nextReview} 
              className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition hover:scale-110"
              aria-label="Następna opinia"
            >
              <span className="text-2xl">&#8594;</span>
            </button>
          </div>
          
          {/* Wskaźnik autoplay */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              isAutoPlaying ? 'bg-green-500' : 'bg-gray-300'
            }`}></div>
            <span>{isAutoPlaying ? 'Automatyczne przewijanie' : 'Wstrzymane'}</span>
          </div>
        </div>
      </section>

      {/* Z ŻYCIA KLUBU / ZAJAWKA GALERII */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-green-900 mb-4 md:mb-0">{t('galleryTeaser.title')}</h2>
            <a href="/gallery" className="px-6 py-2 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-base">{t('galleryTeaser.cta')}</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
            <img src="/images/hero-drone.jpg" alt="Gorko Golf" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
            <img src="/images/IMG_1885.f7b92468-1.jpg" alt="Turniej" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
            <img src="/images/IMG_1624.c2a6f471-1.webp" alt="Restauracja" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
            <img src="/images/IMG_1841.14ea57af-1.webp" alt="Akademia" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
            <img src="/images/IMG_1912.ce1ecee0-1.webp" alt="Restauracja" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
            <img src="/images/IMG_1936.f5d05a27-1.webp" alt="Turniej" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
          </div>
          {/* Turnieje w Gorko Golf jako podsekcja */}
          <div className="bg-green-50 rounded-2xl shadow p-8 mt-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-green-900 mb-4 flex items-center gap-2"><span className="text-2xl">🏆</span>Turnieje w Gorko Golf</h3>
            <p className="text-lg text-gray-700 mb-6">Zobacz emocje, rywalizację i radość z gry podczas naszych turniejów! Sprawdź galerię zdjęć z ostatnich wydarzeń i poczuj atmosferę sportowej pasji.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              <img src="/images/turnieje/IMG_3397.7d0430ec-900x600.webp" alt="Turniej" className="rounded-xl object-cover w-full h-32 md:h-36 shadow transition-transform duration-200 hover:scale-105" />
              <img src="/images/turnieje/IMG_3151.c1e9e272-900x600.webp" alt="Turniej" className="rounded-xl object-cover w-full h-32 md:h-36 shadow transition-transform duration-200 hover:scale-105" />
              <img src="/images/turnieje/IMG_2059.cd53aa8d-800x600.webp" alt="Turniej" className="rounded-xl object-cover w-full h-32 md:h-36 shadow transition-transform duration-200 hover:scale-105" />
              <img src="/images/turnieje/IMG_1756.eda83690-450x600.webp" alt="Turniej" className="rounded-xl object-cover w-full h-32 md:h-36 shadow transition-transform duration-200 hover:scale-105" />
              <img src="/images/turnieje/IMG_2062.8c7dc10f-800x600.webp" alt="Turniej" className="rounded-xl object-cover w-full h-32 md:h-36 shadow transition-transform duration-200 hover:scale-105" />
            </div>
            <a href="/gallery" className="inline-block px-8 py-3 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-base">Zobacz wszystkie zdjęcia z turniejów</a>
          </div>
          <p className="text-center text-gray-600 mt-4">{t('galleryTeaser.desc')}</p>
        </div>
      </section>

      {/* NAJNOWSZA AKTUALNOŚĆ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-green-900 mb-6">{t('newsTeaser.title')}</h2>
          <div className="bg-green-50 rounded-xl shadow p-6 mb-4">
            <div className="text-sm text-gray-500 mb-2">{t('newsTeaser.date')}</div>
            <div className="font-serif font-bold text-green-900 mb-1 text-lg">{t('newsTeaser.headline')}</div>
            <div className="text-gray-700">{t('newsTeaser.desc')}</div>
          </div>
          <a href="/news" className="inline-block mt-2 px-6 py-2 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-base">{t('newsTeaser.cta')}</a>
        </div>
      </section>

      {/* DLA KOGO I DLACZEGO GORKO GOLF - zintegrowana sekcja */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Główny nagłówek */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-4">Dla kogo jest Gorko Golf?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Odkryj, dlaczego Gorko Golf to idealne miejsce dla każdego miłośnika golfa i aktywnego wypoczynku</p>
          </div>

          {/* Górna sekcja - Dla kogo */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-green-900 text-center mb-8">Kto znajdzie tu swoje miejsce?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="text-5xl mb-4">👨‍👩‍👧‍👦</span>
                <div className="font-bold text-green-900 mb-2 text-lg">{t('forwho.families')}</div>
                <div className="text-gray-700 text-sm leading-relaxed">{t('forwho.familiesDesc')}</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="text-5xl mb-4">🏢</span>
                <div className="font-bold text-green-900 mb-2 text-lg">{t('forwho.companies')}</div>
                <div className="text-gray-700 text-sm leading-relaxed">{t('forwho.companiesDesc')}</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="text-5xl mb-4">🧑‍🎓</span>
                <div className="font-bold text-green-900 mb-2 text-lg">{t('forwho.beginners')}</div>
                <div className="text-gray-700 text-sm leading-relaxed">{t('forwho.beginnersDesc')}</div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <span className="text-5xl mb-4">⛳</span>
                <div className="font-bold text-green-900 mb-2 text-lg">{t('forwho.advanced')}</div>
                <div className="text-gray-700 text-sm leading-relaxed">{t('forwho.advancedDesc')}</div>
              </div>
            </div>
          </div>

          {/* Dolna sekcja - Dlaczego Gorko Golf */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-green-900 text-center mb-12">Dlaczego warto wybrać Gorko Golf?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-6xl mb-4">{f.icon}</div>
                  <div className="font-serif font-bold text-xl text-green-900 mb-3 text-center">{t(f.titleKey)}</div>
                  <div className="text-gray-700 text-center text-sm leading-relaxed">{t(f.descKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WEATHER WIDGET */}
      <section className="py-12 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-green-900 text-center mb-6">{t('weather.title')}</h2>
          <WeatherWidget />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">{t('ctaSection.title')}</h2>
          <p className="text-lg text-gray-700 mb-8">{t('ctaSection.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/reservation" className="px-8 py-4 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-lg">{t('ctaSection.book')}</a>
            <a href="/contact" className="px-8 py-4 rounded border border-green-900 text-green-900 font-bold bg-white hover:bg-gray-100 transition text-lg">{t('ctaSection.contact')}</a>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA FACEBOOK */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-green-900 mb-6">Obserwuj nas na Facebooku</h2>
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/gorkogolf&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="500"
              height="600"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="rounded-xl shadow"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}


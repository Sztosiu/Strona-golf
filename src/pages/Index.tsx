import { Badge } from "@/components/ui/badge";
import WeatherWidget from "../components/WeatherWidget";
import { useTranslation } from "react-i18next";

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

export default function Index() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <img src="/images/hero-drone.jpg" alt="Gorko Golf z lotu ptaka" className="absolute inset-0 w-full h-full object-cover object-center z-0" style={{ filter: 'brightness(0.5)', objectPosition: 'center 60%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white/80 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-xl">{t('hero.title')}</h1>
          <p className="text-2xl md:text-3xl text-white mb-10 font-serif drop-shadow-xl max-w-2xl mx-auto">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/reservation" className="px-8 py-4 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-lg">{t('cta.book')}</a>
            <a href="/about" className="px-8 py-4 rounded border border-white text-white font-bold bg-white/10 hover:bg-white/20 transition text-lg">{t('cta.about')}</a>
          </div>
        </div>
      </section>

      {/* O KLUBIE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">{t('about.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('about.story')}</p>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
            <div>
              <h3 className="font-bold text-green-900 mb-2">{t('about.modernTitle')}</h3>
              <p className="text-gray-700">{t('about.modern')}</p>
            </div>
            <div>
              <h3 className="font-bold text-green-900 mb-2">{t('about.eventsTitle')}</h3>
              <p className="text-gray-700">{t('about.events')}</p>
            </div>
            <div>
              <h3 className="font-bold text-green-900 mb-2">{t('about.locationTitle')}</h3>
              <p className="text-gray-700">{t('about.location')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NASZA MISJA */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">{t('mission.title')}</h2>
          <p className="text-xl text-gray-700 font-serif mb-4">{t('mission.desc')}</p>
          <p className="text-lg text-gray-700">{t('mission.story')}</p>
        </div>
      </section>

      {/* Z ŻYCIA KLUBU / ZAJAWKA GALERII */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-green-900 mb-4 md:mb-0">{t('galleryTeaser.title')}</h2>
            <a href="/gallery" className="px-6 py-2 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-base">{t('galleryTeaser.cta')}</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <img src="/images/hero-drone.jpg" alt="Gorko Golf" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
            <img src="/images/IMG_1885.f7b92468-1.jpg" alt="Turniej" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
            <img src="/images/IMG_1624.c2a6f471-1.webp" alt="Restauracja" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
            <img src="/images/IMG_1841.14ea57af-1.webp" alt="Akademia" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
            <img src="/images/IMG_1912.ce1ecee0-1.webp" alt="Restauracja" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
            <img src="/images/IMG_1936.f5d05a27-1.webp" alt="Turniej" className="rounded-xl object-cover w-full h-32 md:h-36 shadow" />
          </div>
          <p className="text-center text-gray-600 mt-4">{t('galleryTeaser.desc')}</p>
        </div>
      </section>

      {/* ZAJAWKA TURNIEJÓW */}
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-green-900 mb-4">Turnieje w Gorko Golf</h2>
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
      </section>

      {/* OPINIA KLIENTA */}
      <section className="py-16 bg-gradient-to-l from-green-50 to-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-green-900 mb-6">{t('reviewTeaser.title')}</h2>
          <blockquote className="italic text-lg text-gray-700 mb-4 border-l-4 border-green-900 pl-4">{t('reviewTeaser.quote')}</blockquote>
          <div className="text-green-900 font-bold">{t('reviewTeaser.author')}</div>
          <a href="/reviews" className="inline-block mt-6 px-6 py-2 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-base">{t('reviewTeaser.cta')}</a>
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

      {/* DLA KOGO */}
      <section className="py-16 bg-gradient-to-l from-green-50 to-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">{t('forwho.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">👨‍👩‍👧‍👦</span>
              <div className="font-bold text-green-900 mb-1">{t('forwho.families')}</div>
              <div className="text-gray-700 text-sm">{t('forwho.familiesDesc')}</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">🏢</span>
              <div className="font-bold text-green-900 mb-1">{t('forwho.companies')}</div>
              <div className="text-gray-700 text-sm">{t('forwho.companiesDesc')}</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">🧑‍🎓</span>
              <div className="font-bold text-green-900 mb-1">{t('forwho.beginners')}</div>
              <div className="text-gray-700 text-sm">{t('forwho.beginnersDesc')}</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">⛳</span>
              <div className="font-bold text-green-900 mb-1">{t('forwho.advanced')}</div>
              <div className="text-gray-700 text-sm">{t('forwho.advancedDesc')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ZAPROSZENIE */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-6">{t('invite.title')}</h2>
          <p className="text-xl text-gray-700 mb-8">{t('invite.desc')}</p>
          <a href="/reservation" className="px-10 py-4 rounded bg-green-900 text-white font-bold shadow hover:bg-green-800 transition text-lg">{t('invite.cta')}</a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 text-center mb-12">{t('whySection.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 justify-center items-stretch">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl shadow p-8 flex flex-col items-center justify-between h-full min-h-[260px] max-w-xs mx-auto hover:shadow-lg transition">
                <div className="text-5xl mb-4">{f.icon}</div>
                <div className="font-serif font-bold text-xl text-green-900 mb-2 text-center">{t(f.titleKey)}</div>
                <div className="text-gray-700 text-center text-base">{t(f.descKey)}</div>
              </div>
            ))}
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

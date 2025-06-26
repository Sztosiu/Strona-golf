import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 py-0">
      {/* HERO */}
      <section className="relative py-20 text-center flex flex-col items-center justify-center bg-gradient-to-r from-green-100/80 to-white rounded-b-3xl mb-12 shadow">
        <div className="flex items-center justify-center mb-6">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 shadow-lg mr-4">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path stroke="#14532d" strokeWidth="2" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11zm2.2.5l7.8 6.2L19.8 7H4.2zm-.7 1.6v8.4c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V8.6l-7.6 6.1a1 1 0 0 1-1.3 0L3.5 8.6z"/></svg>
          </span>
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-2 drop-shadow-xl">{t('contactPage.heroTitle')}</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">{t('contactPage.heroDesc')}</p>
          </div>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 mb-16">
        {/* LEWA: dane kontaktowe */}
        <div className="flex flex-col gap-6 justify-center">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-lg">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#14532d" strokeWidth="2" d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243A8 8 0 1 1 20 12a7.963 7.963 0 0 1-2.343 4.657z"/><circle cx="12" cy="12" r="3" stroke="#14532d" strokeWidth="2"/></svg>
              <span>{t('contactPage.address')}</span>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#14532d" strokeWidth="2" d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.05a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.98.35 2 .59 3.05.72A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+48514255974" className="hover:underline text-green-900 font-bold">+48 514 255 974</a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#14532d" strokeWidth="2" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11zm2.2.5l7.8 6.2L19.8 7H4.2zm-.7 1.6v8.4c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V8.6l-7.6 6.1a1 1 0 0 1-1.3 0L3.5 8.6z"/></svg>
              <a href="mailto:biuro@gorkogolf.pl" className="hover:underline text-green-900 font-bold">biuro@gorkogolf.pl</a>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#14532d" strokeWidth="2" d="M6 18V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/></svg>
              <span>{t('contactPage.hours')}</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/gorkogolf/?locale2=pl_PL" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform group">
                <img src="/images/facebook.svg" alt="Facebook" style={{ height: 28, width: 'auto', background: 'none' }} className="rounded hover:brightness-90 transition" />
              </a>
              <a href="mailto:biuro@gorkogolf.pl" className="hover:scale-110 transition-transform"><svg width="28" height="28" fill="currentColor"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11zm2.2.5l7.8 6.2L19.8 7H4.2zm-.7 1.6v8.4c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V8.6l-7.6 6.1a1 1 0 0 1-1.3 0L3.5 8.6z"/></svg></a>
            </div>
          </div>
        </div>
        {/* PRAWA: formularz kontaktowy */}
        <form className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col gap-4 animate-fade-in">
          <input type="text" placeholder={t('contactPage.formName')} className="border rounded px-4 py-3 focus:ring-2 focus:ring-green-300 transition" required />
          <input type="email" placeholder={t('contactPage.formEmail')} className="border rounded px-4 py-3 focus:ring-2 focus:ring-green-300 transition" required />
          <textarea placeholder={t('contactPage.formMessage')} className="border rounded px-4 py-3 focus:ring-2 focus:ring-green-300 transition" rows={4} required />
          <button type="submit" className="bg-green-900 text-white px-8 py-3 rounded font-bold hover:bg-green-800 transition mt-2 shadow">{t('contactPage.formSend')}</button>
        </form>
      </div>
      {/* MAPA */}
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            src="https://www.google.com/maps?q=Jędrzejowice+20b,+58-203+Dzierżoniów&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Gorko Golf"
          ></iframe>
        </div>
      </div>
      {/* CTA */}
      <div className="text-center pb-16">
        <div className="inline-block px-8 py-4 rounded-full bg-green-900 text-white font-bold shadow-lg text-xl hover:bg-green-800 transition">
          {t('contactPage.heroDesc')}
        </div>
      </div>
    </div>
  );
} 
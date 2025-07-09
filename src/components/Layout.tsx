import { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const menu = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/offer", key: "offer" },
  { href: "/gallery", key: "gallery" },
  { href: "/pricing", key: "pricing" },
  { href: "/reservation", key: "reservation" },
  { href: "/faq", key: "faq" },
  { href: "/academy", key: "academy" }, // zamiana z reviews
  { href: "/news", key: "news" },
  { href: "/contact", key: "contact" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const languages = [
    { code: 'pl', label: 'PL' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* NAVBAR */}
      <nav className="w-full sticky top-0 z-50">
        <div className="relative max-w-7xl mx-auto px-4 py-2 flex items-center h-20 bg-white/70 backdrop-blur-md border border-green-100 shadow-lg rounded-b-2xl md:rounded-2xl mt-2 md:mt-4 mx-auto transition-all duration-300">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 z-10">
            <img src="/images/logo.webp" alt="Gorko Golf logo" className="h-16 w-auto object-contain drop-shadow-lg" />
          </a>
          {/* Desktop menu - wyśrodkowane, nie nachodzi na logo */}
          <div className="hidden md:flex flex-1 justify-center space-x-4">
            {menu.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`text-base px-1 py-1 rounded transition font-medium relative
                  ${pathname === item.href ? "bg-green-900 text-white shadow" : "text-gray-700 hover:text-green-900 hover:bg-green-50"}
                  hover:underline underline-offset-8 hover:decoration-green-700
                `}
                style={{ transition: 'all 0.2s' }}
              >
                {t(`menu.${item.key}`)}
              </a>
            ))}
          </div>
          {/* Language switcher & hamburger - po prawej */}
          <div className="flex items-center gap-2 ml-auto z-10">
            <button className="md:hidden ml-2 p-2 rounded hover:bg-green-50 transition" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#14532d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden bg-white/90 backdrop-blur-md border-b shadow-lg px-4 pb-4 transition-all duration-300 ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} style={{ borderRadius: mobileOpen ? '0 0 1.5rem 1.5rem' : '0' }}>
          <div className="flex flex-col gap-2 mt-2">
            {menu.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`text-lg px-2 py-2 rounded transition font-medium ${pathname === item.href ? "bg-green-900 text-white shadow" : "text-gray-700 hover:text-green-900 hover:bg-green-50"} hover:underline underline-offset-8 hover:decoration-green-700`}
                onClick={() => setMobileOpen(false)}
              >
                {t(`menu.${item.key}`)}
              </a>
            ))}
            <div className="mt-2" id="language-switcher-placeholder-mobile"></div>
          </div>
        </div>
      </nav>
      {/* CONTENT */}
      <main className="flex-1 w-full">{children}</main>
      {/* FOOTER */}
      <footer className="bg-green-900 text-white pt-12 pb-6 mt-12 border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 border-b border-green-800 pb-8">
          <div className="flex flex-col items-start">
            <img src="/images/logo.webp" alt="Gorko Golf logo" className="h-14 w-auto object-contain mb-2" />
            <div className="font-serif font-bold text-lg mb-2">{t('footer.aboutTitle')}</div>
            <div className="text-sm opacity-90">{t('footer.aboutDesc')}</div>
          </div>
          <div>
            <div className="font-serif font-bold text-lg mb-2">{t('footer.hoursTitle')}</div>
            <div className="text-sm opacity-90">{t('footer.hours')}</div>
          </div>
          <div>
            <div className="font-serif font-bold text-lg mb-2">{t('footer.assocTitle')}</div>
            <div className="text-sm opacity-90" dangerouslySetInnerHTML={{ __html: t('footer.assocDesc') }} />
          </div>
          <div>
            <div className="font-serif font-bold text-lg mb-2">{t('footer.contactTitle')}</div>
            <div className="text-sm mb-1 opacity-90">biuro@gorkogolf.pl</div>
            <div className="text-sm mb-1 opacity-90">+48 514 255 974</div>
            <div className="text-sm opacity-90">+48 74 85 05 974</div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/gorkogolf/?locale2=pl_PL" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80">
                <img src="/images/facebook.svg" alt="Facebook" style={{ height: 24, width: 'auto', background: 'none' }} className="rounded hover:brightness-90 transition" />
              </a>
              <a href="mailto:biuro@gorkogolf.pl" aria-label="Email" className="hover:opacity-80"><svg width="24" height="24" fill="currentColor"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11zm2.2.5l7.8 6.2L19.8 7H4.2zm-.7 1.6v8.4c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V8.6l-7.6 6.1a1 1 0 0 1-1.3 0L3.5 8.6z"/></svg></a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-green-100 mt-8">&copy; {new Date().getFullYear()} Gorko Golf & Country Club. {t('footer.copyright')}</div>
      </footer>
    </div>
  );
} 
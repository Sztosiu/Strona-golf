import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'pl', label: 'PL' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div className="flex gap-2 bg-white/70 backdrop-blur-md shadow-xl rounded-full px-4 py-2 border border-green-100">
        <span className="text-green-900 text-xl mr-2" title="Change language">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="#14532d" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.07 6.07l-1.41-1.41M6.34 6.34l-1.41-1.41m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/><circle cx="12" cy="12" r="9" stroke="#14532d" strokeWidth="2"/></svg>
        </span>
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`px-2 py-1 rounded-full text-xs font-bold border transition-all duration-150
              ${i18n.language === lang.code ? 'bg-green-900 text-white border-green-900 shadow' : 'bg-white text-green-900 border-green-200 hover:bg-green-50 hover:scale-110'}`}
            style={{ minWidth: 36 }}
            aria-label={lang.label}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
} 
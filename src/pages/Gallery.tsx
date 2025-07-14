import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const images = [
  // Zdjęcia z lotu ptaka - nowe zdjęcia DJI
  { src: "/images/z lotu ptaka/DJI_20250704072840_0260_D.JPG", alt: "Gorko Golf z lotu ptaka - widok ogólny", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704073127_0261_D.JPG", alt: "Gorko Golf z lotu ptaka - pole golfowe", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704073133_0262_D.JPG", alt: "Gorko Golf z lotu ptaka - panorama", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704073226_0263_D.JPG", alt: "Gorko Golf z lotu ptaka - dołki golfowe", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704073746_0266_D.JPG", alt: "Gorko Golf z lotu ptaka - widok z wysokości", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704073757_0267_D.JPG", alt: "Gorko Golf z lotu ptaka - widok panoramiczny", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704073816_0268_D.JPG", alt: "Gorko Golf z lotu ptaka - pole golfowe z góry", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704073935_0269_D.JPG", alt: "Gorko Golf z lotu ptaka - widok na dołki", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704074004_0271_D.JPG", alt: "Gorko Golf z lotu ptaka - panorama terenu", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704074357_0274_D.JPG", alt: "Gorko Golf z lotu ptaka - widok z wysokości", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704074442_0276_D.JPG", alt: "Gorko Golf z lotu ptaka - pole golfowe panoramiczne", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704082654_0294_D.JPG", alt: "Gorko Golf z lotu ptaka - widok poranny", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704082720_0295_D.JPG", alt: "Gorko Golf z lotu ptaka - pole golfowe rano", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704082730_0296_D.JPG", alt: "Gorko Golf z lotu ptaka - widok na dołki rano", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704082821_0297_D.JPG", alt: "Gorko Golf z lotu ptaka - panorama poranna", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704084145_0300_D.JPG", alt: "Gorko Golf z lotu ptaka - widok z wysokości", category: "Z lotu ptaka" },
  { src: "/images/z lotu ptaka/DJI_20250704084159_0301_D.JPG", alt: "Gorko Golf z lotu ptaka - pole golfowe panoramiczne", category: "Z lotu ptaka" },
  { src: "/images/hero-drone.jpg", alt: "Gorko Golf z lotu ptaka - główny widok", category: "Z lotu ptaka" },
  
  // Zdjęcia akademii i pola golfowego (widoczne w "Wszystkie")
  { src: "/images/IMG_1593.887dec4b-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1624.c2a6f471-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1654.d8a21583-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1682.90a9beba-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1783.8ab07bd8-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1784.64e15980-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1841.14ea57af-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1847.5cd302f5-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1855.15e5f8ca-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1871.b8d70de7-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1889.42ae424e-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1896.2905e4da-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1904.2a6b3aed-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1912.ce1ecee0-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1920.1be10d1b-1.webp", alt: "Akademia", category: "Akademia" },
  { src: "/images/IMG_1928.3a64799b-1.webp", alt: "Akademia", category: "Akademia" },
  
  // Zdjęcia restauracji (tylko te dwa nowe z folderu Restauracja)
  { src: "/images/Restauracja/129715936_2810344585908993_2979146253927854291_n.jpg", alt: "Restauracja Gorko Golf - wnętrze", category: "Restauracja" },
  { src: "/images/Restauracja/491880915_1319095556448670_2832730795411451659_n.jpg", alt: "Restauracja Gorko Golf - atmosfera", category: "Restauracja" },
  // Turnieje tylko z folderu /images/turnieje
  { src: "/images/turnieje/IMG_3397.7d0430ec-900x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_3228.8565acbc-900x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_3182.d5ffb8d9-900x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_3151.c1e9e272-900x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_2066.8d0d9d04-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_2062.8c7dc10f-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_2060.aa9f62fb-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_2059.cd53aa8d-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_2052.f0bd3213-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_2051.5239a5cd-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_2020.562b8bdf-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_2017.d4d7d66d-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_2015.728300f1-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_2007.686d4ace-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1985.8ef017da-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1982.f7c13f64-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1975.069064f9-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1951.45d26c29-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1948.9fa3fa0c-800x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1776.2c186a9f-450x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1767.f9eb3ef1-1-450x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1756.eda83690-450x600%20(1).webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1752.ccb5f8d3-800x600%20(1).webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1756.eda83690-450x600.webp", alt: "Turniej", category: "Turnieje" },
  { src: "/images/turnieje/IMG_1752.ccb5f8d3-800x600.webp", alt: "Turniej", category: "Turnieje" },
];

const categories = ["Wszystkie", "Turnieje", "Akademia", "Restauracja", "Z lotu ptaka"];

export default function Gallery() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("Wszystkie");
  const filtered = selected === "Wszystkie" ? images : images.filter(img => img.category === selected);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 py-0">
      {/* HERO */}
      <section className="relative py-20 bg-white text-center shadow rounded-b-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl">{t('galleryPage.heroTitle')}</h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-6">{t('galleryPage.heroDesc')}</p>
      </section>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelected(cat)} className={`px-4 py-2 rounded-full border ${selected === cat ? 'bg-green-600 text-white' : 'bg-white text-green-700 border-green-300'} transition`}>
              {t(`galleryPage.cat_${cat.replace(/ /g, '').toLowerCase()}`)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <div key={i} className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center group cursor-pointer transition-transform hover:scale-105 hover:shadow-xl">
              <img src={img.src} alt={img.alt} className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-110" loading="lazy" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
} 
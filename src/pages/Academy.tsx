import React from "react";

export default function Academy() {
  return (
    <div className="min-h-screen bg-white py-0">
      <section className="relative py-20 bg-green-100/70 text-center shadow rounded-b-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl flex items-center justify-center gap-3">
          <span className="text-5xl">⛳</span> Akademia Gorko Golf
        </h1>
        <p className="text-xl text-gray-800 mb-6 font-serif max-w-2xl mx-auto">Zacznij z nami przygodę już teraz i odkryj pasję do golfa w naszej Akademii Gorko Golf!</p>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">Nie musisz być profesjonalistą, by pokochać golfa. Chcesz zacząć, ale nie wiesz jak? Wszystkiego Cię nauczymy na miejscu w przepięknej miejscowości, gdzie poczujesz spokój ducha, przyjazną atmosferę i pokochasz przepiękne otoczenie w Gorko Golf & Country Club.</p>
      </section>
      <section className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-8">Dla kogo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🧑‍🦳</span>
            <div className="font-bold text-green-900 mb-1">Dorośli</div>
            <div className="text-gray-700 text-sm">Nauka gry od podstaw po zaawansowane techniki.</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🧑‍🎓</span>
            <div className="font-bold text-green-900 mb-1">Młodzież</div>
            <div className="text-gray-700 text-sm">Indywidualne i grupowe zajęcia dla młodzieży.</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🧒</span>
            <div className="font-bold text-green-900 mb-1">Dzieci (od 6 lat!)</div>
            <div className="text-gray-700 text-sm">Pierwsze kroki w golfie pod okiem trenerów.</div>
          </div>
        </div>
        <ul className="text-left text-lg text-gray-800 mb-8 max-w-2xl mx-auto list-disc list-inside">
          <li>Chcesz aktywnie spędzać czas na świeżym powietrzu?</li>
          <li>Marzysz o eleganckim i wyjątkowym sporcie, który łączy ruch i relaks z precyzją i rywalizacją?</li>
          <li>Szukasz nowego hobby dla siebie lub całej rodziny?</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">Golf to nie tylko sport – to styl życia, który uczy cierpliwości, koncentracji i elegancji. Nasza akademia pomoże Ci opanować technikę, zrozumieć strategię gry i czerpać radość z każdego uderzenia.</p>
        <p className="text-lg text-green-900 font-bold mb-8">Pierwszy krok może zmienić wszystko – zapisz się już dziś i odkryj, jak wiele satysfakcji daje gra w golfa!</p>
      </section>
      <section className="max-w-3xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-2">Dlaczego warto?</h3>
          <ul className="text-left text-gray-800 text-base list-disc list-inside">
            <li>Indywidualne i grupowe podejście do każdego uczestnika</li>
            <li>Doświadczeni, personalni trenerzy golfa</li>
            <li>Brak wymagań sprzętowych i doświadczenia – wszystkim się zajmiemy!</li>
            <li>Przyjazna atmosfera i piękne otoczenie</li>
            <li>Elastyczne godziny zajęć – lekcje 7 dni w tygodniu</li>
          </ul>
        </div>
        <div className="mb-8">
          <div className="text-lg text-gray-800 mb-2">Nie musisz mieć niczego oprócz chęci i pozytywnego nastawienia!</div>
          <div className="text-base text-gray-700">Wszystko zapewniamy na miejscu.</div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
          <div className="bg-green-900 text-white rounded-xl px-6 py-4 shadow text-lg font-bold">
            📍 Lokalizacja: Gorko Golf & Country Club
          </div>
          <div className="bg-green-900 text-white rounded-xl px-6 py-4 shadow text-lg font-bold">
            📅 Terminy: Elastyczne godziny, lekcje 7 dni w tygodniu
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="tel:+48514255974" className="px-8 py-4 rounded bg-green-800 text-white font-bold shadow hover:bg-green-700 transition text-lg">Zadzwoń: +48 514 255 974</a>
          <a href="mailto:biuro@gorkogolf.pl" className="px-8 py-4 rounded bg-green-800 text-white font-bold shadow hover:bg-green-700 transition text-lg">Napisz: biuro@gorkogolf.pl</a>
          <a href="https://www.gorkogolf.pl" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded bg-green-800 text-white font-bold shadow hover:bg-green-700 transition text-lg">www.gorkogolf.pl</a>
        </div>
      </section>
    </div>
  );
} 
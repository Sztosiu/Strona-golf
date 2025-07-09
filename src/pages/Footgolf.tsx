import React from "react";

export default function Footgolf() {
  return (
    <div className="min-h-screen bg-white py-0">
      <section className="relative py-20 bg-green-100/70 text-center shadow rounded-b-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-4 drop-shadow-xl flex items-center justify-center gap-3">
          <span className="text-5xl">⚽⛳</span> Footgolf w Gorko Golf
        </h1>
        <p className="text-xl text-gray-800 mb-6 font-serif max-w-2xl mx-auto">
          Footgolf, jest połączeniem dwóch dyscyplin sportowych: piłki nożnej oraz golfa. Gra polega na pokonaniu pola z jak najmniejszą ilością uderzeń podczas zdobywania kolejnych dołków, tak jak w golfie. W tym przypadku zamiast kija, gracz używa własnych nóg, piłeczkę golfową zastępuje piłka w rozmiarze 5, a dołek jest proporcjonalnie większy względem dołka do gry w golfa.
        </p>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Rozgrywki toczą się na przygotowanym polu footgolfowym, które składa się z 9 lub 18 dołków o różnej długości i zróżnicowanym terenie, zawierającym bunkry z piaskiem oraz przeszkody wodne. Każdy dołek ma oznaczone miejsce startu zwane Tee, oraz uwzględnioną liczbę uderzeń określaną jako PAR (najczęściej ustalany między 3, a 5 uderzeń). Celem gracza jest pokonanie wszelakich przeszkód uderzając piłkę w kierunku Greena, czyli obszaru w którym znajduję się dołek. Wygrywa ten zawodnik, który uzyska jak najniższą liczbę uderzeń względem ustalonego PAR.
        </p>
      </section>
      <section className="max-w-3xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-green-900 mb-6 flex items-center justify-center gap-2">
          <span className="text-2xl">📋</span> Podstawowe zasady gry w footgolfa
        </h2>
        <div className="flex justify-center mb-6">
          <img src="/images/footgolf-zasady.jpg" alt="Podstawowe zasady gry w footgolfa" className="rounded-xl shadow max-w-full h-auto" style={{maxWidth: 700}} />
        </div>
        <p className="text-gray-600 text-sm">Zasady footgolfa – kliknij, aby powiększyć</p>
      </section>
      <section className="max-w-4xl mx-auto px-4 mb-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">⛳</span>
            <div className="font-bold text-green-900 mb-1">9 lub 18 dołków</div>
            <div className="text-gray-700 text-sm">Różne długości, przeszkody, bunkry i woda.</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">👨‍👩‍👧‍👦</span>
            <div className="font-bold text-green-900 mb-1">Dla każdego</div>
            <div className="text-gray-700 text-sm">Świetna zabawa dla dzieci, dorosłych i rodzin.</div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">📞</span>
            <div className="font-bold text-green-900 mb-1">Rezerwacje i info</div>
            <div className="text-gray-700 text-sm">+48 514 255 974<br />biuro@gorkogolf.pl</div>
          </div>
        </div>
      </section>
    </div>
  );
} 
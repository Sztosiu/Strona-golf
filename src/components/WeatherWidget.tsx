export default function WeatherWidget() {
  // Mock data
  const current = {
    temp: 21,
    desc: "Słonecznie",
    wind: 12,
    icon: "☀️",
  };
  const forecast = [
    { day: "Jutro", temp: 19, icon: "🌤️", wind: 10 },
    { day: "Pojutrze", temp: 17, icon: "🌦️", wind: 14 },
    { day: "Za 3 dni", temp: 16, icon: "🌧️", wind: 18 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-xl mx-auto">
      <div className="flex items-center gap-6 mb-6">
        <span className="text-6xl">{current.icon}</span>
        <div>
          <div className="text-4xl font-bold text-green-900">{current.temp}&deg;C</div>
          <div className="text-lg text-gray-700">{current.desc}</div>
          <div className="text-sm text-gray-500 mt-1">Wiatr: {current.wind} km/h</div>
        </div>
      </div>
      <div className="flex gap-6 justify-center mt-4">
        {forecast.map((f, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-3xl mb-1">{f.icon}</span>
            <div className="text-base font-bold text-green-900">{f.temp}&deg;C</div>
            <div className="text-xs text-gray-700">{f.day}</div>
            <div className="text-xs text-gray-500">Wiatr: {f.wind} km/h</div>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-400 mt-4">Jędrzejowice, aktualizacja: 2 minuty temu</div>
    </div>
  );
} 
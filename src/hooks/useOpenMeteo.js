import { useEffect, useState } from "react";

export const useOpenMeteo = () => {
  const [data, setData] = useState(null);
  const [nowIndex, setNowIndex] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=44.0268&longitude=145.1645&timezone=Asia/Tokyo&hourly=temperature_2m,wind_speed_10m,precipitation,weathercode&forecast_days=2"
      )
      ;

      if (!res.ok) {
        console.error("OpenMeteo fetch failed:", res.status);
        return;
      }

      const json = await res.json();

      if (!json.hourly || !Array.isArray(json.hourly.time)) {
        console.error("hourly data missing");
        return;
      }

      setData(json);

      const now = new Date();
      const index = json.hourly.time.findIndex(t => {
        if (!t) return false;
        return new Date(t).getHours() === now.getHours();
      });

      setNowIndex(index >= 0 ? index : 0);

    } catch (err) {
      console.error("Weather fetch error:", err);
    }
  };

  useEffect(() => {
    fetchWeather();

    const timer = setInterval(fetchWeather, 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  return { data, nowIndex };
};

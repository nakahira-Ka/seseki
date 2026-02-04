const SeishiScore = ({ data, nowIndex }) => {
  const temp = data.hourly.temperature_2m[nowIndex];
  const wind = data.hourly.wind_speed_10m[nowIndex];
  const rain = data.hourly.precipitation[nowIndex];
  const code = data.hourly.weathercode[nowIndex];
  const wave = data.hourly.wave_height ? data.hourly.wave_height[nowIndex] : 0;

  // 各項目のスコア計算
const scoreTemp = temp >= 15 ? 20 : temp >= 10 ? 10 : temp >= 5 ? 5 : 0;
  const scoreWind = wind <= 5 ? 25 : wind <= 10 ? 10 : 0;
  const scoreRain = rain === 0 ? 20 : rain <= 1 ? 5 : 0;
  const scoreWeather = code <= 1 ? 25 : code <= 3 ? 5 : 0;
  const scoreWave =wave <= 25 ? 10: 50 ? 5 :wave <= 100 ? 0 :wave <= 150 ? 0 :0;

  const total = scoreTemp + scoreWind + scoreRain + scoreWeather + scoreWave;

  const result =
    total < 40 ? "入れなさそう" :
    total < 70 ? "微妙" :
    "入れそう";

  const bgImage =
    total < 40
      ? "/img/batu.png"
      : total < 70
      ? "/img/sannkaku.png"
      : "/img/maru.png";

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ transform: "translateY(180px)" }}>
        <p style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>
          {total}%
        </p>
        <strong style={{ fontSize: "20px" }}>
          {result}
        </strong>
      </div>
    </div>
  );
};

export default SeishiScore;

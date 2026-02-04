import React from "react";
import "../../css/currentScore.css";

const CurrentScore = ({ data, nowIndex }) => {
  const temp = data.hourly.temperature_2m[nowIndex];
  const wind = data.hourly.wind_speed_10m[nowIndex];
  const rain = data.hourly.precipitation[nowIndex];
  const weatherCode = data.hourly.weathercode[nowIndex];

  const weatherText =
    weatherCode === 0 ? "晴れ" :
    weatherCode <= 2 ? "晴れ時々曇り" :
    weatherCode <= 3 ? "曇り" :
    weatherCode <= 61 ? "雨" :
    "荒天";

  return (
    <div className="current-score">
      <h3>現在の状況</h3>

      <div className="current-grid">
        <div>
          <span className="label">天気</span>
          <span className="value">{weatherText}</span>
        </div>

        <div>
          <span className="label">気温</span>
          <span className="value">{temp} ℃</span>
        </div>

        <div>
          <span className="label">雨量</span>
          <span className="value">{rain} mm</span>
        </div>

        <div>
          <span className="label">風速</span>
          <span className="value">{wind} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentScore;

// import React from "react";
// import WeekTideVIew from "../hourlyForecast/WeekTideVIew";
// import "../../css/hourlyForecast.css";

// const HourlyForecast = ({ data, nowIndex }) => {
//   if (!data || nowIndex === null) {
//     return <p>予報データ読み込み中...</p>;
//   }

//   const hourly = data.hourly;

//   // 今から24時間分
//   const hours = Array.from({ length: 24 }, (_, i) => nowIndex + i)
//     .filter(i => hourly.time[i]);

//   return (
//     <section className="hourly-wrapper">
//       <div className="hourly-left">
//         <h3>24時間天気予報</h3>

//         <div className="hourly-scroll">
//           {hours.map(i => {
//             const time = new Date(hourly.time[i]);
//             const hour = time.getHours();
          
//             return (
//               <div className="current-score" key={i}>
//                 <h3>{hour}時</h3>
            
//                 <div className="current-grid">
//                   <div>
//                     <span className="label">予想天気</span>
//                     <span className="value">
//                       {hourly.weathercode[i]}
//                     </span>
//                   </div>
            
//                   <div>
//                     <span className="label">予想気温</span>
//                     <span className="value">
//                       {hourly.temperature_2m[i]} ℃
//                     </span>
//                   </div>
            
//                   <div>
//                     <span className="label">予想雨量</span>
//                     <span className="value">
//                       {hourly.precipitation[i]} mm
//                     </span>
//                   </div>
            
//                   <div>
//                     <span className="label">予想風速</span>
//                     <span className="value">
//                       {hourly.wind_speed_10m[i]} m/s
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>

//       <div className="hourly-right">
//         <WeekTideVIew />
//       </div>
//     </section>
//   );
// };

// export default HourlyForecast;












import React from "react";
import WeekTideVIew from "../hourlyForecast/WeekTideVIew";
import "../../css/hourlyForecast.css";

const HourlyForecast = ({ data, nowIndex }) => {
  if (!data || nowIndex === null) {
    return <p>予報データ読み込み中...</p>;
  }

  const hourly = data.hourly;

  const getWeatherText = (code) => {
    if (code === 0) return "晴れ";
    if (code === 1) return "晴れ";
    if (code === 2) return "晴れ時々曇り";
    if (code === 3) return "曇り";
    if (code >= 45 && code <= 48) return "霧";
    if (code >= 51 && code <= 67) return "雨";
    if (code >= 71 && code <= 77) return "雪";
    if (code >= 80 && code <= 82) return "にわか雨";
    if (code >= 95) return "雷雨";
    return "不明";
  };

  // 今から24時間分
  const hours = Array.from({ length: 24 }, (_, i) => nowIndex + i)
    .filter((i) => hourly.time[i]);

  return (
    <section className="hourly-wrapper">
      <div className="hourly-left">
        <h3>24時間天気予報</h3>

        <div className="hourly-scroll">
          {hours.map((i) => {
            const time = new Date(hourly.time[i]);
            const hour = time.getHours();
            const weatherCode = hourly.weathercode[i];

            return (
              <div className="current-score" key={i}>
                <h3>{hour}時</h3>

                <div className="current-grid">
                  <div>
                    <span className="label">予想天気</span>
                    <span className="value">
                      {getWeatherText(weatherCode)}
                    </span>
                  </div>

                  <div>
                    <span className="label">予想気温</span>
                    <span className="value">
                      {hourly.temperature_2m[i]} ℃
                    </span>
                  </div>

                  <div>
                    <span className="label">予想雨量</span>
                    <span className="value">
                      {hourly.precipitation[i]} mm
                    </span>
                  </div>

                  <div>
                    <span className="label">予想風速</span>
                    <span className="value">
                      {hourly.wind_speed_10m[i]} m/s
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hourly-right">
        <WeekTideVIew />
      </div>
    </section>
  );
};

export default HourlyForecast;

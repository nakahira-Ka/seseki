import React from "react";

const HourlyItem = ({ data }) => {
  const hour = new Date(data.time).getHours();

  return (
    <div className="hourly-item">
      <p className="hour">{hour}時</p>
      <p>{data.temp}℃</p>
      <p>{data.wind} m/s</p>
      <p>{data.rain} mm</p>
    </div>
  );
};

export default HourlyItem;

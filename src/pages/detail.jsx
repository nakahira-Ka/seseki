import React from "react";
import "../css/ress.css";
import "../css/index.css";
import Header from "../components/header";
import NowStatus from "../features/nowStatus/NowStatus";
import Footer from "../components/footer";
import HourlyForecast from "../features/hourlyForecast/HourlyForecast";
import { useOpenMeteo } from "../hooks/useOpenMeteo";

const Detail = () => {
  const { data, nowIndex } = useOpenMeteo();
  return (
    <main>
      <Header />
      <NowStatus />
      <HourlyForecast data={data} nowIndex={nowIndex} />
      {/* <WeeklyForecast /> */}
      <Footer />
    </main>
  );
};

export default Detail;

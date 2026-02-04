import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

const TideView = () => {
  const [tideData, setTideData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8888/rausu_tide.php" )
      .then((res) => res.json())
      .then((json) => setTideData(json))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!tideData?.tide?.chart) {
    return <p style={{ textAlign: "center", padding: "20px" }}>潮汐データ読み込み中...</p>;
  }

  const charts = tideData.tide.chart;
  const dateKey = Object.keys(charts)[0];
  const tideArray = charts[dateKey].tide; 

  if (!Array.isArray(tideArray)) {
    return <p>データの形式が正しくありません</p>;
  }

  const labels = tideArray.map((t) => t.time);
  const values = tideArray.map((t) => Number(t.cm));

  const data = {
    labels,
    datasets: [
      {
        label: "潮位 (cm)",
        data: values,
        borderColor: "#2b6cb0",
        backgroundColor: "rgba(43, 108, 176, 0.1)", 
        borderWidth: 2,
        tension: 0.4,   
        pointRadius: 0, 
        fill: true,     
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        intersect: false,
        mode: 'index',
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "潮位 (cm)"
        }
      },
      x: {
        grid: {
          display: false 
        }
      }
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
        潮汐グラフ ({dateKey})
      </h3>
      <div style={{ background: "#fff", padding: "10px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TideView;
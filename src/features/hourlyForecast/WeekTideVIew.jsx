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

const WeekTideView = () => {
  const [tideData, setTideData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8888/rausu_tide.php")
      .then(res => res.json())
      .then(json => setTideData(json))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  if (!tideData?.tide?.chart) {
    return <p style={{ textAlign: "center", padding: "20px" }}>潮汐データ読み込み中...</p>;
  }

  const charts = tideData.tide.chart;

  // ===== 7日分のデータを結合 =====
  const labels = [];
  const values = [];

  Object.keys(charts).forEach(date => {
    const tides = charts[date].tide;

    if (!Array.isArray(tides)) return;

    tides.forEach(t => {
      labels.push(`${date} ${t.time}`);
      values.push(Number(t.cm));
    });
  });

  const data = {
    labels,
    datasets: [
      {
        label: "潮位 (cm)",
        data: values,
        borderColor: "#2b6cb0",
        backgroundColor: "rgba(43, 108, 176, 0.15)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: "index",
        intersect: false
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "潮位 (cm)"
        }
      },
      x: {
        ticks: {
          maxTicksLimit: 14 // 横軸を詰めすぎない
        },
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", padding: "16px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "12px" }}>
        今後1週間の潮汐
      </h3>

      <div
        style={{
          height: "300px",
          background: "#fff",
          borderRadius: "8px",
          padding: "10px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default WeekTideView;

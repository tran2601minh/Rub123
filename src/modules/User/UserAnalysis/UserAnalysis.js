import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { NavLink } from "react-router-dom";
import StarGif from "resource/5a89478832.gif";
import "./UserAnalysis.css";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
};

const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    " Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Benchpress",
      data: [12, 23, 23, 32, 36],
      fill: false,
      borderColor: "#0f7f3a",
    },
    {
      label: "Benchpress",
      data: [8, 12, 18, 20, 21],
      fill: false,
      borderColor: "#c1ee32",
    },
  ],
};

function UserAnalysis() {
  return (
    <div className="analysis-page">
      <h1>MY PERSONALIZED PLAN</h1>
      <p>
        <img src={StarGif} alt="star-gif" />
        Good job! Here is your progress so far
      </p>

      <Line options={options} data={data} />

      <NavLink to="/user/journal">
        <button>LOG YOUR JOURNEY</button>
      </NavLink>
    </div>
  );
}

export default UserAnalysis;

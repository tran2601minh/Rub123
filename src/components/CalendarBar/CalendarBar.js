import { useState } from "react";
import ArrowLeft from "resource/angle-left-solid.svg";
import ArrowRight from "resource/angle-right-solid.svg";
import "./CalendarBar.css";

const month = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weekDay = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function getMonday(d) {
  const day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function CalendarBar(props) {
  const { selectedIdx, setSelectedIdx } = props;
  const [monday, setMonday] = useState(getMonday(new Date()));

  return (
    <div className="calendar-bar">
      <button
        onClick={() =>
          setMonday(new Date(monday.setDate(monday.getDate() - 7)))
        }
      >
        <img src={ArrowLeft} alt="arrow-left" />
        <img src={ArrowLeft} alt="arrow-left" />
      </button>
      <ul className="calendar-list">
        {weekDay.map((val, idx) => {
          const day = new Date(monday);
          day.setDate(day.getDate() + idx);
          return (
            <li
              key={idx}
              className={selectedIdx === idx ? "active" : ""}
              onClick={() => setSelectedIdx(idx)}
            >
              <p className="subtitle-2">
                {month[day.getMonth()]} {day.getDate()}
              </p>
              <h4>{val}</h4>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() =>
          setMonday(new Date(monday.setDate(monday.getDate() + 7)))
        }
      >
        <img src={ArrowRight} alt="arrow-right" />
        <img src={ArrowRight} alt="arrow-right" />
      </button>
    </div>
  );
}

export default CalendarBar;

import { useState } from "react";
import CalendarBar from "components/CalendarBar/CalendarBar";
import SquatsImg from "resource/squats.jpg";
import BenchPressImg from "resource/benchpress.jpg";
import BarbellRowImg from "resource/barbellrow.jpg";
import DeadliftImg from "resource/deadlift.jpg";
import OverheadPressImg from "resource/overheadpress.jpg";
import "./UserSchedule.css";

const day = new Date().getDay(),
  diff = new Date().getDay() - day + (day === 0 ? -6 : 1);

const scheduleDataA = [
  { name: "Squats", img: SquatsImg },
  { name: "Bench Press", img: BenchPressImg },
  { name: "Barbell Row", img: BarbellRowImg },
];
const scheduleDataB = [
  { name: "Deadlift", img: DeadliftImg },
  { name: "Overhead Press", img: OverheadPressImg },
  { name: "Barbell Row", img: BarbellRowImg },
];

function UserSchedule() {
  const [selectedIdx, setSelectedIdx] = useState(diff);

  return (
    <div className="userschedule-page">
      <h1>MY PERSONALIZED PLAN</h1>
      <CalendarBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      <div className="schedule">
        {[...(selectedIdx % 2 === 0 ? scheduleDataA : scheduleDataB)].map(
          (val) => (
            <div className="exercise" key={val.name}>
              <p>{val.name}</p>
              <p>5 x 5</p>
              <div className="img-container">
                <img src={val.img} alt="exercise-img" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default UserSchedule;

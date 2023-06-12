import { useState } from "react";
import CalendarBar from "components/CalendarBar/CalendarBar";
import SquatsImg from "resource/squats.jpg";
import BenchPressImg from "resource/benchpress.jpg";
import BarbellRowImg from "resource/barbellrow.jpg";
import DeadliftImg from "resource/deadlift.jpg";
import OverheadPressImg from "resource/overheadpress.jpg";
import "./UserInput.css";

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

function UserInput() {
  const [selectedIdx, setSelectedIdx] = useState(diff);
  const [selectedExercise, setSelectedExercise] = useState(0);

  return (
    <div className="userschedule-page">
      <h1>MY PERSONALIZED PLAN</h1>
      <CalendarBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      <div className="schedule">
        {[...(selectedIdx % 2 === 0 ? scheduleDataA : scheduleDataB)].map(
          (val, idx) => (
            <div
              className={`exercise-input ${
                selectedExercise === idx ? "active" : ""
              }`}
              key={val.name}
              onClick={() => setSelectedExercise(idx)}
            >
              <div className="exercise">
                <p>{val.name}</p>
                <p>5 x 5</p>
                <div className="img-container">
                  <img src={val.img} alt="exercise-img" />
                </div>
              </div>
              <form>
                <label className="w-45">
                  Exercise Weight
                  <input />
                </label>
                <label className="w-30">
                  Sets x Reps
                  <input />
                </label>
                <label className="w-40">
                  Bar Weight
                  <input />
                </label>
                <label className="w-40">
                  Increments
                  <input />
                </label>
                <label className="w-100">
                  Plates
                  <input />
                </label>
              </form>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default UserInput;

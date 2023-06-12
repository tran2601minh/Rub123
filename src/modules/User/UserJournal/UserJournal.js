import { useState } from "react";
import { NavLink } from "react-router-dom";
import CongratulationImg from "resource/congratulation.jpeg";
import "./UserJournal.css";

function UserJournal() {
  const [finish, setFinish] = useState(false);

  return (
    <div className="journal-page">
      <h1>MY FITNESS JOURNEY</h1>
      {!finish ? (
        <>
          <p>Tell us how you feel.</p>
          <div>
            <label>How was your performance today?</label>
            <input />
          </div>
          <div>
            <label>Which part of your body does it hurt the most?</label>
            <input />
          </div>
          <div>
            <label>What energized you today?</label>
            <input />
          </div>
          <div>
            <label>What stole your energy today?</label>
            <input />
          </div>
          <div>
            <label>Quick note for improvement for the next session.</label>
            <textarea rows="4" />
          </div>
          <button onClick={() => setFinish(true)}>FINISH</button>
        </>
      ) : (
        <>
          <img src={CongratulationImg} alt="congratulation-img" />
          <h3>ON FINISHING YOUR WORKOUT TODAY!</h3>
          <p className="helper">
            Redo your Fitness Journey?{" "}
            <span onClick={() => setFinish(false)}>Click here</span>
          </p>
          <NavLink to="/blog">
            <button className="">Check out our Articles today</button>
          </NavLink>
          <NavLink to="/community">
            <button>Chat with us on our forum</button>
          </NavLink>
        </>
      )}
    </div>
  );
}

export default UserJournal;

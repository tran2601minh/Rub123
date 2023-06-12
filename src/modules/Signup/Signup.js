import { NavLink } from "react-router-dom";
import ReturnImg from "resource/circle-left-regular.svg";
import "./Signup.css";

function SignUp() {
  return (
    <div className="signup-page">
      <NavLink to="/">
        <img src={ReturnImg} alt="return-img" />
      </NavLink>
      <h3 className="logo-text">
        FIT<span>4</span>HAPPINESS
      </h3>
      <h3 className="header">Create an account</h3>
      <form className="sign-up">
        <div>
          <label>First Name</label>
          <input />
        </div>
        <div>
          <label>Last Name</label>
          <input />
        </div>
        <div>
          <label>Email Address</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input />
        </div>
        <div>
          <label>Phone Number</label>
          <input />
        </div>
        <div>
          <label>Birthday</label>
          <input placeholder="MM/DD/YYY" />
        </div>
        <div className="checkbox-container">
          <label>Terms and Conditions</label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="custom-checkbox"></span>
            <p>
              I agree to the <span>Term of Service</span> and{" "}
              <span>Privacy Policies</span>
            </p>
          </label>
        </div>
        <NavLink to="/user/schedule">
          <button>CREATE ACCOUNT</button>
        </NavLink>
      </form>
    </div>
  );
}

export default SignUp;

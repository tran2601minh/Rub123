import { NavLink } from "react-router-dom";
import ReturnImg from "resource/circle-left-regular.svg";
import Logo from "resource/F4HLogo.png";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <NavLink to="/" className="return-link">
        <img src={ReturnImg} alt="return-homepage" />
      </NavLink>
      <img src={Logo} alt="Fit4Happiness-logo" />
      <h3 className="logo-text">
        FIT<span>4</span>HAPPINESS
      </h3>
      <input placeholder="Email address" />
      <input placeholder="Password" type="password" />
      <p className="subtitle-1">
        Forgot your password? <span>Reset now</span>
      </p>
      <NavLink to="/user/schedule" className="userpage-link">
        <button>Login</button>
      </NavLink>
    </div>
  );
}

export default Login;

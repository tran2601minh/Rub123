import { NavLink } from "react-router-dom";
import Logo from "resource/F4HLogo.png";
import Avatar from "resource/avatar.png";
import "./Header.css";

function Header({ isLogin }) {
  return (
    <header>
      <NavLink to="/" className="logo-section">
        <img src={Logo} alt="Fit4happiness-logo" className="main-logo" />
        <h4 className="logo-text">
          FIT<span>4</span>HAPPINESS
        </h4>
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/schedule"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            PLAN
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            FITNESS BLOG
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/community"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            COMMUNITY
          </NavLink>
        </li>
        <li>
          <NavLink to={isLogin ? "/user/schedule" : "/login"}>
            <img src={Avatar} alt="avatar" className="icon" />
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;

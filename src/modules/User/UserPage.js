import { NavLink, Outlet } from "react-router-dom";
import "./UserPage.css";

function UserPage() {
  return (
    <div className="user-page">
      <aside>
        <NavLink
          to="/user/schedule"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Schedule
        </NavLink>
        <NavLink
          to="/user/input"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Data input
        </NavLink>
        <NavLink
          to="/user/detail"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Report
        </NavLink>
        <NavLink
          to="/user/journal"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My Fitness Journey
        </NavLink>
      </aside>
      <Outlet />
    </div>
  );
}

export default UserPage;

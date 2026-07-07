import { Outlet, NavLink } from "react-router-dom";
import "../App.css";

export default function Layout() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <NavLink to="/" className="logo">
            Manish<span>.</span>
          </NavLink>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <p>© 2026 Manish Yadav. All Rights Reserved.</p>
      </footer>
    </>
  );
}
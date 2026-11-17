import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-left">
        <h1>Employee Management System</h1>
        <p>Manage your employees easily</p>
      </div>

      <nav className="header-right">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/employees">Employee List</NavLink>
      </nav>

    </header>
  );
}

export default Header;
import { NavLink } from "react-router-dom";
import CSS from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={CSS.header}>
      <nav className={CSS.navigation}>
        <NavLink to="/" className={CSS.navigationLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={CSS.navigationLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

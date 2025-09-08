import { NavLink } from "react-router";
import css from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink className={css.navLink} to={"/"}>
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={css.navLink} to={"/catalog"}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

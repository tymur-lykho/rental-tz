import css from "./NavBar.module.css";

import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.active}` : css.navLink
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.active}` : css.navLink
            }
            to={"/catalog"}
            end
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

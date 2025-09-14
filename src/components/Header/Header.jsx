import css from "./Header.module.css";

import { NavLink } from "react-router";

import Icon from "../reusable/Icon";
import NavBar from "../NavBar/NavBar";
import Container from "../reusable/Container/Container";

export default function Header() {
  return (
    <header className={css.header}>
      <Container className={css.headerContainer}>
        <NavLink className={css.logoLink} to={"/"}>
          <Icon id={"logo"} width={104} height={16} />
        </NavLink>
        <NavBar />
      </Container>
    </header>
  );
}

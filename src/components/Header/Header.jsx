import css from "./Header.module.css";
import Icon from "../reusable/Icon";
import Container from "../reusable/Container/Container";
import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router";

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

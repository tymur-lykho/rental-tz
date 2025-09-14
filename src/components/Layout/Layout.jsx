import Header from "../Header/Header";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={css.wrapper}>{children}</div>
    </>
  );
}

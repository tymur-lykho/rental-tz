import css from "./Layout.module.css";

import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={css.wrapper}>{children}</div>
    </>
  );
}

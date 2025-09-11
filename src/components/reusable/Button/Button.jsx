import clsx from "clsx";
import { Link } from "react-router";
import css from "./Button.module.css";

export default function Button({ linkTo, onClick, className, children }) {
  const classes = clsx(css.btn, className);

  if (linkTo) {
    return (
      <Link to={linkTo} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

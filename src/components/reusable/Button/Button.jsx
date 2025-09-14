import clsx from "clsx";
import { Link } from "react-router";
import css from "./Button.module.css";

export default function Button({
  type = "button",
  linkTo,
  onClick,
  className,
  children,
  disabled = false,
}) {
  const classes = clsx(css.btn, className);

  if (linkTo) {
    return (
      <Link to={linkTo} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

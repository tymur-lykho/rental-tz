import css from "./FromToInput.module.css";

import { TextField, InputLabel } from "@mui/material";

export default function FromToInput({
  title,
  fromLabel,
  toLabel,
  minValue,
  maxValue,
  onChangeMin,
  onChangeMax,
}) {
  const sharedSx = {
    ".MuiOutlinedInput-root": {
      backgroundColor: "var(--inputs)",
      width: "100%",
      "@media (min-width:1440px)": {
        maxWidth: "160px",
        width: "160px",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    ".MuiFormLabel-root": {
      position: "absolute",
      top: "-3px",
      left: "6px",
      fontFamily: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      fontWeight: "inherit",
      color: "var(--main)",
      "&.Mui-focused": {
        color: "inherit",
      },
    },
  };

  return (
    <div className={css.wrapper}>
      <span className={css.title}>{title}</span>
      <div className={css.fieldsWrapper}>
        <TextField
          type="number"
          label={fromLabel}
          value={minValue}
          onChange={(e) => {
            const value =
              e.target.value === "" ? "" : Math.max(0, Number(e.target.value));
            onChangeMin(value);
          }}
          sx={{
            ...sharedSx,
            ".MuiOutlinedInput-root": {
              ...sharedSx[".MuiOutlinedInput-root"],
              borderRadius: "12px 0 0 12px",
              borderRight: "1px solid var(--gray-light)",
            },
            ".MuiInputBase-input": {
              padding: "12px 12px 12px 62px",
            },
          }}
          slotProps={{
            inputLabel: { shrink: false },
            htmlInput: { min: 0, max: maxValue, step: 250 },
          }}
        />
        <TextField
          type="number"
          label={toLabel}
          value={maxValue}
          onChange={(e) => {
            const value =
              e.target.value === ""
                ? ""
                : Math.max(minValue ?? 0, Number(e.target.value));
            onChangeMax(value);
          }}
          sx={{
            ...sharedSx,
            ".MuiOutlinedInput-root": {
              ...sharedSx[".MuiOutlinedInput-root"],
              borderRadius: "0 12px 12px 0",
            },
            ".MuiInputBase-input": {
              padding: "12px 12px 12px 42px",
            },
          }}
          slotProps={{
            inputLabel: { shrink: false },
            htmlInput: {
              min: minValue ?? 0,
              step: 250,
            },
          }}
        />
      </div>
    </div>
  );
}

import { TextField, InputLabel } from "@mui/material";
import css from "./FromToInput.module.css";

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
      maxWidth: "160px",
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
          onChange={onChangeMin}
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
          }}
        />
        <TextField
          type="number"
          label={toLabel}
          value={maxValue}
          onChange={onChangeMax}
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
          }}
        />
      </div>
    </div>
  );
}

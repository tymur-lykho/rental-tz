import css from "./Select.module.css";

import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import Icon from "../Icon";

export default function CustomSelect({
  title = "Select title",
  onChange = () => {
    console.log("Changed");
  },
  value,
  values,
  textInSelect,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={css.selectWrapper}>
      <InputLabel
        variant="standard"
        id="demo-simple-select-helper-label"
        sx={{
          fontFamily: "inherit",
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: 1.33,
          color: "var(--gray)",
          marginBottom: "8px",
        }}
      >
        {title}
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        variant="outlined"
        value={value}
        displayEmpty
        onChange={onChange}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        sx={{
          fontFamily: "inherit",
          lineHeight: "inherit",
          width: "100%",
          ".MuiSelect-select": {
            borderRadius: "12px",
            padding: "12px",
            backgroundColor: "var(--inputs)",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        IconComponent={() => (
          <Icon
            id="arrow"
            width={16}
            height={16}
            className={`${css.icon} ${open ? css.iconOpen : ""}`}
          />
        )}
      >
        <MenuItem value="">{textInSelect}</MenuItem>
        {values.map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

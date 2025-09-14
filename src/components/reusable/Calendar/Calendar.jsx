import { useState } from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function Calendar({ bookingDate, setFieldValue }) {
  const [open, setOpen] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disablePast
        value={bookingDate}
        onChange={(newValue) => setFieldValue("bookingDate", newValue)}
        label="Booking Date"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        slotProps={{
          textField: {
            onClick: () => setOpen(true),
            sx: {
              "&.MuiPickersTextField-root": {
                width: "100%",
                marginBottom: "16px",
                border: "none",
              },
              "& .MuiInputLabel-root": {
                fontFamily: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit",
                color: "var(--gray)",
                left: "5px",
                top: "-2px",

                "&[data-shrink='true']": {
                  display: "none",
                },
              },
              "& .MuiPickersOutlinedInput-root": {
                fontFamily: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit",
                color: "inherit",
                padding: "0px 20px",
                borderRadius: "12px",
                backgroundColor: "var(--inputs)",

                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
              "& .MuiSvgIcon-root": {
                color: "var(--main)",
              },
              "& .MuiPickersInputBase-sectionsContainer": {
                fontFamily: "inherit",
                fontWeight: "inherit",
                fontSize: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit",
                color: "inherit",
                padding: "12px 0",
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}

import { addMonths } from "date-fns";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

export default function CustomDatePicker({ startDate, endDate, onChange }) {
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 6)}
      startDate={startDate}
      endDate={endDate}
      isClearable
      selectsRange
      placeholderText="Booking date"
      showDisabledMonthNavigation
      formatWeekDay={(day) => day.slice(0, 3).toUpperCase()}
    />
  );
}

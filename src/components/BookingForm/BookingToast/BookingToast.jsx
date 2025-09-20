import { format } from "date-fns";
import toast from "react-hot-toast";

export const showBookingToast = (values, currentCar) => {
  const [start, end] = values.bookingDate;

  let bookingDateText = "";
  if (start && end) {
    bookingDateText = `${format(start, "dd/MM/yyyy")} - ${format(
      end,
      "dd/MM/yyyy"
    )}`;
  } else if (start) {
    bookingDateText = format(start, "dd/MM/yyyy");
  } else {
    bookingDateText = "No date selected";
  }

  toast(
    (t) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "12px 16px",
          background: "#f0f9ff",
          color: "#0366d6",
          border: "1px solid #0366d6",
          borderRadius: "8px",
          maxWidth: "320px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <strong style={{ fontSize: "14px" }}>
          {values.name}, your booking is confirmed!
        </strong>
        <span style={{ fontSize: "16px" }}>
          We have received your request for a{" "}
          <strong>
            {currentCar.brand} {currentCar.model}
          </strong>{" "}
          car, booked for <strong>{bookingDateText}</strong>. We will contact
          you soon!
        </span>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={() => toast.dismiss(t.id)}
            style={{
              border: "none",
              background: "transparent",
              color: "#0366d6",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Close ✖
          </button>
        </div>
      </div>
    ),
    {
      duration: 30000,
      position: "top-center",
    }
  );
};

import css from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Joi from "joi";
import { joiToFormErrors } from "../../utils/joiToFormErrors";
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const schema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should be at least 2 characters",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email format",
    }),
  bookingDate: Joi.date()
    .min(new Date().setHours(0, 0, 0, 0))
    .required()
    .messages({
      "date.min": "Booking date cannot be in the past",
      "date.base": "Booking date is required",
    }),
  comment: Joi.string().max(300).allow(""),
});

export default function BookingForm() {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const validate = (values) => {
    const { error } = schema.validate(values, { abortEarly: false });
    return error ? joiToFormErrors(error) : {};
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Booking data:", values);
    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, values, setFieldValue }) => (
          <Form className="form">
            {/* Name */}
            <div className="formGroup">
              <label htmlFor="name" className={css.visuallyHidden}>
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder={`Name${!touched.name || !values.name ? " *" : ""}`}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            {/* Email */}
            <div className="formGroup">
              <label htmlFor="email" className={css.visuallyHidden}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder={`Email${
                  !touched.email || !values.email ? " *" : ""
                }`}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            {/* Booking Date */}
            <div className="formGroup">
              <label htmlFor="bookingDate" className={css.visuallyHidden}>
                Booking Date
              </label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disablePast
                  value={values.bookingDate}
                  onChange={(newValue) =>
                    setFieldValue("bookingDate", newValue)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder={`Booking Date${
                        !touched.bookingDate || !values.bookingDate ? " *" : ""
                      }`}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          backgroundColor: "var(--inputs)",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "var(--main)",
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
              <ErrorMessage
                name="bookingDate"
                component="div"
                className="error"
              />
            </div>

            {/* Comment */}
            <div className="formGroup">
              <label htmlFor="comment" className={css.visuallyHidden}>
                Comment
              </label>
              <Field as="textarea" name="comment" id="comment" rows="4" />
              <ErrorMessage name="comment" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Reserve
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

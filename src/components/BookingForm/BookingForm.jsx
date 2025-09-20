import css from "./BookingForm.module.css";
import Joi from "joi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Button from "../reusable/Button/Button";
import DatePicker from "../reusable/DatePicker/DatePicker";
import { showBookingToast } from "./BookingToast/BookingToast";

import { joiToFormErrors } from "../../utils/joiToFormErrors";

import { selectCarsData } from "../../redux/cars/selectors";

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
  bookingDate: Joi.array().length(2).items(Joi.date()).messages({
    "array.length": "Please select both start and end dates",
    "date.base": "Invalid date format",
  }),
  comment: Joi.string().max(300).allow(""),
});

export default function BookingForm() {
  const [focusedField, setFocusedField] = useState("");

  const { currentCar } = useSelector(selectCarsData);

  const initialValues = {
    name: "",
    email: "",
    bookingDate: [null, null],
    comment: "",
  };

  const validate = (values) => {
    const { error } = schema.validate(values, { abortEarly: false });
    return error ? joiToFormErrors(error) : {};
  };

  const handleSubmit = (values, { resetForm }) => {
    showBookingToast(values, currentCar);
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
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor="name" className={css.visuallyHidden}>
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder={`Name${
                  focusedField !== "name" && !values.name ? " *" : ""
                }`}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField("")}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="email" className={css.visuallyHidden}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder={`Email${
                  focusedField !== "email" && !values.email ? " *" : ""
                }`}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="bookingDate" className={css.visuallyHidden}>
                Booking Date
              </label>
              <DatePicker
                startDate={values.bookingDate[0]}
                endDate={values.bookingDate[1]}
                onChange={(dates) => {
                  setFieldValue("bookingDate", dates);
                }}
              />

              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="comment" className={css.visuallyHidden}>
                Comment
              </label>
              <Field
                as="textarea"
                name="comment"
                id="comment"
                placeholder="Comment"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className={css.btn}>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

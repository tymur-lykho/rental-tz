import { Link } from "react-router";
import css from "./CarInformation.module.css";
import getAddress from "../../utils/getAddress";
import Icon from "../reusable/Icon";

export default function CarInformation({ data }) {
  const { country, city } = getAddress(data.address);

  return (
    <>
      <section className={css.main}>
        <h2 className={css.title}>
          {data.brand} {data.model}, {data.year}
          <span className={css.carId}>Id: {data.id}</span>
        </h2>

        <Link to={"/"} className={css.location}>
          <Icon id="location" className={css.locationIcon} />
          {city}, {country}
        </Link>

        <p className={css.mileage}>
          Mileage: {data.mileage.toLocaleString("uk-UA")} km
        </p>

        <p className={css.price}>${data.rentalPrice}</p>

        <p className={css.description}>{data.description}</p>
      </section>

      <secton className={css.conditions}></secton>
    </>
  );
}

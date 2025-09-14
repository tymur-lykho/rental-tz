import { Link } from "react-router";
import css from "./CarInformation.module.css";
import getAddress from "../../utils/getAddress";
import Icon from "../reusable/Icon";
import ConditionList from "../ConditionsList/ConditionsList";

export default function CarInformation({ data }) {
  const { country, city } = getAddress(data.address);

  return (
    <div>
      <section className={css.main}>
        <h2 className={css.title}>
          {data.brand} {data.model}, {data.year}
          <span className={css.carId}>
            Id: {data.id.slice(0, 8).toUpperCase()}
          </span>
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

      <section className={css.conditions}>
        <ConditionList
          title="Rental Conditions:"
          list={data.rentalConditions}
        />
        <ConditionList
          title="Car Specifications:"
          list={[
            `Year: ${data.year}`,
            `Type: ${data.type}`,
            `Fuel Consumption: ${data.fuelConsumption}`,
            `Engine Size: ${data.engineSize}`,
          ]}
        />
        <ConditionList
          title="Accessories and functionalities:"
          list={[...data.accessories, ...data.functionalities]}
        />
      </section>
    </div>
  );
}

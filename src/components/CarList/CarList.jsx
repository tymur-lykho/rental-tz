import css from "./CarList.module.css";

import CarCard from "../CarCard/CarCard";
import Container from "../reusable/Container/Container";

export default function CarList({ cars }) {
  return (
    <Container className={css.container}>
      {!cars.length && (
        <h2 style={{ textAlign: "center" }}>
          Sorry. Nothing found for your query
        </h2>
      )}
      {!!cars.length && (
        <ul className={css.carList}>
          {cars.map((car) => (
            <li key={car.id} className={css.carItem}>
              <CarCard data={car} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

import CarCard from "../CarCard/CarCard";
import Container from "../reusable/Container/Container";
import css from "./CarList.module.css";

export default function CarList({ cars }) {
  return (
    <Container className={css.container}>
      <ul className={css.carList}>
        {cars.map((car) => (
          <li key={car.id} className={css.carItem}>
            <CarCard data={car} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

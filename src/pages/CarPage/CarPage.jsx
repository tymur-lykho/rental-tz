import Container from "../../components/reusable/Container/Container";
import BookingForm from "../../components/BookingForm/BookingForm";
import css from "./CarPage.module.css";
import CarInformation from "../../components/CarInformation/CarInformation";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarData } from "../../redux/cars/operations";
import { selectCarsData } from "../../redux/cars/selectors";

export default function CarPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { currentCar: car } = useSelector(selectCarsData);

  useEffect(() => {
    dispatch(fetchCarData(id));
  }, []);

  if (!car || !car.id) return <div>Loading...</div>;

  return (
    <Container className={css.container}>
      <div className={css.imageFormWrapper}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.image}
          width="640"
          height="512"
        />
        <BookingForm />
      </div>
      <CarInformation data={car} />
    </Container>
  );
}

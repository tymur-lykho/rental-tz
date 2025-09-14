import css from "./CarPage.module.css";

import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/reusable/Loader/Loader";
import BookingForm from "../../components/BookingForm/BookingForm";
import Container from "../../components/reusable/Container/Container";
import CarInformation from "../../components/CarInformation/CarInformation";

import { fetchCarData } from "../../redux/cars/operations";
import { selectCarsData } from "../../redux/cars/selectors";

export default function CarPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { currentCar: car, isLoading } = useSelector(selectCarsData);

  useEffect(() => {
    dispatch(fetchCarData(id));
  }, [dispatch, id]);

  if (isLoading || !car.id) return <Loader />;

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

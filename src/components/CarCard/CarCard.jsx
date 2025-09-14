import css from "./CarCard.module.css";

import clsx from "clsx";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Icon from "../reusable/Icon";
import Button from "../reusable/Button/Button";

import { selectLikedCars } from "../../redux/cars/selectors";
import {
  addCarToLikeList,
  removeCarFromLikeList,
} from "../../redux/cars/slice";

import getAddress from "../../utils/getAddress";

export default function CarCard({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { country, city } = getAddress(data.address);

  const likedCars = useSelector(selectLikedCars);

  const isLiked = likedCars?.includes(data.id) || false;

  const handleClickLikeCar = (id) => {
    if (isLiked) {
      dispatch(removeCarFromLikeList(id));
    } else {
      dispatch(addCarToLikeList(id));
    }
  };

  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img
          src={data.img}
          alt={`${data.brand} ${data.model}`}
          width={276}
          height={268}
          className={css.image}
          onClick={() => navigate(`/catalog/${data.id}`)}
        />
        <button
          className={css.likeBtn}
          onClick={() => {
            handleClickLikeCar(data.id);
          }}
        >
          <Icon
            id={isLiked ? "heart-fill" : "heart"}
            width={16}
            height={16}
            className={clsx(css.likeIcon, isLiked && css.liked)}
          />
        </button>
      </div>
      <h3 className={css.title} onClick={() => navigate(`/catalog/${data.id}`)}>
        <span>
          {data.brand} <span className={css.model}>{data.model}</span>,{" "}
          {data.year}
        </span>
        <span className={css.price}>${data.rentalPrice}</span>
      </h3>
      <ul className={`${css.dataList} ${css.baseData}`}>
        <li className={css.tag}>{city}</li>
        <li className={css.tag}>{country}</li>
        <li className={css.tag}>{data.rentalCompany}</li>
      </ul>
      <ul className={`${css.dataList} ${css.details}`}>
        <li className={css.tag}>{data.type}</li>
        <li className={css.tag}>{data.mileage.toLocaleString("uk-UA")} km</li>
      </ul>
      <Button type="link" linkTo={`/catalog/${data.id}`} className={css.btn}>
        Read more
      </Button>
    </div>
  );
}

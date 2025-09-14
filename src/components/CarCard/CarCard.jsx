import css from "./CarCard.module.css";
import Button from "../reusable/Button/Button";
import Icon from "../reusable/Icon";
import { useNavigate } from "react-router";
import getAddress from "../../utils/getAddress";

export default function CarCard({ data }) {
  const navigate = useNavigate();

  const { country, city } = getAddress(data.address);

  return (
    <div className={css.card} onClick={() => navigate(`/catalog/${data.id}`)}>
      <div className={css.imgWrapper}>
        <img
          src={data.img}
          alt={`${data.brand} ${data.model}`}
          className={css.image}
        />
        <button className={css.likeBtn}>
          <Icon id="heart" width={16} height={16} className={css.likeIcon} />
        </button>
      </div>
      <h3 className={css.title}>
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

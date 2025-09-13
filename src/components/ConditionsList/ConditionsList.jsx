import getIconId from "../../utils/getIconId";
import Icon from "../reusable/Icon";
import css from "./ConditionsList.module.css";

export default function ConditionList({ title, list }) {
  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.list}>
        {list.map((item) => {
          return (
            <li className={css.item}>
              <Icon
                id={getIconId(item)}
                width={16}
                height={16}
                className={css.icon}
              />
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

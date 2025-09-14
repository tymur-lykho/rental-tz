import css from "./Filters.module.css";
import Select from "../reusable/Select/Select";
import FromToInput from "../reusable/FromToInput/FromToInput";
import Button from "../reusable/Button/Button";
import Container from "../reusable/Container/Container";

export default function Filters() {
  return (
    <Container>
      <section className={css.filterSection}>
        <Select
          title="Car brand"
          value={""}
          values={[1, 2, 3]}
          textInSelect="Choose a brand"
        ></Select>
        <Select
          title="Car brand"
          value={""}
          values={[1, 2, 3]}
          textInSelect="Choose a price"
        ></Select>
        <FromToInput title="Сar mileage / km" fromLabel="From" toLabel="To" />
        <Button type="submit"> Search </Button>
      </section>
    </Container>
  );
}

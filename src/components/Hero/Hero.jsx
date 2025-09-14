import css from "./Hero.module.css";

import Button from "../reusable/Button/Button";
import Container from "../reusable/Container/Container";

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container className={css.container}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Button className={css.btn} linkTo={"/catalog"}>
          View Catalog
        </Button>
      </Container>
    </section>
  );
}

import css from "./Options.module.css";
import App from "../App/App";

export default function Options({ handleClicks }) {
  return (
    <div>
      <ul className={css.list}></ul>
      {}
      <button className={css.button} onClick={handleClicks()}>
        Good
      </button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
      <button className={css.button}>Reset</button>
    </div>
  );
}

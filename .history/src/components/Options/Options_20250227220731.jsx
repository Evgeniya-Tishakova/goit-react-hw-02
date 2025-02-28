import css from "./Options.module.css";

export default function Options({ good, bad, neutral }) {
  return (
    <div>
      <ul className={css.list}></ul>
      {}
      <button className={css.button} onClick={}>
        Good
      </button>
      <button className={css.button} onClick={}>
        Neutral
      </button>
      <button className={css.button} onClick={}>
        Bad
      </button>
      <button className={css.button} onClick={}>
        Reset
      </button>
    </div>
  );
}

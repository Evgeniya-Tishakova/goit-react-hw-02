import css from "./Options.module.css";

export default function Options({ handle }) {
  return (
    <div>
      <ul className={css.list}></ul>
      {}
      <button className={css.button} onClick={handle()}>
        Good
      </button>
      <button className={css.button}>Neutral</button>
      <button className={css.button}>Bad</button>
      <button className={css.button}>Reset</button>
    </div>
  );
}

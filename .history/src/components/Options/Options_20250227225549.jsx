import css from "./Options.module.css";

export default function Options({ updateFeedback, reset, isShown }) {
  return (
    <div>
      <ul className={css.list}></ul>
      {}
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      <button className={css.button} onClick={() => reset()}>
        Reset
      </button>
      {}
    </div>
  );
}

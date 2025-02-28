import css from "./Options.module.css";

export default function Options({ updateFeedback }) {
  return (
    <div>
      <ul className={css.list}></ul>
      {}
      <button className={css.button} onClick={updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={updateFeedback("neutra")}>
        Neutral
      </button>
      <button className={css.button} onClick={updateFeedback("bad")}>
        Bad
      </button>
    </div>
  );
}

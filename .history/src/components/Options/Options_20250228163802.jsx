import css from "./Options.module.css";

export default function Options({ updateFeedback, reset, isShown }) {
  return (
    <div>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {isShown && (
        <button className={css.button} onClick={() => reset()}>
          Reset
        </button>
      )}
      {}
    </div>
  );
}

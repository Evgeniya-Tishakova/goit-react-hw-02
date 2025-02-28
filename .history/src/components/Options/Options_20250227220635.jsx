import css from "./Options.module.css";

export default function Options({ good, bad }) {
  return (
    <div>
      <ul className={css.list}></ul>
      {}
      <button className={css.button} onClick={handleGood}>
        Good
      </button>
      <button className={css.button} onClick={handleNeutral}>
        Neutral
      </button>
      <button className={css.button} onClick={handleBad}>
        Bad
      </button>
      <button className={css.button} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

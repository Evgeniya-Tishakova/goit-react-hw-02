import css from "./Options.module.css";

export default function Options({ handle }) {
  return (
    <div>
      <ul className={css.list}></ul>
      {}
      <button className={css.button} onClick={handle()}></button>
      <button className={css.button}></button>
      <button className={css.button}></button>
      <button className={css.button}></button>
    </div>
  );
}

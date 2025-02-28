import css from "./Options.module.css";

export default function Options({ handle }) {
  return (
    <div>
      <button onClick={handle()}></button>
      <button></button>
      <button></button>
      <button></button>
    </div>
  );
}

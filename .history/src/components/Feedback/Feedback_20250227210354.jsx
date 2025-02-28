import css from "./Feedback/module.css";

export default function Feedback({ rewiewType: { good, neutral, bad } }) {
  const total = good + neutral + bad;
  return (
    <div>
      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>
      <p>total: {total}</p>
      <p>positive: {((good + neutral) / total)) * 100}%</p>
    </div>
  );
}

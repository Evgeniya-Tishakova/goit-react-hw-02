import css from "./Feedback/module.css";

export default function Feedback({ rewiewType: { good, neutral, bad } }) {
  return (
    <div>
      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>
      <p>total: {good + neutral + bad}</p>
      <p>positive: {((good + neutral) / (good + neutral + bad)) * 100}%</p>
    </div>
  );
}

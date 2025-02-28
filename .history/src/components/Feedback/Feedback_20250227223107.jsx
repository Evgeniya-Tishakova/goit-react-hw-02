import css from "./Feedback.module.css";

export default function Feedback({ rewiewType: { good, neutral, bad } }) {
  const totalFeedback = good + neutral + bad;
  return (
    <div>
      <p className={css.descr}>{good}</p>
      <p className={css.descr}>{neutral}</p>
      <p className={css.descr}>{bad}</p>
      <p className={css.descr}>total: {total}</p>
      <p className={css.descr}>
        positive: {((good + neutral) / (total ? total : 1)) * 100}%
      </p>
    </div>
  );
}

import css from "./Feedback.module.css";

export default function Feedback({
  rewiewType: { good, neutral, bad },
  totalFeedback,
}) {
  return (
    <div>
      <p className={css.descr}>{good}</p>
      <p className={css.descr}>{neutral}</p>
      <p className={css.descr}>{bad}</p>
      <p className={css.descr}>total: {totalFeedback}</p>
      <p className={css.descr}>
        positive:{" "}
        {((good + neutral) / (totalFeedback ? totalFeedback : 1)) * 100}%
      </p>
    </div>
  );
}

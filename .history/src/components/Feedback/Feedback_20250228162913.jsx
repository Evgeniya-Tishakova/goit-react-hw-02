import css from "./Feedback.module.css";

export default function Feedback({
  rewiewType: { good, neutral, bad },
  totalFeedback,
}) {
  return (
    <div>
      <p className={css.descr}>Good: {good}</p>
      <p className={css.descr}>Neutral: {neutral}</p>
      <p className={css.descr}>Bad: {bad}</p>
      <p className={css.descr}>Total: {totalFeedback}</p>
      <p className={css.descr}>
        positive:{" "}
        {((good + neutral) / (totalFeedback ? totalFeedback : 1)) * 100}%
      </p>
    </div>
  );
}

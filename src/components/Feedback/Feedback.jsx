export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </div>
  );
}
